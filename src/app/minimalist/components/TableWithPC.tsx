// components/TableWithPC.tsx
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import AutoCenterModel from "./AutoCenterModel";
import * as THREE from "three";

export default function TableWithPC() {
  const table = useGLTF("/models/table.glb");

  const tableHeight = useMemo(() => {
    const box = new THREE.Box3().setFromObject(table.scene);
    return (box.max.y - box.min.y) * 1.5;
  }, [table]);

  return (
    <>
      <AutoCenterModel url="/models/table.glb" scale={1.5} />
      <AutoCenterModel
        url="/models/pc.glb"
        scale={1}
        position={[2.2, tableHeight, -0.5]}
        rotation={[0, Math.PI, 0]} // rotate PC 180°
      />
    </>
  );
}
