import {
  Gamepad2,
  Terminal,
  Code2,
  Cpu,
  Wifi,
  Database,
  Power,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { TypingText } from "./terminal-vintage/components/typing-text";
import Scene from "./portfolio-three-js/components/canvas/Scene";
import { Card3D } from "./components/card_3d";

export default function IndexPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Dibujar los cuadraditos */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-pink-500"></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-white text-center py-8 pt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-blue-900/20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-green-500">
            Rubén Yáñez
          </h1>
          <h2 className="text-2xl sm:text-4xl text-gray-200 mb-4">
            Desarrollador Fullstack
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300">
            Elige tu experiencia
          </p>
        </div>
      </div>

      {/* Split Screen Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-10 justify-center items-center flex-grow px-4 py-10">
        {/* Gaming Side */}
        <Link
          href="/retrogame"
          className="hover:scale-105 transition-transform duration-500 w-full max-w-sm"
        >
          <div className="min-h-[460px] sm:min-h-[500px] p-6 sm:p-8 relative overflow-hidden bg-black/50 rounded-lg">
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <div className="pixel-border p-6 sm:p-8 rounded-lg backdrop-blur-sm">
                <Gamepad2 className="w-20 h-20 sm:w-24 sm:h-24 text-pink-500 mb-6 floating" />
                <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-4">
                  RETRO GAMING
                </h1>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: Shield, text: "PLAYER 1" },
                    { icon: Power, text: "START" },
                    { icon: Wifi, text: "CONNECT" },
                    { icon: Database, text: "SAVE" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 p-3 rounded hover:from-pink-500/40 hover:to-cyan-400/40 transition-all cursor-pointer"
                    >
                      <item.icon className="w-5 h-5 text-cyan-400" />
                      <span className="text-pink-300 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Terminal Side */}
        <Link
          href="/terminal-vintage"
          className="hover:scale-105 transition-transform duration-500 w-full max-w-sm"
        >
          <div className="min-h-[460px] sm:min-h-[500px] bg-black p-6 sm:p-8 relative scanline rounded-lg">
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-6 h-6 text-green-500" />

                <div className="terminal-text text-sm text-white">
                  <TypingText text="SYSTEM.TERMINAL" delay={20} />
                </div>
              </div>

              <div className="flex-1 terminal-text text-sm font-mono overflow-y-auto">
                <div className="mb-4 text-white">
                  <span className="text-green-700">root@system</span>
                  <span className="text-green-500">:~$ </span>
                  <TypingText text="initialize_system" delay={20} />
                </div>
                <div className="space-y-2 text-amber-500">
                  <div>
                    <TypingText text="Loading kernel modules..." delay={20} />
                  </div>
                  <div>
                    <TypingText
                      text="Mounting virtual filesystems..."
                      delay={20}
                    />
                  </div>
                  <div>
                    <TypingText
                      text="Starting network services..."
                      delay={20}
                    />
                  </div>
                  <div>
                    <TypingText
                      text="Initializing security protocols..."
                      delay={20}
                    />
                  </div>
                  <div>
                    <TypingText text="Loading user interface..." delay={20} />
                  </div>
                  <div>
                    <TypingText text="System ready." delay={20} />
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-green-700">root@system</span>
                  <span className="text-green-500">:~$ </span>
                  <span className="cursor text-white">_</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto pt-4">
                <div className="text-white flex terminal-text text-sm items-center gap-2 border border-green-500/30 p-3 hover:bg-green-500/10 transition-all cursor-pointer">
                  <Code2 className="w-5 h-5 text-green-500" />
                  <TypingText text="EXECUTE" delay={20} />
                </div>
                <div className="flex text-white terminal-text text-sm items-center gap-2 border border-green-500/30 p-3 hover:bg-green-500/10 transition-all cursor-pointer">
                  <Cpu className="w-5 h-5 text-green-500" />
                  <TypingText text="PROCESS" delay={20} />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Portfolio three js  */}
        <Card3D />
      </div>
    </div>
  );
}
