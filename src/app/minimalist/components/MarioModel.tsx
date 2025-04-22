"use client";
import React, { useEffect, useRef, forwardRef, MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useKeyboard } from "../hooks/useKeyboard";

export type MarioModelHandle = THREE.Group;

const MarioModel = forwardRef<MarioModelHandle>((_, ref) => {
  const group = ref as MutableRefObject<THREE.Group>;
  const { scene, animations } = useGLTF("/models/prueba.glb");
  const { actions } = useAnimations(animations, group);
  const keys = useKeyboard();
  const currentAction = useRef<"idle" | "walk">("idle");
  const velocity = useRef(new THREE.Vector3());

  const moveSpeed = 5; // unidades/seg
  const rotSpeed = Math.PI; // rad/seg
  const smoothing = 0.1; // lerp factor

  // Empieza en idle
  useEffect(() => {
    actions.idle?.play();
    currentAction.current = "idle";
  }, [actions]);

  useFrame((_, delta) => {
    if (!group.current) return;

    // 1) Rotación con A/D
    if (keys.a) {
      group.current.rotation.y += rotSpeed * delta;
    }
    if (keys.d) {
      group.current.rotation.y -= rotSpeed * delta;
    }

    // 2) Movimiento W/S en la dirección que mira Mario
    const forwardDir = new THREE.Vector3(0, 0, -1)
      .applyQuaternion(group.current.quaternion)
      .setY(0)
      .normalize();

    let intendedSpeed = 0;
    if (keys.w) intendedSpeed = -moveSpeed;
    else if (keys.s) intendedSpeed = moveSpeed;

    // 3) Suaviza la velocidad
    const targetVel = forwardDir.multiplyScalar(intendedSpeed);
    velocity.current.lerp(targetVel, smoothing);

    // 4) Aplica posición
    group.current.position.addScaledVector(velocity.current, delta);

    // 5) Animación según si está avanzando
    const isMoving = Math.abs(intendedSpeed) > 0;
    const next = isMoving ? "walk" : "idle";
    if (next !== currentAction.current) {
      actions[currentAction.current]?.fadeOut(0.2);
      actions[next]?.reset().fadeIn(0.2).play();
      currentAction.current = next;
    }
  });

  return (
    <group ref={group} scale={[0.1, 0.1, 0.1]} position={[0, 1, 0]}>
      <primitive object={scene} />
    </group>
  );
});
MarioModel.displayName = "MarioModel";
export default MarioModel;
