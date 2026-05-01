import React, { useState } from 'react';
import { BookOpen, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon, title, organization, period, description, skills, isLast
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-3">
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 z-10">
          {icon}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-gray-200 dark:bg-gray-700 mt-1" />}
      </div>

      {/* Card */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-4 overflow-hidden">
        <button
          className="w-full text-left p-4 flex items-start justify-between gap-2"
          onClick={() => setOpen(o => !o)}
        >
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-gray-900 dark:text-white leading-tight">{title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{organization}</p>
            <p className="text-xs text-primary/80 font-medium mt-1">{period}</p>
          </div>
          <div className="flex-shrink-0 mt-0.5 text-gray-400">
            {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </button>

        {open && (
          <div className="px-4 pb-4 space-y-3 border-t border-gray-100 dark:border-gray-700 pt-3">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
            {skills && (
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s, i) => (
                  <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const ExperienceSection: React.FC = () => {
  const education = [
    {
      icon: <BookOpen className="h-3.5 w-3.5" />, title: "Bachelor's in Computer Applications (BCA)",
      organization: "Mohanlal Sukhadia University", period: "Aug 2023 – Present",
      description: "Building a strong foundation in computer science, programming, and IT applications.",
      skills: ["Data Structures", "Java", "C/C++"],
    },
    {
      icon: <BookOpen className="h-3.5 w-3.5" />, title: "Senior Secondary School",
      organization: "Govardhan Senior Secondary School", period: "2021 – 2023",
      description: "Science + Maths stream — solid foundation in scientific concepts and mathematics.",
      skills: ["Mathematics", "Physics", "Computer Science"],
    },
  ];

  const projects = [
    {
      icon: <Briefcase className="h-3.5 w-3.5" />, title: "Journal Native",
      organization: "Hobby Project", period: "Apr 2025 – May 2025",
      description: "Responsive mobile journal app with React Native, secure authentication, and offline support.",
      skills: ["React Native", "TypeScript", "Expo", "PostgreSQL", "Express.js", "JWT", "AsyncStorage"],
    },
    {
      icon: <Briefcase className="h-3.5 w-3.5" />, title: "Satyanam Food React",
      organization: "Personal Project", period: "Mar 2025 – Apr 2025",
      description: "Modern food ordering platform with React, dynamic menus, and user authentication.",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Material UI", "Tailwind CSS"],
    },
    {
      icon: <Briefcase className="h-3.5 w-3.5" />, title: "Satyanam Food",
      organization: "Personal Project", period: "Nov 2024 – Dec 2024",
      description: "Initial food ordering platform focused on backend functionality and responsive frontend.",
      skills: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex items-center gap-2 mb-8 md:justify-center">
          <span className="w-6 h-0.5 bg-primary rounded-full" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Timeline</p>
        </div>

        {/* Education */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="text-base font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          {education.map((item, i) => (
            <TimelineItem key={i} {...item} isLast={i === education.length - 1} />
          ))}
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <h2 className="text-base font-bold text-gray-900 dark:text-white">Projects</h2>
          </div>
          {projects.map((item, i) => (
            <TimelineItem key={i} {...item} isLast={i === projects.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
