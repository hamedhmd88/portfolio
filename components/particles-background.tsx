"use client"

import { useCallback, useEffect, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import Particles from "@tsparticles/react"
import type { Container, Engine } from "@tsparticles/engine"
import { useTheme } from "next-themes"

export function ParticlesBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768) // Only show on md+ screens
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    checkScreenSize()

    const handleResize = () => checkScreenSize()
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }

    window.addEventListener("resize", handleResize)
    mediaQuery.addEventListener("change", handleMotionChange)

    return () => {
      window.removeEventListener("resize", handleResize)
      mediaQuery.removeEventListener("change", handleMotionChange)
    }
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Particles loaded successfully")
    }
  }, [])

  if (!mounted || reducedMotion || !isLargeScreen) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60, // Reduced FPS for better performance
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2, // Reduced quantity for performance
            },
            repulse: {
              distance: 150, // Reduced distance for performance
              duration: 0.3,
            },
          },
        },
        particles: {
          color: {
            value: theme === "dark" ? ["#059669", "#6366f1", "#10b981"] : ["#047857", "#4f46e5", "#0d9488"],
          },
          links: {
            color: theme === "dark" ? "#059669" : "#047857",
            distance: 120, // Reduced distance for performance
            enable: true,
            opacity: theme === "dark" ? 0.15 : 0.1, // Reduced opacity for subtlety
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5, // Reduced speed for performance
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000, // Increased area to reduce particle density
            },
            value: 50, // Reduced particle count for performance
          },
          opacity: {
            value: theme === "dark" ? 0.2 : 0.15, // Reduced opacity
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 }, // Reduced max size for performance
          },
        },
        detectRetina: true,
        reduceDuplicates: true,
      }}
    />
  )
}
