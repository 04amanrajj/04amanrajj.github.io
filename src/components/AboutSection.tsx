import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Globe, Database } from 'lucide-react';

const AboutCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
}> = ({ icon, title, value }) => {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-primary/10 p-3 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About  <span className=" text-primary "> Me</span>
          </h2>
          <p className="text-xl text-gray-600 mx-auto">
            Innovative Software Engineer with expertise in building scalable applications
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animated-section">
          <div className="space-y-6">
            <p className="text-gray-700">
              I'm a Fullstack Software Engineer proficient in JavaScript, React, Node.js, Express, Angular, MongoDB, and PostgreSQL,
              adept at building scalable software solutions, integrating APIs, databases, and creating user experiences.
              Proficient in modern design, microservices, unit testing tools, and with a collaborative and detail-oriented approach.
            </p>
            <p className="text-gray-700">
              Currently pursuing a Bachelor's in Computer Applications (BCA), which is helping me build a strong foundation in computer science,
              programming, and IT applications.
            </p>
            <p className="text-gray-700">
              I've completed Schooling (Science + Maths), providing me with a solid foundation in scientific concepts and mathematics principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AboutCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Projects"
              value="10+"
            />
            <AboutCard
              icon={<Globe className="h-6 w-6 text-primary" />}
              title="Technologies"
              value="15+"
            />
            <AboutCard
              icon={<Database className="h-6 w-6 text-primary" />}
              title="Databases"
              value="3+"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
