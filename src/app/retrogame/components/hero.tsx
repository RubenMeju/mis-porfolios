"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cloudPosition, setCloudPosition] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const cloudAnimation = setInterval(() => {
      setCloudPosition((prev) => (prev + 1) % 20);
    }, 100);

    return () => clearInterval(cloudAnimation);
  }, []);

  return (
    <div className="container mx-auto px-4 min-h-[90vh] flex flex-col justify-center items-center relative">
      <div
        className={`text-center max-w-3xl transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
          Rubén Yáñez
        </h1>

        <div className="relative w-32 h-32 mx-auto my-8">
          <div
            className="absolute w-24 h-16 bg-white rounded-full opacity-80"
            style={{
              top: `${Math.sin(cloudPosition * 0.2) * 10 + 20}px`,
              left: `${Math.cos(cloudPosition * 0.2) * 10 + 20}px`,
            }}
          >
            <div className="absolute -top-6 -left-4 w-16 h-16 bg-white rounded-full opacity-80"></div>
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-full opacity-80"></div>
            <div className="absolute -top-2 left-8 w-12 h-12 bg-white rounded-full opacity-80"></div>
          </div>
          <div
            className="absolute w-16 h-16 bg-yellow-500 rounded-md"
            style={{
              top: `${Math.sin(cloudPosition * 0.2) * 10 + 50}px`,
              left: `${Math.cos(cloudPosition * 0.2) * 10 + 40}px`,
            }}
          >
            <div className="w-4 h-4 bg-black absolute top-2 left-2"></div>
            <div className="w-4 h-4 bg-black absolute top-2 right-2"></div>
            <div className="w-8 h-2 bg-black absolute bottom-4 left-4"></div>
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Desarrollador Fullstack apasionado por <br className="md:hidden" />
          <span className="text-yellow-400 font-bold">React</span>,
          <span className="text-green-400 font-bold"> Django</span> y
          <span className="text-blue-400 font-bold"> Phaser.js</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="#proyectos"
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 hover:rotate-1 relative overflow-hidden group"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </Link>

          <Link
            href="#contacto"
            className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 font-bold rounded-md transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
          >
            Contáctame
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#proyectos" aria-label="Desplazarse hacia abajo">
          <ChevronDown className="h-8 w-8 text-yellow-400" />
        </Link>
      </div>

      {/* Pixel art decorations */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500 opacity-70 hidden md:block"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 opacity-70 hidden md:block"></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-green-500 opacity-70 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-red-500 opacity-70 hidden md:block"></div>
    </div>
  );
};

export default Hero;
