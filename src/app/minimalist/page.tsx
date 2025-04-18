"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";
import ClientOnly from "./components/ClientOnly";
import CameraRig from "./components/CameraRig";
import Floor from "./components/Floor";
import TableWithPC from "./components/TableWithPC";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <ClientOnly>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [5, 5, 5], fov: 50 }}>
          <Suspense fallback={<Html center>Loading...</Html>}>
            <Environment preset="sunset" />
            <ambientLight intensity={0.7} />
            <directionalLight
              position={[5, 10, 5]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <ContactShadows
              rotation-x={-Math.PI / 2}
              position={[0, 0, 0]}
              opacity={0.6}
              width={10}
              height={10}
              blur={2}
              far={5}
            />
            <OrbitControls
              enableDamping
              dampingFactor={0.1}
              maxPolarAngle={Math.PI / 2.2}
            />
            <CameraRig />
            <Floor />
            <TableWithPC />
          </Suspense>
        </Canvas>
      </ClientOnly>
    </div>
  );
}
