"use client";
// components/ClientOnly.tsx
import { useState, useEffect } from "react";
import * as THREE from "three";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}
