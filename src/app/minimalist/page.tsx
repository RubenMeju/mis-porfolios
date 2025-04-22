"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MarioModel } from "./components/MarioModel";
import { GameMap } from "./components/GameMap";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Page() {
  return (
    <div className="w-full h-dvh">
      <Suspense>
        <Canvas
          camera={{
            position: [0, 10, 20], // Cambiar la posición de la cámara
            fov: 50, // Ajusta el campo de visión
            near: 0.1, // Distancia mínima de visión
            far: 500, // Distancia máxima de visión
          }}
          shadows
        >
          {/* Luz Ambiental para simular una luz suave en toda la escena */}
          <ambientLight intensity={0.2} />

          {/* Luz Direccional (simula el sol) con sombras */}
          <directionalLight
            position={[10, 20, 10]}
            intensity={1.0}
            castShadow
            shadow-mapSize-width={1024} // Resolución de las sombras
            shadow-mapSize-height={1024}
            shadow-camera-near={0.1}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          {/* Luz de relleno para iluminar las áreas oscuras */}
          <pointLight position={[-5, 5, -5]} intensity={0.4} />

          {/* Luz puntual adicional para crear efectos de luz localizados */}
          <pointLight position={[2, 3, 5]} intensity={0.7} color="white" />

          {/* Luz de área suave */}
          <rectAreaLight
            width={5}
            height={5}
            position={[10, 10, 10]}
            intensity={2}
            color="white"
            castShadow
          />
          {/* Componente de HDRi para iluminación y reflejos más realistas */}
          <Environment files="/hdr/NightSky.exr" background />
          {/* Agregar controles para la cámara */}
          <OrbitControls />
          <MarioModel />
          <GameMap />
        </Canvas>
      </Suspense>
    </div>
  );
}
