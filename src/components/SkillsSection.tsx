import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiNpm } from 'react-icons/di';
import { SiTailwindcss, SiMui, SiBootstrap, SiExpress, SiPostgresql, SiRedis, SiYaml, SiLinux, SiVisualstudiocode, SiGithub, SiPostman, SiNetlify, SiVercel, SiRender, SiRailway, SiCanva, SiDocker, SiCloudflare, SiAmazons3, SiSupabase } from 'react-icons/si';
import { ChevronRight } from 'lucide-react';

interface Skill { name: string; icon: React.ReactNode; homepage: string }
interface SkillCategory { title: string; emoji: string; skills: Skill[] }

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend", emoji: "🎨",
    skills: [
      { name: "HTML5",       icon: <DiHtml5 className="w-7 h-7 text-[#E34F26]" />,    homepage: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3",        icon: <DiCss3 className="w-7 h-7 text-[#1572B6]" />,     homepage: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript",  icon: <DiJavascript1 className="w-7 h-7 text-[#F7DF1E]" />, homepage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "React",       icon: <DiReact className="w-7 h-7 text-[#61DAFB]" />,    homepage: "https://reactjs.org/" },
      { name: "Tailwind",    icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />, homepage: "https://tailwindcss.com/" },
      { name: "MUI",         icon: <SiMui className="w-6 h-6 text-[#0081CB]" />,      homepage: "https://mui.com/" },
      { name: "Bootstrap",   icon: <SiBootstrap className="w-6 h-6 text-[#7952B3]" />, homepage: "https://getbootstrap.com/" },
    ]
  },
  {
    title: "Backend", emoji: "⚙️",
    skills: [
      { name: "Express.js",  icon: <SiExpress className="w-6 h-6" />,                  homepage: "https://expressjs.com/" },
      { name: "Node.js",     icon: <DiNodejs className="w-7 h-7 text-[#339933]" />,    homepage: "https://nodejs.org/" },
      { name: "MongoDB",     icon: <DiMongodb className="w-7 h-7 text-[#47A248]" />,   homepage: "https://www.mongodb.com/" },
      { name: "PostgreSQL",  icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />, homepage: "https://www.postgresql.org/" },
      { name: "Redis",       icon: <SiRedis className="w-6 h-6 text-[#DC382D]" />,     homepage: "https://redis.io/" },
      { name: "AWS S3",      icon: <SiAmazons3 className="w-6 h-6 text-[#569A31]" />,  homepage: "https://aws.amazon.com/s3/" },
      { name: "R2",          icon: <SiCloudflare className="w-6 h-6 text-[#F38020]" />, homepage: "https://developers.cloudflare.com/r2/" },
      { name: "YAML",        icon: <SiYaml className="w-6 h-6" />,                     homepage: "https://yaml.org/" },
    ]
  },
  {
    title: "Tools", emoji: "🛠️",
    skills: [
      { name: "Linux",     icon: <SiLinux className="w-6 h-6" />,                      homepage: "https://www.linux.org/" },
      { name: "VS Code",   icon: <SiVisualstudiocode className="w-6 h-6 text-[#007ACC]" />, homepage: "https://code.visualstudio.com/" },
      { name: "Git",       icon: <DiGit className="w-7 h-7 text-[#F05032]" />,         homepage: "https://git-scm.com/" },
      { name: "GitHub",    icon: <SiGithub className="w-6 h-6" />,                     homepage: "https://github.com/" },
      { name: "Postman",   icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,     homepage: "https://www.postman.com/" },
      { name: "npm",       icon: <DiNpm className="w-7 h-7 text-[#CB3837]" />,         homepage: "https://www.npmjs.com/" },
      { name: "Docker",    icon: <SiDocker className="w-6 h-6 text-[#2496ED]" />,      homepage: "https://www.docker.com/" },
      { name: "Netlify",   icon: <SiNetlify className="w-6 h-6 text-[#00C7B7]" />,     homepage: "https://www.netlify.com/" },
      { name: "Vercel",    icon: <SiVercel className="w-6 h-6" />,                     homepage: "https://vercel.com/" },
      { name: "Render",    icon: <SiRender className="w-6 h-6" />,                     homepage: "https://render.com/" },
      { name: "Railway",   icon: <SiRailway className="w-6 h-6" />,                    homepage: "https://railway.app/" },
      { name: "NeonDB",    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#00E599"/><path d="M7 8h10v2H7V8zm0 3h7v2H7v-2zm0 3h10v2H7v-2z" fill="#0A0A0A"/></svg>, homepage: "https://neon.tech/" },
      { name: "Supabase",  icon: <SiSupabase className="w-6 h-6 text-[#3ECF8E]" />,    homepage: "https://supabase.com/" },
      { name: "Canva",     icon: <SiCanva className="w-6 h-6 text-[#00C4CC]" />,       homepage: "https://www.canva.com/" },
    ]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex items-center gap-2 mb-6 md:mb-12 md:justify-center">
          <span className="w-6 h-0.5 bg-primary rounded-full" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Tech Stack</p>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:text-center">
          <span className="text-primary">Technical</span> Skills
        </h2>

        <div className="space-y-6">
          {skillCategories.map((cat, ci) => (
            <div key={ci}>
              {/* Category header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">{cat.emoji}</span>
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">{cat.title}</h3>
                <span className="text-xs text-gray-400">({cat.skills.length})</span>
                <ChevronRight className="h-3.5 w-3.5 text-gray-300 dark:text-gray-600 ml-auto" />
              </div>

              {/* 4-column grid on mobile, more on larger screens */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2.5">
                {cat.skills.map((skill, si) => (
                  <a
                    key={si}
                    href={skill.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 p-2.5 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 active:scale-95 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-center h-8 w-8">{skill.icon}</div>
                    <span className="text-[9px] font-medium text-gray-600 dark:text-gray-400 text-center leading-tight">
                      {skill.name}
                    </span>
                  </a>
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
