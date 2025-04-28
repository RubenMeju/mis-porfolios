"use client";

import Scene from "./canvas/Scene";
import { Loader } from "@react-three/drei";

export default function Header() {
  return (
    <section className="w-screen h-screen">
      {/* Canvas 3D */}
      <Scene />

      {/* Loader global de Drei */}
      <Loader />
    </section>
  );
}
