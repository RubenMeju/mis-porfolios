import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Planet() {
  const { viewport } = useThree();

  // Ajustamos tamaño y espaciado vertical según el ancho del viewport
  const isMobile = viewport.width < 6;
  const fontSize = isMobile ? 0.18 : 0.3;
  const firstTextY = isMobile ? 0.3 : 0.8;
  const secondTextY = 0;

  return (
    <group>
      <Text
        position={[0, firstTextY, 3.01]}
        fontSize={fontSize}
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        Desarrollador FullStack
        <meshStandardMaterial attach="material" color="white" />
      </Text>

      <Text
        position={[0, secondTextY, 3.01]}
        fontSize={fontSize}
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        Rubén Yáñez
        <meshStandardMaterial attach="material" color="white" />
      </Text>
    </group>
  );
}
