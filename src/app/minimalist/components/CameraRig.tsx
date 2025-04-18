// components/CameraRig.tsx
import { useFrame, useThree } from "@react-three/fiber";

export default function CameraRig() {
  const { camera } = useThree();
  useFrame(() => camera.lookAt(0, 0, 0));
  return null;
}
