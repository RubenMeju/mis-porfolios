"use client";
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  targetRef: React.RefObject<THREE.Group>;
  offset?: [number, number, number];
  lerpFactor?: number;
}

const CameraController: React.FC<Props> = ({
  targetRef,
  offset = [0, 5, -10],
  lerpFactor = 0.1,
}) => {
  const { camera } = useThree();
  const desired = useRef(new THREE.Vector3());
  const behind = useRef(new THREE.Vector3(...offset));

  useFrame(() => {
    if (!targetRef.current) return;

    // Recoloca el offset detrás de Mario rotado por su Y
    behind.current
      .set(...offset)
      .applyAxisAngle(new THREE.Vector3(0, 1, 0), targetRef.current.rotation.y);

    // Posición deseada = Mario + offset
    desired.current.copy(targetRef.current.position).add(behind.current);

    // Suaviza posicionamiento
    camera.position.lerp(desired.current, lerpFactor);
    camera.lookAt(targetRef.current.position);
  });

  return null;
};

export default CameraController;
