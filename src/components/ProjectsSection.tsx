import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Monitor, ShoppingBag, Apple } from 'lucide-react';

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
      title: "Satyanam Food",
      description: "Developed a full-stack food ordering application with features like user authentication, menu browsing with filters, cart functionality, and secure order processing. Implemented responsive design for all devices.",
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
      technologies: ["Node.js", "Express.js", "MongoDB", "React"],
      icon: <Monitor className="h-5 w-5 text-gray-800" />
    },
    {
      title: "Apple Website Clone",
      description: "Developed a responsive Apple website clone using vanilla Javascript, featuring pixel-perfect design, dynamic content loading, mobile responsiveness, and interactive product showcases with animations.",
      images: [
        "https://i.imgur.com/st0uQDZ.png",
        "https://i.imgur.com/lfjXz9f.png",
        "https://i.imgur.com/NojPqIy.png",
        "https://i.imgur.com/kt8q1QY.png",
        "https://i.imgur.com/TYXKU7Y.png",
      ],
      demoLink: "https://aqqle.netlify.app/",
      githubLink: "https://github.com/04amanrajj/apple-clone",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
      icon: <ShoppingBag className="h-5 w-5 text-gray-800" />
    },
    {
      title: "Myntra Clone",
      description: "Built a Myntra e-commerce platform clone with comprehensive features including product catalog with filters, user authentication, shopping cart, responsive UI, and order processing functionality.",
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
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      icon: <ShoppingBag className="h-5 w-5 text-gray-800" />
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

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