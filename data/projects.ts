export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  category?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Dashboard App",
    description:
      "A modern, responsive dashboard application built using Next.js, TypeScript, Tailwind CSS, and Framer Motion. It includes light and dark themes, smooth page transitions, and fully functional dashboard components tailored for both desktop and mobile devices.",
    image: "/projects/dashboard app.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Framer Motion",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/hamedhmd88/Dashboard-app",
    liveUrl: "https://dashboard-app-hazel-zeta.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A modern website application built using Next.js, React, and Tailwind CSS. Making modern animations with Framer Motion and Multilingual",
    image: "/projects/fenefx.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://fenefx.com/fa/",
    liveUrl: "https://fenefx.com/fa/",
    featured: true,
  },
  {
    id: "3",
    title: " E-Commerce Platform",
    description:
      " An e-commerce platform built using React.js, React Query, Redux Toolkit, and Tailwind CSS. It features a modern, responsive design with smooth animations and a user-friendly interface. ",
    image: "/projects/shopping cart.png",
    technologies: ["React.js", "React Query", "Redux Toolkit", "Tailwind CSS"],
    githubUrl: "https://github.com/hamedhmd88/Shoping-Cart-Advance",
    liveUrl: "https://shoping-cart-advance-ruddy.vercel.app/",
  },
  {
    id: "4",
    title: "Landing Ts WebSite",
    description:
      " This project is a modern single-page landing website built with React, TypeScript, and Tailwind CSS. It features smooth animations, clean design, and navigation powered by React Router. ",
    image: "/projects/landing website.png",
    technologies: ["React.js", "TypeScript", "React Router", "Tailwind CSS"],
    githubUrl: "https://github.com/hamedhmd88/react-landing-ts",
    liveUrl: "https://react-landing-ts-mxne.vercel.app/",
  },
  {
    id: "5",
    title: "Carland Landing Page",
    description:
      "Carland is a modern and responsive landing page built with Next.js 14, Tailwind CSS, and Framer Motion. The page features a sleek dark theme and is optimized for a seamless user experience across all devices.",
    image: "/projects/carland website.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "React.js"],
    githubUrl: "https://github.com/hamedhmd88/Carland-website",
    liveUrl: "https://carland-website.vercel.app/",
  },
  {
    id: "6",
    title: "Blog WebSite",
    description:
      "Developed a dynamic and responsive Blog Website using React.js, featuring an intuitive interface for reading and managing blog posts. The project leverages React Router for seamless navigation between different sections of the site, providing a smooth user experience.",
    image: "/projects/blog website.png",
    technologies: [
      "React.js",
      "React Router",
      "Tailwind CSS",
  
    ],
    githubUrl: "https://github.com/hamedhmd88/React-Blog-Website",
    liveUrl: "https://react-blog-website-wiuz.vercel.app/",
  },
];
