export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured?: boolean
  category?: string
}

export const projects: Project[] = [
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
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
    image: "/projects/task-management.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    category: "Web App",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "/projects/weather-dashboard.jpg",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Vuetify"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
    category: "Frontend",
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and automated reporting.",
    image: "/projects/social-analytics.jpg",
    technologies: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/yourusername/social-analytics",
    liveUrl: "https://analytics-demo.vercel.app",
    category: "Data Visualization",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode, animations, and responsive design built with Next.js.",
    image: "/projects/portfolio-website.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://portfolio-demo.vercel.app",
    category: "Frontend",
  },
  {
    id: "6",
    title: "AI Chat Assistant",
    description: "Intelligent chat assistant powered by AI with context awareness and natural language processing.",
    image: "/projects/ai-chat-assistant.jpg",
    technologies: ["React", "OpenAI API", "Node.js", "WebSocket", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ai-chat",
    liveUrl: "https://aichat-demo.vercel.app",
    category: "AI/ML",
  },
]
