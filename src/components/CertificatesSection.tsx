
import { Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "GitHub Certification",
      issuer: "LinkedIn Learning",
      description: "Version control, collaboration workflows, project table, and modern development practices",
      date: "2024",
      skills: ["Version Control", "Git", "Collaboration", "DevOps"],
      status: "Completed",
      link: "https://lnkd.in/dWX7aBRK",
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
      icon: Award
    },
    {
      id: 2,
      title: "NPTEL Certification",
      issuer: "NPTEL",
      description: "Successfully completed 10 hours of online Soft Skills Training on interview readiness provided by NPTEL",
      date: "2024",
      skills: ["Academic Excellence","Soft Skills", "Self-Learning", "Technical Knowledge"],
      status: "Completed",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: BookOpen
    }
  ];

  return (
    <section id='certificate' className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white overflow-hidden"
            >
              <CardHeader className="relative">
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
                  <Badge variant="secondary" className="bg-green-100 text-green-800 font-medium">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
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
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                      disabled
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
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
