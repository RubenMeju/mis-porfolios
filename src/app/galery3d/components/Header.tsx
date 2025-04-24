"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import OrbitingGeometries from "./canvas/OrbitingGeometries";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <section className="w-screen h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-4">
        <section className="backdrop-blur-sm p-6 rounded-xl max-w-3xl w-full flex flex-col gap-6 text-xl md:text-2xl">
          <div>
            <h1 className="text-sky-500 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Rubén Yáñez
            </h1>
            <h2 className="mt-2 text-lg md:text-2xl lg:text-3xl font-medium">
              Desarrollador web
              <span className="text-fuchsia-600"> Full Stack</span>
              <small className="text-sm pl-1 text-gray-300">, A Coruña</small>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/RubenMeju"
              target="_blank"
              className="flex items-center gap-3 border border-fuchsia-600 px-6 py-2 rounded-xl hover:bg-fuchsia-600 transition-all duration-300"
            >
              <Github className="w-6 h-6 md:w-8 md:h-8 fill-white" />
              <span className="text-base md:text-lg">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ruben-yanez/"
              target="_blank"
              className="flex items-center gap-3 border border-fuchsia-600 px-6 py-2 rounded-xl hover:bg-fuchsia-600 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 md:w-8 md:h-8 fill-white" />
              <span className="text-base md:text-lg">LinkedIn</span>
            </a>
          </div>
        </section>
      </div>

      <Canvas shadows className=" ">
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <spotLight position={[5, 5, 5]} intensity={1} castShadow />

          <OrbitingGeometries count={12} radius={5} scale={1} />
          <Environment preset="sunset" />

          <OrbitControls enableDamping />
        </Suspense>
      </Canvas>
    </section>
  );
}
