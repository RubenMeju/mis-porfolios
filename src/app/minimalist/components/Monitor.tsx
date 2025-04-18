// components/Monitor.tsx
import AutoCenterModel from "./AutoCenterModel"; // Asegúrate de que AutoCenterModel esté importado

export default function Monitor({ position = [0, 0, 0], scale = 1 }) {
  return (
    <AutoCenterModel
      url="/models/monitor.glb" // La URL de tu modelo de monitor
      scale={scale}
      position={position}
    />
  );
}
