"use client"

import { useCallback, useEffect, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import Particles from "@tsparticles/react"
import type { Container, Engine } from "@tsparticles/engine"
import { useTheme } from "next-themes"

export function SkillsParticles() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleMotionChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange)
    }
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Skills particles loaded successfully")
    }
  }, [])

  if (!mounted || reducedMotion) {
    return null
  }

  return (
    <Particles
      id="skills-particles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: theme === "dark" ? "#10b981" : "#059669",
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 30,
          },
          opacity: {
            value: theme === "dark" ? 0.2 : 0.15,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
        reduceDuplicates: true,
      }}
    />
  )
}