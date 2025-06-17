
import { Award, ExternalLink, Calendar, BookOpen, Github, CodeXml, Linkedin } from 'lucide-react';
import { FaDocker } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Full‑Stack Web Developer",
      issuer: "LinkedIn Learning",
      description: "Comprehensive full‑stack path covering front‑end (HTML, CSS, JavaScript, React), back‑end (Node.js, databases, REST APIs), version control, collaboration, DevOps practices, and career‑ready projects.",
      duration: "32 Hours",
      skills: [
        "Web Development",
        "Full‑Stack Development",
        "Front‑End (HTML, CSS, JS, React)",
        "Back‑End (Node.js, REST APIs)",
        "Databases (SQL, NoSQL)",
        "Version Control (Git)",
        "DevOps",
        "Collaboration"
      ],
      status: "Completed",
      link: "https://lnkd.in/dk6BZGYG",
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
      icon: CodeXml
    },
    {
      id: 2,
      title: "GitHub Foundations Professional",
      issuer: "LinkedIn Learning & GitHub",
      description: "GitHub Foundations Certification: covers Git, repositories, branching, collaboration, issues & projects, Actions, Copilot, Codespaces & security.",
      duration: "10 Hours",
      skills: [
        "Git & GitHub Fundamentals",
        "Version Control",
        "Collaboration Workflows",
        "Issues & Projects",
        "GitHub Actions",
        "GitHub Copilot",
        "Codespaces",
        "Security & Admin"
      ],
      status: "Completed",
      link: "https://www.linkedin.com/learning/certificates/ec2324764e42eda20a61e1c028c0d2c72c87af47c96967043c3d821cd502f8ef",
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
      icon: Github
    },
    {
      id: 3,
      title: "Docker Foundations Professional",
      issuer: "Docker, Inc. & LinkedIn Learning",
      description: "Comprehensive Docker Foundations: covers container fundamentals and CLI, Dockerfile creation, image building, managing lifecycle and networking, multi‑container orchestration with Docker Compose, and real‑world deployment workflows.",
      duration: "4 Hours",
      skills: [
        "Docker Containerization",
        "Image Building & Management",
        "Container Operations",
        "Docker Compose",
        "Container Networking",
        "Docker Deployment"
      ],
      link: "https://lnkd.in/d2fuz8mc",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: FaDocker
    },
    {
      id: 4,
      title: "NPTEL Certification",
      issuer: "NPTEL",
      description: "Online soft‑skills program coordinated by IIT Madras via NPTEL: included interactive sessions on communication, mock interviews, employability assessments, and English proficiency testing designed to build confidence, professionalism, and interview-readiness.",
      duration: "10 Hours",
      skills: ["Academic Excellence", "Communication", "Soft Skills", "Self-Learning", "Technical Knowledge"],
      status: "Completed",
      link:"https://drive.google.com/file/d/1_sSVBZiy65ARIA8SFbVvH71NNCNm8VsM/view?usp=sharing",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: BookOpen
    }
  ];

  return (
    <section id='certificate' className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animated-section">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Certifications & Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className=" text-primary "> Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development through recognized certification programs
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animated-section">
          {certificates.map((cert, index) => (
            <Card
              key={cert.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white overflow-hidden"
            >
              <CardHeader className="relative mb-5">
                <div className={`absolute inset-0 ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${cert.color} text-white shadow-lg`}>
                      <cert.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-gray-600 mt-1">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 whitespace-nowrap text-green-800 font-medium w-[max-content]">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.duration}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  {cert.link ? (
                    <Button
                      asChild
                      className="w-full text-primary hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                      disabled
                    >
                      <BookOpen className="w-4 h-4" />
                      Certificate Pending Upload
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
