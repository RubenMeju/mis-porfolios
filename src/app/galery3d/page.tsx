"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  Environment,
  useAnimations,
} from "@react-three/drei";
import { useEffect, useRef } from "react";

type ModelProps = {
  path: string;
  scale?: number;
  position?: [number, number, number];
};

export function Model({ path, scale = 1, position = [0, 0, 0] }: ModelProps) {
  const group = useRef<any>();
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return (
    <group ref={group} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
}
export default function Page() {
  return (
    <div className="w-full h-dvh bg-slate-800">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 5, 30]} fov={50} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Model path="/models/tank.glb" scale={1.5} position={[-7, -1, 0]} />
          <Model
            path="/models/bomberman.glb"
            scale={1.5}
            position={[0, -1, 1]}
          />

          <Model path="/models/tetris.glb" scale={2} position={[8, -1, 1]} />

          <Model
            path="/models/solitario.glb"
            scale={2}
            position={[25, -1, 1]}
          />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
