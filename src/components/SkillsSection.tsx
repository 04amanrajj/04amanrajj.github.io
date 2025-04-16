import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiNpm } from 'react-icons/di';
import { SiTailwindcss, SiMui, SiBootstrap, SiExpress, SiPostgresql, SiRedis, SiYaml, SiLinux, SiVisualstudiocode, SiGithub, SiPostman, SiNetlify, SiVercel, SiRender, SiRailway, SiCanva, SiDocker } from 'react-icons/si';

interface SkillCategory {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <DiHtml5 className="w-8 h-8 text-[#E34F26]" /> },
        { name: "CSS3", icon: <DiCss3 className="w-8 h-8 text-[#1572B6]" /> },
        { name: "JavaScript", icon: <DiJavascript1 className="w-8 h-8 text-[#F7DF1E]" /> },
        { name: "React", icon: <DiReact className="w-8 h-8 text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" /> },
        { name: "Material UI", icon: <SiMui className="w-7 h-7 text-[#0081CB]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-7 h-7 text-[#7952B3]" /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Express.js", icon: <SiExpress className="w-7 h-7" /> },
        { name: "Node.js", icon: <DiNodejs className="w-8 h-8 text-[#339933]" /> },
        { name: "MongoDB", icon: <DiMongodb className="w-8 h-8 text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-7 h-7 text-[#336791]" /> },
        { name: "Redis", icon: <SiRedis className="w-7 h-7 text-[#DC382D]" /> },
        { name: "YAML", icon: <SiYaml className="w-7 h-7" /> },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Linux", icon: <SiLinux className="w-7 h-7" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="w-7 h-7 text-[#007ACC]" /> },
        { name: "Git", icon: <DiGit className="w-8 h-8 text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="w-7 h-7" /> },
        { name: "Postman", icon: <SiPostman className="w-7 h-7 text-[#FF6C37]" /> },
        { name: "npm", icon: <DiNpm className="w-8 h-8 text-[#CB3837]" /> },
        { name: "Netlify", icon: <SiNetlify className="w-7 h-7 text-[#00C7B7]" /> },
        { name: "Vercel", icon: <SiVercel className="w-7 h-7" /> },
        { name: "Render", icon: <SiRender className="w-7 h-7" /> },
        { name: "Railway", icon: <SiRailway className="w-7 h-7" /> },
        { name: "Canva", icon: <SiCanva className="w-7 h-7 text-[#00C4CC]" /> },
        { name: "Docker", icon: <SiDocker className="w-7 h-7 text-[#2496ED]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="space-y-12 animated-section">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="mr-2">{category.title}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="tech-icon flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md duration-300 border border-gray-100"
                  >
                    <div className="mb-2 flex items-center justify-center h-12">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
