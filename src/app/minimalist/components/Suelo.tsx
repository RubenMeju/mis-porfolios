"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Suelo = () => {
  const { scene } = useGLTF("/models/mapa.glb");

  return (
    <primitive
      object={scene}
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
      receiveShadow
    />
  );
};

export default Suelo;
