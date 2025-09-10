"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const typewriterText = "Front-End Developer & Web Designer"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typewriterText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      // وقتی متن کامل شد، بعد از 5 ثانیه ریست کن
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 mx-auto"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-6 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 relative"
        >
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
             duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            repeatType: "mirror",
            }}
            className="absolute inset-0 rounded-full blur-2xl opacity-100"
          />
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hamed Mahjoobi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl lg:text-2xl text-muted-foreground h-8"
            aria-live="polite"
            aria-label="Animated subtitle"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-primary"
              aria-hidden="true"
            >
              |
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-lg text-muted-foreground max-w-lg text-pretty"
          >
            I craft exceptional digital experiences with modern technologies. Passionate about clean code, innovative
            solutions, and bringing ideas to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex gap-4 z-30"
            role="group"
            aria-label="Hero action buttons"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="z-40"
            >
              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              >
                View Projects
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="z-40"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Profile image with gradient mask */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative flex justify-center lg:justify-end"
          role="img"
          aria-label="Professional developer portrait with animated background effects"
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute inset-0 rounded-full blur-3xl opacity-100"
          />

          {/* Profile image container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
            >
              {/* Gradient mask overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-full z-10"
                aria-hidden="true"
              />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <Image
                  src="/hamedphoto.png"
                  alt="Your Name - Professional Developer Portrait"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-80"
                aria-hidden="true"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full opacity-60"
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>

          {/* Additional glow effects */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to view more content"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
