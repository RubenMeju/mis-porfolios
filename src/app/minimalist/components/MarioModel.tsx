"use client";
import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useKeyboard } from "../hooks/useKeyboard";

export const MarioModel = () => {
  const modelRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models/prueba.glb");
  const { actions } = useAnimations(animations, modelRef);
  const keys = useKeyboard();
  const { camera } = useThree();
  const currentAction = useRef<string | null>(null);
  const velocity = useRef(new THREE.Vector3());

  // Animación
  useEffect(() => {
    const isMoving = keys["w"] || keys["a"] || keys["s"] || keys["d"];
    const nextAction = isMoving ? "walk" : "idle";

    if (currentAction.current !== nextAction) {
      actions[nextAction]?.reset().fadeIn(0.2).play();
      if (currentAction.current) {
        actions[currentAction.current]?.fadeOut(0.2);
      }
      currentAction.current = nextAction;
    }
  }, [keys, actions]);

  // Movimiento y rotación
  useFrame((_, delta) => {
    if (!modelRef.current) return;

    const move = new THREE.Vector3();
    const speed = 3;

    // Captura del movimiento de las teclas
    if (keys["w"]) move.z -= 1;
    if (keys["s"]) move.z += 1;
    if (keys["a"]) move.x -= 1;
    if (keys["d"]) move.x += 1;

    // Verifica si hay movimiento
    if (move.lengthSq() > 0) {
      move.normalize().applyEuler(camera.rotation); // Movimiento relativo a la cámara
      move.y = 0; // No permitimos que el personaje vuele

      // Suavizado del movimiento
      velocity.current.lerp(move.multiplyScalar(speed), 0.2);
      modelRef.current.position.addScaledVector(velocity.current, delta);

      // Rotación hacia la dirección de movimiento
      const targetAngle = Math.atan2(velocity.current.x, velocity.current.z);
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetAngle,
        0.1 // Suavizado de la rotación
      );
    }

    // Hacer que la cámara siga a Mario
    if (modelRef.current) {
      // Configura la posición de la cámara detrás de Mario
      const offset = new THREE.Vector3(0, 5, 10); // Ajusta la posición de la cámara
      const cameraPosition = modelRef.current.position.clone().add(offset);
      camera.position.lerp(cameraPosition, 0.1); // Suavizado en el movimiento de la cámara
      camera.lookAt(modelRef.current.position); // La cámara siempre mira a Mario
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.1} // Reducir aún más el tamaño de Mario
      position={[0, 1, 0]} // Asegúrate de que Mario no esté por debajo del suelo
    />
  );
};
