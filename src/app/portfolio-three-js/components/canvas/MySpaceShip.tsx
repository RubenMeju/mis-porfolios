import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface MySpaceShipProps {
  scale?: [number, number, number];
  rotate?: boolean; // nuevo prop opcional para rotación
}

export default function MySpaceShip({
  scale = [0.01, 0.01, 0.01],
  rotate = false, // valor por defecto: no rota
}: MySpaceShipProps) {
  const { scene, animations } = useGLTF("/models/mi_space_ship.glb");

  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const clock = useRef(new THREE.Clock());
  const sceneRef = useRef<THREE.Group>(scene); // para acceder a la escena y rotarla

  useEffect(() => {
    if (scene) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixerRef.current?.clipAction(clip).play();
      });
    }

    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [animations, scene]);

  useFrame(() => {
    if (mixerRef.current) {
      mixerRef.current.update(clock.current.getDelta());
    }

    if (rotate && sceneRef.current) {
      sceneRef.current.rotation.y += 0.01; // rota suavemente sobre el eje Y
    }
  });

  scene.scale.set(...scale);

  return <primitive object={scene} ref={sceneRef} />;
}
