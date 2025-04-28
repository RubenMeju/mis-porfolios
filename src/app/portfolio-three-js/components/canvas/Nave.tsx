import * as THREE from "three";
import { Sphere, SpotLight } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import MySpaceShip from "./MySpaceShip";

export const Nave = () => {
  const spaceshipRef = useRef<THREE.Group>(null!);
  const lightRef = useRef<THREE.SpotLight>(null!);
  const targetObj = useRef<THREE.Object3D>(new THREE.Object3D());
  const { viewport, scene } = useThree();
  const tmp = new THREE.Vector3();

  // Asegúrate de que el targetObj es agregado y removido correctamente de la escena
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.target = targetObj.current; // Establece el target solo una vez
    }

    scene.add(targetObj.current);

    return () => {
      scene.remove(targetObj.current);
    };
  }, [scene]);

  useFrame((state) => {
    // Calculamos el punto al que la nave debería "mirar"
    tmp.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    );

    // Verificación para asegurar que tmp no tenga valores NaN
    if (isNaN(tmp.x) || isNaN(tmp.y) || isNaN(tmp.z)) {
      tmp.set(0, 0, 0); // Fallback a valores válidos
    }

    // Animación de la nave
    const time = state.clock.getElapsedTime();
    spaceshipRef.current.position.y = Math.sin(time) * 0.1;

    // Verifica si spaceshipRef tiene valores válidos antes de aplicar lookAt
    if (
      spaceshipRef.current.position &&
      !isNaN(spaceshipRef.current.position.x) &&
      !isNaN(spaceshipRef.current.position.y) &&
      !isNaN(spaceshipRef.current.position.z)
    ) {
      spaceshipRef.current.lookAt(tmp); // La nave mira hacia tmp
    }

    // Movimiento suave del targetObj hacia tmp
    targetObj.current.position.lerp(tmp, 0.1);
    targetObj.current.updateMatrixWorld();
  });

  return (
    <group ref={spaceshipRef} position={[-1, 2, 4]}>
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
