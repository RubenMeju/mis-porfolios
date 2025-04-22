"use client";
import { useGLTF } from "@react-three/drei";

// Componente para cargar el modelo
export const GameMap = () => {
  const { scene } = useGLTF("/models/world.glb"); // Ruta de tu archivo GLB
  return <primitive object={scene} />;
};
