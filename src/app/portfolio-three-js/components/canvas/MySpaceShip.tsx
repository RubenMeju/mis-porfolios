import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function MySpaceShip() {
  const { scene, animations } = useGLTF("/models/mi_space_ship.glb");

  // Definir la referencia de mixerRef como AnimationMixer de Three.js
  const mixerRef = useRef<THREE.AnimationMixer | null>(null); // Tipado explícito para la referencia
  const clock = useRef(new THREE.Clock()); // Reloj para manejar el tiempo de las animaciones

  useEffect(() => {
    // Crear el AnimationMixer para manejar las animaciones
    if (scene) {
      mixerRef.current = new THREE.AnimationMixer(scene);

      // Agregar las animaciones del modelo al AnimationMixer
      animations.forEach((clip) => {
        mixerRef.current?.clipAction(clip).play(); // Reproducir cada animación
      });
    }

    // Asegúrate de limpiar el mixer cuando el componente se desmonte
    return () => {
      mixerRef.current?.stopAllAction(); // Detener las animaciones cuando el componente se desmonte
    };
  }, [animations, scene]);

  // En cada frame actualizamos el mixer para reproducir las animaciones
  useFrame(() => {
    if (mixerRef.current) {
      mixerRef.current.update(clock.current.getDelta()); // Actualizar el mixer con el tiempo transcurrido
    }
  });

  // Escala el modelo
  scene.scale.set(0.01, 0.01, 0.01); // Escala el modelo a la mitad de su tamaño original

  return <primitive object={scene} />;
}
