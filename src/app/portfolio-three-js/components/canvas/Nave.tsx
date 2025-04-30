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

  // Detecta si es móvil
  const isMobile = viewport.width < 6;

  // Para pantallas grandes, mueve la nave más abajo
  const initialPosition = isMobile ? [0, -1.5, 3.1] : [-1, -1, 4]; // Modificar el valor Y aquí

  // Estado para controlar el movimiento del ratón
  const [lastMouseMove, setLastMouseMove] = useState(Date.now());
  const [mousePos, setMousePos] = useState([0, 0]);

  // Limites de movimiento de la nave (a la derecha e izquierda)
  const moveLimits = { left: -1.2, right: 1.2 };
  const moveSpeed = 0.05; // Velocidad del movimiento aleatorio

  // Posición de la nave en el movimiento de "búsqueda"
  const [searchPosX, setSearchPosX] = useState(0); // Coordenada X de búsqueda

  // Ref para controlar el movimiento aleatorio
  const randomMoveRef = useRef({ direction: 1 });

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.target = targetObj.current;
    }

    scene.add(targetObj.current);

    return () => {
      scene.remove(targetObj.current);
    };
  }, [scene]);

  useEffect(() => {
    // Controlamos que la nave se mueva aleatoriamente después de 1 segundo sin movimiento del ratón
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastMouseMove > 1000) {
        // Movimiento aleatorio
        setSearchPosX((prev) => {
          const nextPos = prev + randomMoveRef.current.direction * moveSpeed;
          // Si alcanza el límite izquierdo o derecho, cambia de dirección
          if (nextPos >= moveLimits.right || nextPos <= moveLimits.left) {
            randomMoveRef.current.direction *= -1; // Cambiar dirección
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
      // Si no se mueve el ratón, la nave se mueve hacia la izquierda o derecha de manera continua
      tmp.set(searchPosX, 0, 0);
    } else {
      // Si el ratón se mueve, la nave sigue al ratón
      tmp.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      );
    }

    // Verificación para asegurar que tmp no tenga valores NaN
    if (isNaN(tmp.x) || isNaN(tmp.y) || isNaN(tmp.z)) {
      tmp.set(0, 0, 0);
    }

    const time = state.clock.getElapsedTime();
    spaceshipRef.current.position.y += Math.sin(time) * 0.005;

    if (spaceshipRef.current.position) {
      spaceshipRef.current.lookAt(tmp);
    }

    targetObj.current.position.lerp(tmp, 0.1);
    targetObj.current.updateMatrixWorld();
  });

  const handleMouseMove = (e: MouseEvent) => {
    // Actualiza la última vez que el ratón se movió
    setLastMouseMove(Date.now());
    // Actualiza la posición del ratón
    setMousePos([e.clientX, e.clientY]);
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
