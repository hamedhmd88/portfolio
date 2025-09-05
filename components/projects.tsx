"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured?: boolean
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/projects/ecommerce-platform.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
    image: "/projects/task-management.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "/projects/weather-dashboard.jpg",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Vuetify"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and automated reporting.",
    image: "/projects/social-analytics.jpg",
    technologies: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/yourusername/social-analytics",
    liveUrl: "https://analytics-demo.vercel.app",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode, animations, and responsive design built with Next.js.",
    image: "/projects/portfolio-website.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://portfolio-demo.vercel.app",
  },
  {
    id: "6",
    title: "AI Chat Assistant",
    description: "Intelligent chat assistant powered by AI with context awareness and natural language processing.",
    image: "/projects/ai-chat-assistant.jpg",
    technologies: ["React", "OpenAI API", "Node.js", "WebSocket", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ai-chat",
    liveUrl: "https://aichat-demo.vercel.app",
  },
]

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background ${
        project.featured ? "md:col-span-2" : ""
      }`}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`Screenshot of ${project.title} project showing the main interface`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="bg-background/90 backdrop-blur-sm hover:bg-background focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
            >
              <Github className="w-4 h-4 mr-2" aria-hidden="true" />
              Code
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary/90 backdrop-blur-sm hover:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo (opens in new tab)`}
            >
              <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
              Demo
            </a>
          </Button>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3
            id={`project-title-${project.id}`}
            className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors"
          >
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-2 text-pretty">{project.description}</p>
        </div>

        <div role="list" aria-label={`Technologies used in ${project.title}`}>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs" role="listitem">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links for mobile/keyboard navigation */}
        <div className="flex gap-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          <Button asChild size="sm" className="flex-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6" aria-labelledby="projects-heading">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 id="projects-heading" className="text-4xl lg:text-5xl font-bold text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of projects that showcase my skills in full-stack development, UI/UX design, and
            problem-solving.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          role="region"
          aria-label="Featured projects showcase"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
