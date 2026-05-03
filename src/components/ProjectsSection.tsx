import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Monitor, Smartphone, ShoppingBag, BookOpen, GalleryVerticalEnd } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  images: string[];
  demoLink?: string;
  githubLink?: string;
  technologies: string[];
  icon?: React.ReactNode;
  accent: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, images, demoLink, githubLink, technologies, icon, accent }) => {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <div className="scroll-snap-item flex-shrink-0 w-[85vw] max-w-sm md:max-w-none md:w-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-700 group">
          <img src={images[imgIdx]} alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
          {/* Image nav */}
          {images.length > 1 && (
            <>
              <button onClick={() => setImgIdx(i => (i - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm active:scale-90 transition-transform">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setImgIdx(i => (i + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm active:scale-90 transition-transform">
                <ChevronRight className="h-4 w-4" />
              </button>
              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setImgIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIdx ? 'bg-white w-3' : 'bg-white/50'}`} />
                ))}
              </div>
            </>
          )}
          {/* Accent strip */}
          <div className={`absolute top-0 left-0 right-0 h-0.5 ${accent}`} />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 gap-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white leading-tight">{title}</h3>
            {icon && <div className="flex-shrink-0 p-1.5 rounded-lg bg-gray-100 dark:bg-gray-700">{icon}</div>}
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{description}</p>

          {/* Tech tags — horizontal scroll */}
          <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5">
            {technologies.map((t, i) => (
              <span key={i} className="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 mt-auto pt-1">
            {demoLink && (
              <Button variant="outline" size="sm" asChild className="flex-1 h-8 text-xs rounded-xl">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" /> Live Demo
                </a>
              </Button>
            )}
            {githubLink && (
              <Button size="sm" asChild className="flex-1 h-8 text-xs rounded-xl bg-[#24292f] hover:bg-[#2ea44f] text-white border-none">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" /> Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Docker Learnings", accent: "bg-blue-500",
      description: "A comprehensive DevOps & Docker learning portfolio showcasing a 4-week journey of containerization technologies.",
      images: ["https://i.ibb.co/hFbPZ5K5/Screenshot-from-2026-05-27-17-09-05.png","https://i.ibb.co/tP3Wjh8D/Screenshot-from-2026-05-27-17-09-26.png","https://i.ibb.co/CpzKTHwD/Screenshot-from-2026-05-27-17-09-52.png"],
      demoLink: "https://04amanrajj.github.io/Docker-learning/", githubLink: "https://github.com/04amanrajj/Docker-learning",
      technologies: ["Docker", "Docker Compose", "Nginx", "Prometheus", "Grafana", "DevOps"],
      icon: <BookOpen className="h-4 w-4 text-gray-700 dark:text-gray-300" />,
    },
    {
      title: "Journal Native", accent: "bg-purple-500",
      description: "Responsive mobile journal app with real-time entry management, secure auth, and offline support.",
      images: ["https://i.ibb.co/7dqDXx1R/2922b80f-a0a5-4617-9628-0c670536ede7.png","https://i.ibb.co/nsFNTqxQ/Screenshot-20250504-173003-landscape.png","https://i.ibb.co/60srMrhC/Screenshot-20250504-172948-landscape.png"],
      demoLink: "https://github.com/04amanrajj/journal-native/releases/", githubLink: "https://github.com/04amanrajj/journal-native",
      technologies: ["React Native", "TypeScript", "Expo", "PostgreSQL", "Express.js", "JWT"],
      icon: <Smartphone className="h-4 w-4 text-gray-700 dark:text-gray-300" />,
    },
    {
      title: "Satyanam Food React", accent: "bg-orange-500",
      description: "Full-stack food ordering platform with dynamic menu filtering, cart management, and responsive UI.",
      images: ["https://i.imgur.com/1mIGG01.png","https://i.imgur.com/WvCglqD.png","https://i.imgur.com/mfoIjE3.png"],
      demoLink: "https://satyanam-food.vercel.app/", githubLink: "https://github.com/04amanrajj/satyanam-food-react",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Material UI"],
      icon: <Monitor className="h-4 w-4 text-gray-700 dark:text-gray-300" />,
    },
    {
      title: "Satyanam Food", accent: "bg-green-500",
      description: "Initial food ordering app focused on backend functionality and simple responsive frontend.",
      images: ["https://i.imgur.com/oYdZa02.png","https://i.imgur.com/S1lFZH4.png","https://i.imgur.com/eqPUl6g.png"],
      demoLink: "https://satyanam.netlify.app/", githubLink: "https://github.com/04amanrajj/Satyanaam-Food",
      technologies: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
      icon: <Monitor className="h-4 w-4 text-gray-700 dark:text-gray-300" />,
    },
    {
      title: "Apple Website Clone", accent: "bg-gray-500",
      description: "Pixel-perfect, responsive Apple website clone with dynamic content loading and smooth animations.",
      images: ["https://i.imgur.com/st0uQDZ.png","https://i.imgur.com/lfjXz9f.png","https://i.imgur.com/NojPqIy.png"],
      demoLink: "https://aqqle.netlify.app/", githubLink: "https://github.com/04amanrajj/apple-clone",
      technologies: ["JavaScript", "JSON Server", "HTML", "CSS"],
      icon: <ShoppingBag className="h-4 w-4 text-gray-700 dark:text-gray-300" />,
    },
    {
      title: "Myntra Clone", accent: "bg-pink-500",
      description: "Responsive Myntra e-commerce clone with product filtering, auth, shopping cart, and order processing.",
      images: ["https://i.imgur.com/fixPieI.png","https://i.imgur.com/nHG6esL.jpeg","https://i.imgur.com/fc6cb5t.jpeg"],
      demoLink: "https://meentra.netlify.app/", githubLink: "https://github.com/04amanrajj/myntra-clone",
      technologies: ["JavaScript", "HTML", "CSS", "JSON Server"],
      icon: <ShoppingBag className="h-4 w-4 text-gray-700 dark:text-gray-300" />,
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 bg-primary rounded-full" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
            <GalleryVerticalEnd className="w-3 h-3" /> {projects.length} projects
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Projects</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Swipe to explore →</p>

        {/* Mobile: two horizontal swipe rows */}
        <div className="md:hidden space-y-3">
          {/* Row 1: projects in order → */}
          <div className="flex gap-3 overflow-x-auto scroll-snap-x hide-scrollbar pb-1 -mx-4 px-4">
            {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>
          {/* Row 2: projects in reverse ← */}
          <div className="flex gap-3 overflow-x-auto scroll-snap-x hide-scrollbar pb-1 -mx-4 px-4">
            {[...projects].reverse().map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;