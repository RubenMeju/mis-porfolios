"use client"

import { useState, useEffect } from "react"

export function BlinkingCursor() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return <span className={`${visible ? "opacity-100" : "opacity-0"}`}>█</span>
}
