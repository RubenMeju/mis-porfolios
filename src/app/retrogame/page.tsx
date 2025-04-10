"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { ArrowUp } from "lucide-react";
export default function RetroGame() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 text-white font-pixel">
      <Navbar />
      <main>
        <section id="inicio" className="pt-20">
          <Hero />
        </section>
        <section id="proyectos" className="py-20">
          <Projects />
        </section>
        <section id="sobre-mi" className="py-20 bg-indigo-950/50">
          <About />
        </section>
        <section id="contacto" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg shadow-lg transition-all duration-300 animate-bounce-slow z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
