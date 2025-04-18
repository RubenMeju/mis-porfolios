// components/Floor.tsx
import { useTexture } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Floor() {
  const texture = useTexture("/textures/azul.jpg");
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <MeshReflectorMaterial
        map={texture}
        mixStrength={0.5}
        resolution={1024}
        blur={[500, 500]}
        mixBlur={0.5}
        metalness={0.2}
        roughness={0.4}
      />
    </mesh>
  );
}
