"use client";
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import MarioModel, { MarioModelHandle } from "./components/MarioModel";
import { GameMap } from "./components/GameMap";
import CameraController from "./components/CamaraController";

export default function Page() {
  const marioRef = useRef<MarioModelHandle>(null);

  return (
    <div className="w-full h-dvh">
      <Suspense fallback={null}>
        <Canvas
          shadows
          camera={{ position: [0, 5, 10], fov: 50, near: 0.1, far: 500 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-5, 5, -5]} intensity={0.5} />

          <Environment files="/hdr/NightSky.exr" background />

          <GameMap />
          <MarioModel ref={marioRef} />

          <CameraController
            targetRef={marioRef}
            offset={[0, 5, -10]} // <- aquí el Z negativo
            lerpFactor={0.1}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
