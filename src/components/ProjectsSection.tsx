import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Monitor, ShoppingBag, Smartphone ,GalleryVerticalEnd } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[]; // Updated to support multiple images
  demoLink?: string;
  githubLink?: string;
  technologies: string[];
  icon?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  demoLink,
  githubLink,
  technologies,
  icon,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Card className="overflow-hidden border-none shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden group">
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
        {icon && (
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full">
            {icon}
          </div>
        )}
        {/* Navigation Buttons */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handlePrevImage}
              className="bg-white text-black p-2.5 rounded-full ml-2"
            >
              &#8592;
            </button>
            <button
              onClick={handleNextImage}
              className="bg-white text-black p-2.5 rounded-full mr-2"
            >
              &#8594;
            </button>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex gap-2 flex-wrap">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              {tech}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        {demoLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {githubLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Journal Native",
      description: "Developed a responsive mobile journal application with React Native, featuring real-time entry management, secure user authentication, offline support, and a user-friendly dashboard.",
      images: [
        "https://i.ibb.co/7dqDXx1R/2922b80f-a0a5-4617-9628-0c670536ede7.png",
        "https://i.ibb.co/nsFNTqxQ/Screenshot-20250504-173003-landscape.png",
        // "https://i.ibb.co/8D7FKdWB/Screenshot-20250504-173003-portrait.png",
        "https://i.ibb.co/60srMrhC/Screenshot-20250504-172948-landscape.png",
        // "https://i.ibb.co/rK5BNZyB/Screenshot-20250504-172948-portrait.png",
        "https://i.ibb.co/PZx7Wdzq/Screenshot-20250504-172943-landscape.png",
        // "https://i.ibb.co/LXpHpHfw/Screenshot-20250504-172943-portrait.png",
        "https://i.ibb.co/hFf0rqWn/Screenshot-20250504-172938-landscape.png",
        // "https://i.ibb.co/xqZSttBV/Screenshot-20250504-172938-portrait.png",
        "https://i.ibb.co/7NyTwC07/Screenshot-20250504-172931-landscape.png",
        // "https://i.ibb.co/Fq821Q62/Screenshot-20250504-172931-portrait.png",

      ],
      demoLink: "https://github.com/04amanrajj/journal-native/releases/",
      githubLink: "https://github.com/04amanrajj/journal-native",
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "PostgreSQL",
        "Express.js",
        "JWT Authentication",
        "Gluestack-UI",
        "Tailwind CSS",
        "AsyncStorage",
        "REST API"
      ],
      icon: <Smartphone className="h-5 w-5 text-gray-800" />
    },
    {
      title: "Satyanam Food React",
      description: "Built a modern full-stack food ordering platform with React, featuring dynamic menu filtering, secure user authentication, cart management, and a responsive UI optimized for all devices.",
      images: [
        "https://i.imgur.com/1mIGG01.png",
        "https://i.imgur.com/WvCglqD.png",
        "https://i.imgur.com/WvCglqD.png",
        "https://i.imgur.com/mfoIjE3.png",
        "https://i.imgur.com/tBzOfO1.png"
      ],
      demoLink: "https://satyanam-food.vercel.app/",
      githubLink: "https://github.com/04amanrajj/satyanam-food-react",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Rest API", "material UI", "tailwind CSS"],
      icon: <Monitor className="h-5 w-5 text-gray-800" />
    },
    {
      title: "Satyanam Food",
      description: "Developed an initial full-stack food ordering application focused on robust backend functionality, user authentication, and a simple responsive frontend using Bootstrap.",
      images: [
        "https://i.imgur.com/oYdZa02.png",
        "https://i.imgur.com/S1lFZH4.png",
        "https://i.imgur.com/eqPUl6g.png",
        "https://i.imgur.com/PsBu7hz.png",
        "https://i.imgur.com/FcGcTvA.png",
        "https://i.imgur.com/Qcx7y6l.png"
      ],
      demoLink: "https://satyanam.netlify.app/",
      githubLink: "https://github.com/04amanrajj/Satyanaam-Food",
      technologies: ["Node.js", "Express.js", "MongoDB", "Rest API", "Bootstrap"],
      icon: <Monitor className="h-5 w-5 text-gray-800" />
    },
    {
      title: "Apple Website Clone",
      description: "Created a pixel-perfect, responsive clone of the Apple website using vanilla JavaScript, with dynamic content loading, interactive product showcases, and smooth animations.",
      images: [
        "https://i.imgur.com/st0uQDZ.png",
        "https://i.imgur.com/lfjXz9f.png",
        "https://i.imgur.com/NojPqIy.png",
        "https://i.imgur.com/kt8q1QY.png",
        "https://i.imgur.com/TYXKU7Y.png",
      ],
      demoLink: "https://aqqle.netlify.app/",
      githubLink: "https://github.com/04amanrajj/apple-clone",
      technologies: ["JavaScript", "JSON Server", "HTML", "CSS"],
      icon: <ShoppingBag className="h-5 w-5 text-gray-800" />
    },
    {
      title: "Myntra Clone",
      description: "Developed a responsive Myntra e-commerce clone with product filtering, user authentication, shopping cart, and order processing, built using vanilla JavaScript and a mock JSON server.",
      images: [
        "https://i.imgur.com/fixPieI.png",
        "https://i.imgur.com/nHG6esL.jpeg",
        "https://i.imgur.com/fc6cb5t.jpeg",
        "https://i.imgur.com/FFPNKZ0.jpeg",
        "https://i.imgur.com/y0vvpAZ.jpeg",
        "https://i.imgur.com/6441WGX.jpeg",
      ],
      demoLink: "https://meentra.netlify.app/",
      githubLink: "https://github.com/04amanrajj/myntra-clone",
      technologies: ["JavaScript", "HTML", "CSS", "JSON Server"],
      icon: <ShoppingBag className="h-5 w-5 text-gray-800" />
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8 flex-row gap-4 animated-section">
          <h2 className="text-2xl md:text-5xl font-bold">
            Projects
          </h2>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <GalleryVerticalEnd className="w-4 h-4" />
            Portfolio
          </div>
        </div>
        <p className="text-gray-600  text-xl mb-8 md:mb-12 flex items-center justify-start">
          Some of my recent professional work and personal projects that showcase my skills, creativity, and growth as a developer
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animated-section">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              technologies={project.technologies}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;