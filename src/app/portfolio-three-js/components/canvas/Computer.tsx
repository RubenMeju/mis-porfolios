import { useGLTF } from "@react-three/drei";

export default function Computer() {
  // Carga el modelo desde la carpeta public/models
  const { scene } = useGLTF("/models/tablePC.glb");
  scene.scale.set(0.5, 0.5, 0.5); // Escala el modelo a la mitad de su tamaño original
  //   scene.position.set(0, 0, 0); // Ajusta la posición del modelo
  return <primitive object={scene} />;
}
