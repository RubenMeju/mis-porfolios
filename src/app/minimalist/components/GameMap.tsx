"use client";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export const GameMap = () => {
  const { scene } = useGLTF("/models/world.glb");
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as any).isMesh) {
        (child as any).castShadow = true;
        (child as any).receiveShadow = true;
      }
    });
  }, [scene]);
  return <primitive object={scene} />;
};
