"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
