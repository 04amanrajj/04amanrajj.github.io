
import { Award, ExternalLink, Calendar, BookOpen, Github, CodeXml, Linkedin } from 'lucide-react';
import { FaDocker } from "react-icons/fa";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      id: 1, title: "Full‑Stack Web Developer", issuer: "LinkedIn Learning",
      description: "Comprehensive full‑stack path covering front‑end (HTML, CSS, JS, React), back‑end (Node.js, REST APIs), version control, and DevOps.",
      duration: "32 hrs",
      skills: ["Web Development", "Full‑Stack", "React", "Node.js", "REST APIs", "Git", "DevOps"],
      link: "https://lnkd.in/dk6BZGYG",
      gradient: "from-gray-700 to-gray-900",
      icon: CodeXml, iconColor: "text-white",
    },
    {
      id: 2, title: "GitHub Foundations Professional", issuer: "LinkedIn Learning & GitHub",
      description: "Covers Git, repositories, branching, collaboration, Issues & Projects, Actions, Copilot, Codespaces & security.",
      duration: "10 hrs",
      skills: ["Git & GitHub", "Version Control", "Actions", "Copilot", "Codespaces", "Security"],
      link: "https://www.linkedin.com/learning/certificates/ec2324764e42eda20a61e1c028c0d2c72c87af47c96967043c3d821cd502f8ef",
      gradient: "from-gray-700 to-gray-900",
      icon: Github, iconColor: "text-white",
    },
    {
      id: 3, title: "Docker Foundations Professional", issuer: "Docker, Inc. & LinkedIn Learning",
      description: "Container fundamentals, Dockerfile creation, image building, networking, Docker Compose, and real‑world deployment.",
      duration: "4 hrs",
      skills: ["Docker", "Image Building", "Container Ops", "Docker Compose", "Networking"],
      link: "https://lnkd.in/d2fuz8mc",
      gradient: "from-blue-500 to-blue-700",
      icon: FaDocker, iconColor: "text-white",
    },
    {
      id: 4, title: "NPTEL Certification", issuer: "NPTEL / IIT Madras",
      description: "Soft‑skills program: communication, mock interviews, employability assessments, and English proficiency.",
      duration: "10 hrs",
      skills: ["Communication", "Soft Skills", "Self-Learning", "Employability"],
      link: "https://drive.google.com/file/d/1_sSVBZiy65ARIA8SFbVvH71NNCNm8VsM/view?usp=sharing",
      gradient: "from-blue-500 to-blue-700",
      icon: BookOpen, iconColor: "text-white",
    },
  ];

  return (
    <section id="certificate" className="py-16 md:py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-6 h-0.5 bg-primary rounded-full" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Achievements</p>
        </div>
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h2>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 flex-shrink-0 ml-3 mt-1">
            <Award className="w-3 h-3" /> {certificates.length} certs
          </span>
        </div>

        {/* Mobile: vertical stack of compact cards */}
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {certificates.map(cert => (
            <div key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">

              {/* Coloured top bar + icon */}
              <div className={`bg-gradient-to-r ${cert.gradient} px-4 py-3 flex items-center gap-3`}>
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <cert.icon className={`w-4 h-4 ${cert.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white leading-tight line-clamp-1">{cert.title}</p>
                  <p className="text-[10px] text-white/70">{cert.issuer}</p>
                </div>
                <span className="flex-shrink-0 flex items-center gap-1 text-[10px] text-white/80 bg-white/20 px-2 py-0.5 rounded-full">
                  <Calendar className="w-2.5 h-2.5" /> {cert.duration}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{cert.description}</p>

                {/* Skill tags */}
                <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5">
                  {cert.skills.map(s => (
                    <span key={s} className="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium whitespace-nowrap">
                      {s}
                    </span>
                  ))}
                </div>

                <Button asChild size="sm" className="mt-auto h-8 text-xs rounded-xl w-full">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" /> View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
