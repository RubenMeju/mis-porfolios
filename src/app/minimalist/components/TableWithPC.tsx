// components/TableWithPC.tsx
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import AutoCenterModel from "./AutoCenterModel"; // Importa AutoCenterModel
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
        position={[2.2, tableHeight, -0.5]} // Posición del PC
        rotation={[0, Math.PI, 0]} // Rota el PC 180°
      />
      {/* Cargar el monitor usando AutoCenterModel */}
      <AutoCenterModel
        url="/models/monitor.glb" // Ruta del monitor
        scale={0.7} // Ajuste de escala del monitor
        position={[-0.3, tableHeight + 0, -1]} // Ajusta la posición del monitor sobre la mesa
        rotation={[0, Math.PI / -2, 0]} // Rota el monitor 90 grados
      />
    </>
  );
}
