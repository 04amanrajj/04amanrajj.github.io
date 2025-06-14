import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Briefcase } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  organization,
  period,
  description,
  skills,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full p-2 bg-primary text-white">
          {icon}
        </div>
        <div className="w-[2px] h-full bg-gray-200"></div>
      </div>
      <Card className="mb-8 flex-1">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
            <span>{organization}</span>
            <span>{period}</span>
          </div>
          <p className="text-gray-700 mb-4">{description}</p>
          {skills && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience   <span className=" text-primary "> &</span> Education
          </h2>
          <p className="text-xl text-gray-600 mx-auto">
            Education and experience that have shaped my skills as a developer
          </p>
        </div>
        <div className="max-w-3xl mx-auto animated-section">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Education
            </h3>
            <div>
              <TimelineItem
                icon={<BookOpen className="h-4 w-4" />}
                title="Bachelor's in Computer Applications (BCA)"
                organization="Mohanlal Sukhadia University"
                period="Aug 2023 - Present"
                description="Currently pursuing a Bachelor's in Computer Applications (BCA), which is helping me build a strong foundation in computer science, programming, and IT applications."
                skills={["Data Structures", "Java", "C/C++"]}
              />
              <TimelineItem
                icon={<BookOpen className="h-4 w-4" />}
                title="Senior Secondary School"
                organization="Govardhan Senior Secondary School"
                period="2020 - 2023"
                description="I've completed Schooling (Science + Maths), providing me with a solid foundation in scientific concepts and mathematics principles."
                skills={["Mathematics", "Physics", "Computer Science"]}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Projects
            </h3>
            <div>
              <TimelineItem
                icon={<Briefcase className="h-4 w-4" />}
                title="Journal Native"
                organization="Hobby Project"
                period="Apr 2025 - May 2025"
                description="A responsive mobile journal application built with React Native to showcase full-stack mobile development skills, featuring secure authentication and offline support."
                skills={["React Native", "TypeScript", "Expo", "PostgreSQL", "Express.js", "JWT Authentication", "Gluestack-UI", "Tailwind CSS", "AsyncStorage", "REST API"]}
              />
            </div>
            <div>
              <TimelineItem
                icon={<Briefcase className="h-4 w-4" />}
                title="Satyanam Food React"
                organization="Personal Project"
                period="Mar 2025 - Apr 2025"
                description="A modern food ordering web application built with React and Express.js, featuring dynamic menus, user authentication, and a responsive UI."
                skills={["React", "Node.js", "Express.js", "MongoDB", "Rest API", "Material UI", "Tailwind CSS"]}
              />
            </div>
            <div>
              <TimelineItem
                icon={<Briefcase className="h-4 w-4" />}
                title="Satyanam Food"
                organization="Personal Project"
                period="Nov 2024 - Dec 2024"
                description="An initial food ordering web platform built with Node.js and MongoDB, focusing on core backend functionality and a simple, responsive frontend."
                skills={["Node.js", "Express.js", "MongoDB", "Rest API", "Bootstrap"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
