"use client";
import React, { useEffect, useRef, forwardRef, MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useKeyboard } from "../hooks/useKeyboard";

export type MarioModelHandle = THREE.Group;

const MarioModel = forwardRef<MarioModelHandle>((_, ref) => {
  const group = ref as MutableRefObject<THREE.Group>;
  const { scene, animations } = useGLTF("/models/mario.glb");
  const { actions } = useAnimations(animations, group);
  const keys = useKeyboard();
  const currentAction = useRef<"idle" | "walk" | "jump">("idle");
  const velocity = useRef(new THREE.Vector3());
  console.log("animaciones ", animations);
  const isJumping = useRef(false);
  const verticalVel = useRef(0);

  const moveSpeed = 5;
  const rotSpeed = Math.PI;
  const smoothing = 0.1;
  const gravity = -9.8;
  const jumpStrength = 6;

  useEffect(() => {
    actions.idle?.play();
    currentAction.current = "idle";
  }, [actions]);

  useFrame((_, delta) => {
    if (!group.current) return;

    // ROTACIÓN A/D
    if (keys.a) group.current.rotation.y += rotSpeed * delta;
    if (keys.d) group.current.rotation.y -= rotSpeed * delta;

    // MOVIMIENTO ADELANTE/ATRÁS
    const forwardDir = new THREE.Vector3(0, 0, -1)
      .applyQuaternion(group.current.quaternion)
      .setY(0)
      .normalize();

    let intendedSpeed = 0;
    if (keys.w) intendedSpeed = -moveSpeed;
    else if (keys.s) intendedSpeed = moveSpeed;

    const targetVel = forwardDir.multiplyScalar(intendedSpeed);
    velocity.current.lerp(targetVel, smoothing);

    // SALTO
    if (keys.space && !isJumping.current) {
      isJumping.current = true;
      verticalVel.current = jumpStrength;

      actions[currentAction.current]?.fadeOut(0.2);
      actions.jump?.reset().fadeIn(0.1).play();
      currentAction.current = "jump";
    }

    // FÍSICA DEL SALTO
    if (isJumping.current) {
      verticalVel.current += gravity * delta;
      group.current.position.y += verticalVel.current * delta;

      if (group.current.position.y <= 1) {
        group.current.position.y = 1;
        isJumping.current = false;
        verticalVel.current = 0;
      }
    }

    // MOVIMIENTO EN PLANO
    group.current.position.addScaledVector(velocity.current, delta);

    // ANIMACIONES
    const isMoving = Math.abs(intendedSpeed) > 0;
    if (!isJumping.current) {
      const next = isMoving ? "walk" : "idle";
      if (next !== currentAction.current) {
        actions[currentAction.current]?.fadeOut(0.2);
        actions[next]?.reset().fadeIn(0.2).play();
        currentAction.current = next;
      }
    }
  });

  return (
    <group ref={group} scale={[0.5, 0.5, 0.5]} position={[1, 1, 1]}>
      <primitive object={scene} />
    </group>
  );
});

MarioModel.displayName = "MarioModel";
export default MarioModel;
