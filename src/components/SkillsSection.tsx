import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiNpm } from 'react-icons/di';
import { SiTailwindcss, SiMui, SiBootstrap, SiExpress, SiPostgresql, SiRedis, SiYaml, SiLinux, SiVisualstudiocode, SiGithub, SiPostman, SiNetlify, SiVercel, SiRender, SiRailway, SiCanva, SiDocker } from 'react-icons/si';

interface SkillCategory {
  title: string;
  skills: { name: string; icon: React.ReactNode; homepage: string }[];
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <DiHtml5 className="w-8 h-8 text-[#E34F26]" />, homepage: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS3", icon: <DiCss3 className="w-8 h-8 text-[#1572B6]" />, homepage: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", icon: <DiJavascript1 className="w-8 h-8 text-[#F7DF1E]" />, homepage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", icon: <DiReact className="w-8 h-8 text-[#61DAFB]" />, homepage: "https://reactjs.org/" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />, homepage: "https://tailwindcss.com/" },
        { name: "Material UI", icon: <SiMui className="w-7 h-7 text-[#0081CB]" />, homepage: "https://mui.com/" },
        { name: "Bootstrap", icon: <SiBootstrap className="w-7 h-7 text-[#7952B3]" />, homepage: "https://getbootstrap.com/" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Express.js", icon: <SiExpress className="w-7 h-7" />, homepage: "https://expressjs.com/" },
        { name: "Node.js", icon: <DiNodejs className="w-8 h-8 text-[#339933]" />, homepage: "https://nodejs.org/" },
        { name: "MongoDB", icon: <DiMongodb className="w-8 h-8 text-[#47A248]" />, homepage: "https://www.mongodb.com/" },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-7 h-7 text-[#336791]" />, homepage: "https://www.postgresql.org/" },
        { name: "Redis", icon: <SiRedis className="w-7 h-7 text-[#DC382D]" />, homepage: "https://redis.io/" },
        { name: "YAML", icon: <SiYaml className="w-7 h-7" />, homepage: "https://yaml.org/" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Linux", icon: <SiLinux className="w-7 h-7" />, homepage: "https://www.linux.org/" },
        { name: "VS Code", icon: <SiVisualstudiocode className="w-7 h-7 text-[#007ACC]" />, homepage: "https://code.visualstudio.com/" },
        { name: "Git", icon: <DiGit className="w-8 h-8 text-[#F05032]" />, homepage: "https://git-scm.com/" },
        { name: "GitHub", icon: <SiGithub className="w-7 h-7" />, homepage: "https://github.com/" },
        { name: "Postman", icon: <SiPostman className="w-7 h-7 text-[#FF6C37]" />, homepage: "https://www.postman.com/" },
        { name: "npm", icon: <DiNpm className="w-8 h-8 text-[#CB3837]" />, homepage: "https://www.npmjs.com/" },
        { name: "Netlify", icon: <SiNetlify className="w-7 h-7 text-[#00C7B7]" />, homepage: "https://www.netlify.com/" },
        { name: "Vercel", icon: <SiVercel className="w-7 h-7" />, homepage: "https://vercel.com/" },
        { name: "Render", icon: <SiRender className="w-7 h-7" />, homepage: "https://render.com/" },
        { name: "NeonDB", icon: <img src="https://logo.clearbit.com/neon.tech" alt="NeonDB Logo" className="w-8 h-8" />, homepage: "https://neon.tech/" },
        { name: "Railway", icon: <SiRailway className="w-7 h-7" />, homepage: "https://railway.app/" },
        { name: "Canva", icon: <SiCanva className="w-7 h-7 text-[#00C4CC]" />, homepage: "https://www.canva.com/" },
        { name: "Docker", icon: <SiDocker className="w-7 h-7 text-[#2496ED]" />, homepage: "https://www.docker.com/" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className=" text-primary ">Technical</span> Skills
          </h2>
          <p className="text-xl text-gray-600 mx-auto">
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
                    <a
                      href={skill.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <div className="mb-2 flex items-center justify-center h-12">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </a>
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
