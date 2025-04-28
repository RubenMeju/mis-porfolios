import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Stars = (props: React.ComponentProps<"group">) => {
  const pointsRef = useRef<THREE.Points>(null!);

  // 1) Define cuántos puntos quieres
  const POINT_COUNT = 5000;

  // 2) Crea un Float32Array de POINT_COUNT * 3
  const [sphere] = useState<Float32Array>(() => {
    const arr = new Float32Array(POINT_COUNT * 3);
    return random.inSphere(arr, { radius: 15 }) as Float32Array;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points
        ref={pointsRef}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
