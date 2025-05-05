"use client";
import Link from "next/link";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import MySpaceShip from "../portfolio-three-js/components/canvas/MySpaceShip";
import { Stars } from "../portfolio-three-js/components/canvas/Stars";
import { ContactShadows, Environment } from "@react-three/drei";

export const Card3D = () => {
  return (
    <Link
      href="/portfolio-three-js"
      className="hover:scale-105 transition-transform duration-500 w-full max-w-sm"
    >
      <div className="min-h-[460px] sm:min-h-[500px] bg-black p-6 sm:p-8 relative scanline rounded-lg">
        {/* Canvas 3D */}
        <Canvas
          shadows
          style={{ position: "absolute", inset: 0 }}
          camera={{ position: [0, 0, 6] }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />

          <Suspense fallback={null}>
            <Environment preset="sunset" background={false} />
            <Stars />
            <MySpaceShip scale={[0.05, 0.05, 0.05]} rotate />
            <ContactShadows
              position={[0, -0.8, 0]}
              opacity={0.5}
              scale={10}
              blur={2.5}
              far={5}
            />
          </Suspense>
        </Canvas>
      </div>
    </Link>
  );
};
