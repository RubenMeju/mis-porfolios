import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Componente para las geometrías orbitantes
export default function OrbitingGeometries({
  count = 10,
  radius = 3.5,
  scale = 1,
}) {
  const geometries = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Diferentes tipos de geometrías
      const geometryTypes = [
        new THREE.TetrahedronGeometry(0.2 * scale),
        new THREE.BoxGeometry(0.3 * scale, 0.3 * scale, 0.3 * scale),
        new THREE.SphereGeometry(0.15 * scale),
        new THREE.OctahedronGeometry(0.2 * scale),
        new THREE.DodecahedronGeometry(0.2 * scale),
      ];

      // Seleccionar geometría aleatoria
      const geometry =
        geometryTypes[Math.floor(Math.random() * geometryTypes.length)];

      // Colores vibrantes
      const color = new THREE.Color().setHSL(Math.random(), 0.7, 0.6);

      // Posición inicial en círculo
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius * (0.8 + Math.random() * 0.4);
      const y = Math.sin(angle) * radius * (0.8 + Math.random() * 0.4);
      const z = (Math.random() - 0.5) * 2;

      // Velocidad de rotación
      const speed = 0.1 + Math.random() * 0.2;

      return {
        geometry,
        color,
        position: [x, y, z],
        speed,
        offset: Math.random() * Math.PI * 2,
      };
    });
  }, [count, radius, scale]);

  const meshRefs = useRef([]);

  // Animación de órbita
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;

      const { speed, offset } = geometries[i];

      // Movimiento orbital
      const angle = time * speed + offset;
      mesh.position.x =
        Math.cos(angle) * radius * (0.8 + Math.sin(time * 0.3 + i) * 0.2);
      mesh.position.y =
        Math.sin(angle) * radius * (0.8 + Math.sin(time * 0.2 + i) * 0.2);

      // Rotación de la geometría
      mesh.rotation.x = time * 0.5 + i;
      mesh.rotation.y = time * 0.3 + i * 0.2;
    });
  });

  return (
    <group>
      {geometries.map((props, i) => (
        <mesh
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
          position={props.position}
          geometry={props.geometry}
        >
          <meshStandardMaterial
            color={props.color}
            roughness={0.4}
            metalness={0.6}
            emissive={props.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}
