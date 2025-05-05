import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Definir el tipo de los props que esperas recibir en el componente
interface SpaceshipProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export const Spaceship: React.FC<SpaceshipProps> = (props) => {
  const group = useRef<THREE.Group>(null!);

  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf"
  );

  return (
    <group ref={group} {...props} dispose={null} rotation-y={0}>
      <mesh
        geometry={(nodes.Cube005 as THREE.Mesh).geometry}
        material={materials.Mat0}
      />
      <mesh
        geometry={(nodes.Cube005_1 as THREE.Mesh).geometry}
        material={materials.Mat1}
      />
      <mesh
        geometry={(nodes.Cube005_2 as THREE.Mesh).geometry}
        material={materials.Mat2}
      />
      <mesh
        geometry={(nodes.Cube005_3 as THREE.Mesh).geometry}
        material={materials.Window_Frame}
      />
      <mesh
        geometry={(nodes.Cube005_4 as THREE.Mesh).geometry}
        material={materials.Mat4}
      />
      <mesh
        geometry={(nodes.Cube005_5 as THREE.Mesh).geometry}
        material={materials.Mat3}
      />
      <mesh
        geometry={(nodes.Cube005_6 as THREE.Mesh).geometry}
        material={materials.Window}
      />
    </group>
  );
};

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf"
);
