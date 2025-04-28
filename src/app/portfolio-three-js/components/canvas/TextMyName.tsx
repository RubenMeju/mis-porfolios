import * as THREE from "three";
import { Float, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const TextMyName = () => {
  const viewport = useThree((s) => s.viewport);
  const textSize = Math.min(viewport.width, viewport.height) * 0.1;
  const spacing = Math.min(viewport.height, viewport.width) * 0.2;
  const spacingX = Math.min(viewport.width * 0.15, 0.5);

  return (
    <Float>
      <group name="textGroup" position={[0, 0, 0]} rotation={[0.1, 0.3, 0]}>
        <Text3D
          font="fonts/font.json"
          size={textSize}
          height={0.3}
          castShadow={true} // proyecta sombra
          receiveShadow={true} // recibe sombra
          position={[-1.05, -0.16, 0.6]}
        >
          Rubén
          <meshStandardMaterial
            color="#00bfff"
            metalness={0.2} // algo metálico para reflejar la luz
            roughness={0.5} // superficie medio rugosa
            side={THREE.DoubleSide}
          />
        </Text3D>

        <Text3D
          font="fonts/font.json"
          size={textSize}
          height={0.3}
          castShadow={true}
          receiveShadow={true}
          position={[-spacingX, -spacing, 0]}
        >
          Yáñez
          <meshStandardMaterial
            color="#00bfff"
            metalness={0.2}
            roughness={0.5}
            side={THREE.DoubleSide}
          />
        </Text3D>
      </group>
    </Float>
  );
};
