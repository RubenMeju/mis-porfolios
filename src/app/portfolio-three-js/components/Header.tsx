"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  Environment,
  Float,
  OrbitControls,
  Loader,
} from "@react-three/drei";
import { Github, Linkedin } from "lucide-react";
import OrbitingGeometries from "./canvas/OrbitingGeometries";
import Computer from "./canvas/Computer";

export default function Header() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-20">
      {/* Texto */}
      <div className="absolute top-28 z-30 w-full px-4 text-center text-white">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-xl p-6 text-xl md:text-2xl">
          <HeaderText />
          <HeaderButtons />
        </div>
      </div>

      {/* Canvas 3D */}
      <div className="h-[60%] w-full mt-28">
        <Scene />
      </div>

      {/* Loader global de Drei */}
      <Loader />
    </section>
  );
}

// --- Componente para el texto ---
function HeaderText() {
  return (
    <>
      <h1 className="text-4xl font-bold leading-tight text-sky-500 md:text-5xl lg:text-6xl">
        Rubén Yáñez
      </h1>
      <h2 className="mt-2 text-lg font-medium md:text-2xl lg:text-3xl">
        Desarrollador web
        <span className="text-fuchsia-600"> Full Stack</span>
        <small className="pl-1 text-sm text-gray-300">, A Coruña</small>
      </h2>
    </>
  );
}

// --- Componente para los botones ---
function HeaderButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <ButtonLink
        href="https://github.com/RubenMeju"
        icon={<Github className="h-6 w-6 md:h-8 md:w-8 fill-white" />}
        label="GitHub"
      />
      <ButtonLink
        href="https://www.linkedin.com/in/ruben-yanez/"
        icon={<Linkedin className="h-6 w-6 md:h-8 md:w-8 fill-white" />}
        label="LinkedIn"
      />
    </div>
  );
}

function ButtonLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl border border-fuchsia-600 px-6 py-2 text-base transition-all duration-300 hover:bg-fuchsia-600 md:text-lg"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

// --- Escena 3D ---
function Scene() {
  return (
    <Canvas
      shadows
      camera={{ fov: 15, near: 0.1, far: 1000, position: [8, 15, 10] }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <spotLight position={[5, 5, 5]} intensity={1} castShadow />
        <OrbitingGeometries count={12} radius={5} scale={1} />
        <Environment preset="sunset" background={false} />
        <Center>
          <Float>
            <Computer />
          </Float>
        </Center>
        <OrbitControls
          enableDamping
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
}
