"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project, projects } from "@/data/projects";
import { Tilt } from "react-tilt";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Tilt
      options={{
        max: 15,
        glare: true,
        "max-glare": 0.5,
        scale: 1,
        perspective: 500,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.article
        className="group relative bg-background/20 backdrop-blur-md border border-border/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 cursor-pointer h-full"
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.25,
        }}
        viewport={{ once: true }}
        whileHover={{
          // y: -8,
          transition: { duration: 0.3 },
        }}
        role="article"
        aria-labelledby={`project-title-${project.id}`}
      >
        {/* محتوای کارت */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`Screenshot of ${project.title} project showing the main interface`}
            fill
            className="object-cover transition-transform duration-300"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* باقی محتوای کارت */}
        <div className="p-6 space-y-4">
          <div>
            <h3
              id={`project-title-${project.id}`}
              className="text-xl md:text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors"
            >
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mt-2 text-pretty">
              {project.description}
            </p>
          </div>

          <div role="list" aria-label={`Technologies used in ${project.title}`}>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs md:text-sm"
                  role="listitem"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent hover:border hover:border-primary hover:text-primary-foreground  text-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
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
            <Button
              asChild
              size="sm"
              className="flex-1 hover:bg-transparent hover:border hover:border-primary   text-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
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
    </Tilt>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      className="relative py-20 px-6 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 40% 80%, rgba(5, 150, 105, 0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 60% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0 opacity-100"
      />

      {/* Large floating bubbles */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/5 left-1/6 w-64 h-64 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-1/5 right-1/5 w-56 h-56 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-emerald-400/25 to-blue-400/25 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <h2
            id="projects-heading"
            className="text-4xl lg:text-5xl font-bold text-balance"
          >
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work, featuring front-end applications and
            innovative solutions.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
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
              href="https://github.com/hamedhmd88"
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
  );
}
