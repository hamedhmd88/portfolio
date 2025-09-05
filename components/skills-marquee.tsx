"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skillsData = [
  // Row 1 - Frontend Technologies
  [
    { name: "React", logo: "/logo/React.png" },
    { name: "Next.js", logo: "/logo/NextjsIcon.png" },
    { name: "TypeScript", logo: "/logo/TypescriptIcon.png" },
    { name: "Tailwind CSS", logo: "/logo/TailwindcssIcon.png" },
    { name: "JavaScript", logo: "/logo/Javascript.png" },
    { name: "Redux Toolkit", logo: "/logo/Redux.png" },
    { name: "Github", logo: "/logo/GithubIcon.png" },
  ],
  // Row 2 - Backend & Database
  [
    { name: "َAxios", logo: "/logo/Axios.png" },
    { name: "HTML", logo: "/logo/Html5.png" },
    { name: "Css", logo: "/logo/Css3.png" },
    { name: "Zustand", logo: "/logo/zustand-logo.png" },
    { name: "Sass", logo: "/logo/Sass.png" },
    { name: "Framer", logo: "/logo/Framer.png" },
    { name: "Shadcn", logo: "/logo/shadcn.png" },
  ],
  // Row 3 - Tools & Platforms
  [
    { name: "React Query", logo: "/logo/ReactQueryIcon.png" },
    { name: "React Router", logo: "/logo/react-router.webp" },
    { name: "Vercel", logo: "/logo/VercelIcon.png" },
    { name: "Git", logo: "/logo/GitIcon.png" },
    { name: "Rest API", logo: "/logo/rest-api-icon.png" },    { name: "Figma", logo: "/logo/Figma.png" },
    { name: "React Hook Form", logo: "/logo/reacthookform.png" },
  ],
  // [
  //   { name: "Git", logo: "/logo/GitIcon.png" },
  //   { name: "Github", logo: "/logo/GithubIcon.png" },
  //   { name: "Rest API", logo: "/logo/rest-api-icon.png" },
  //   { name: "Swagger", logo: "/logo/Swagger.png" },
  //   { name: "Zustand", logo: "/logo/zustand-logo.png" },
  //   { name: "Strapi", logo: "/logo/StrapiIcon.png" },
  // ],
]

interface SkillLogoProps {
  skill: { name: string; logo: string }
  index: number
}

function SkillLogo({ skill, index }: SkillLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 mx-4 lg:mx-6 relative group"
    >
      <div className="w-full h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card/80 group-hover:shadow-lg group-hover:shadow-primary/20">
        <Image
          src={skill.logo || "/placeholder.svg"}
          alt={`${skill.name} logo`}
          width={40}
          height={40}
          className="w-8 h-8 lg:w-10 lg:h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
        />
      </div>
    </motion.div>
  )
}

interface MarqueeRowProps {
  skills: { name: string; logo: string }[]
  direction: "left" | "right"
  speed: number
  rowIndex: number
}

function MarqueeRow({ skills, direction, speed, rowIndex }: MarqueeRowProps) {
  const duplicatedSkills = [...skills, ...skills, ...skills] // Triple for seamless loop

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        animate={{
          x: direction === "left" ? [0, -100 * skills.length] : [-100 * skills.length, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex items-center"
        style={{ width: `${skills.length * 200}%` }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillLogo key={`${skill.name}-${index}`} skill={skill} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export function SkillsMarquee() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background with gradient and blur effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />

      {/* Animated background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-l from-secondary/10 to-transparent rounded-full blur-3xl"
      />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Technologies I <span className="text-primary">Love</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of the tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Marquee rows */}
        <div className="space-y-2">
          <MarqueeRow skills={skillsData[0]} direction="left" speed={26} rowIndex={0} />
          <MarqueeRow skills={skillsData[1]} direction="right" speed={30} rowIndex={1} />
          <MarqueeRow skills={skillsData[2]} direction="left" speed={22} rowIndex={2} />
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
    </section>
  )
}
