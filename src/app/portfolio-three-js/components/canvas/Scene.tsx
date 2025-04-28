import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TextMyName } from "./TextMyName";
import { Nave } from "./Nave";
import { Stars } from "./Stars";

export default function Scene() {
  return (
    <Canvas
      shadows
      style={{ position: "absolute", inset: 0 }}
      camera={{ position: [0, 0, 6] }}
    >
      <ambientLight intensity={0.05} color="#ffffff" />

      {/* <Environment preset="sunset" background={false} /> */}
      <Stars />
      <TextMyName />
      <Suspense fallback={null}>
        <Nave />
      </Suspense>
    </Canvas>
  );
}
