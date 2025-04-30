"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

export function TypingText({ text, delay = 50, onComplete }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete(); // 👈 aquí corregido
      }
    }
  }, [currentIndex, delay, isComplete, onComplete, text]);

  return <span>{displayedText}</span>;
}
