// components/AutoCenterModel.tsx
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function AutoCenterModel({
  url,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  onAnimationUpdate = () => {},
}: {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  onAnimationUpdate?: (delta: number) => void;
}) {
  const { scene, animations } = useGLTF(url);
  const { center, min } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const c = new THREE.Vector3();
    box.getCenter(c);
    return { center: c, min: box.min.clone() };
  }, [scene]);

  // Animation handling
  const mixer = useMemo(() => {
    if (animations.length > 0) {
      const animationMixer = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => animationMixer.clipAction(clip).play());
      return animationMixer;
    }
    return null;
  }, [animations, scene]);

  useFrame((state, delta) => {
    // Update animation frame by frame if animations exist
    if (mixer) {
      mixer.update(delta);
    }
    onAnimationUpdate(delta);
  });

  const yOffset = -min.y * scale;

  return (
    <group position={position as any} rotation={rotation as any}>
      <primitive
        object={scene}
        scale={scale}
        position={[-center.x * scale, yOffset, -center.z * scale]}
        castShadow
        receiveShadow
      />
    </group>
  );
}
