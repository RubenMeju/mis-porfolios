import * as THREE from "three";
import { Sphere, SpotLight } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import MySpaceShip from "./MySpaceShip";

export const Nave = () => {
  const spaceshipRef = useRef<THREE.Group>(null!);
  const lightRef = useRef<THREE.SpotLight>(null!);
  const targetObj = useRef<THREE.Object3D>(new THREE.Object3D());
  const { viewport, scene } = useThree();
  const tmp = new THREE.Vector3();

  const isMobile = viewport.width < 6;
  const initialPosition: [number, number, number] = isMobile
    ? [0, -1.5, 3.1]
    : [-1, -1, 4];

  const [lastMouseMove, setLastMouseMove] = useState(Date.now());
  const [searchPosX, setSearchPosX] = useState(0);

  const randomMoveRef = useRef({ direction: 1 });

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.target = targetObj.current;
    }
    const currentTarget = targetObj.current;

    scene.add(targetObj.current);

    return () => {
      if (currentTarget) {
        scene.remove(currentTarget);
      }
    };
  }, [scene]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastMouseMove > 1000) {
        setSearchPosX((prev) => {
          const nextPos = prev + randomMoveRef.current.direction * 0.05;
          if (nextPos >= 1.2 || nextPos <= -1.2) {
            randomMoveRef.current.direction *= -1;
          }
          return nextPos;
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [lastMouseMove]);

  useFrame((state) => {
    const now = Date.now();

    if (now - lastMouseMove > 1000) {
      tmp.set(searchPosX, 0, 0);
    } else {
      tmp.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      );
    }

    if (isNaN(tmp.x) || isNaN(tmp.y) || isNaN(tmp.z)) {
      tmp.set(0, 0, 0);
    }

    spaceshipRef.current.position.y +=
      Math.sin(state.clock.getElapsedTime()) * 0.005;
    spaceshipRef.current.lookAt(tmp);
    targetObj.current.position.lerp(tmp, 0.1);
    targetObj.current.updateMatrixWorld();
  });

  const handleMouseMove = () => {
    setLastMouseMove(Date.now());
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <group ref={spaceshipRef} position={initialPosition}>
      <MySpaceShip />
      <SpotLight
        ref={lightRef}
        castShadow
        position={[0, -0.08, 0]}
        distance={5}
        angle={0.4}
        attenuation={5}
        anglePower={5}
        radiusTop={0.01}
        intensity={2}
      />
      <pointLight intensity={0.2} position={[0, 0, -0.3]} color="#f7c767" />
      <Sphere position={[0, 0.05, -0.45]} args={[0.01, 32, 32]}>
        <meshStandardMaterial color="#f7c767" />
      </Sphere>
    </group>
  );
};
