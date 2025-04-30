import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Nave } from "./Nave";
import { Stars } from "./Stars";
import Planet from "./Planet";

export default function Scene() {
  return (
    <Canvas
      shadows
      style={{ position: "absolute", inset: 0 }}
      camera={{ position: [0, 0, 6] }}
    >
      <ambientLight intensity={0.05} color="#ffffff" />

      <Stars />
      <Suspense fallback={null}>
        <Nave />
        <Planet />
      </Suspense>
    </Canvas>
  );
}
