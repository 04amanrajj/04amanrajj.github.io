import React from 'react';
import { Code, Globe, Database, ChevronRight } from 'lucide-react';

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; color: string }> = ({ icon, value, label, color }) => (
  <div className={`flex-1 flex flex-col items-center justify-center py-4 px-2 rounded-2xl ${color} gap-1`}>
    <div className="mb-1">{icon}</div>
    <p className="text-2xl font-bold tracking-tight">{value}</p>
    <p className="text-xs font-medium opacity-70">{label}</p>
  </div>
);

export const AboutMobile: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section label */}
        <div className="flex items-center gap-2 mb-6 md:mb-12 md:justify-center">
          <span className="w-6 h-0.5 bg-primary rounded-full" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">About Me</p>
        </div>

        {/* Stats row — prominent on mobile */}
        <div className="flex gap-3 mb-8 animated-section">
          <StatCard
            icon={<Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
            value="10+" label="Projects"
            color="bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100"
          />
          <StatCard
            icon={<Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
            value="15+" label="Technologies"
            color="bg-purple-50 dark:bg-purple-900/20 text-purple-900 dark:text-purple-100"
          />
          <StatCard
            icon={<Database className="h-5 w-5 text-green-600 dark:text-green-400" />}
            value="3+" label="Databases"
            color="bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100"
          />
        </div>

        {/* Bio card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 animated-section space-y-4">
          <h2 className="text-xl md:text-3xl font-bold">
            Fullstack <span className="text-primary">Developer</span>
          </h2>
          <div className="space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Proficient in JavaScript, React, Node.js, Express, MongoDB, and PostgreSQL —
              building scalable software solutions with a collaborative, detail-oriented approach.
            </p>
            <p>
              Currently pursuing a <strong className="text-gray-800 dark:text-gray-200">BCA</strong> at Mohanlal Sukhadia University,
              building a strong CS &amp; programming foundation.
            </p>
          </div>

          {/* Quick tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'REST API'].map(tag => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {tag}
              </span>
            ))}
          </div>

          <a href="#experience" onClick={e => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-2">
            View Experience <ChevronRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutMobile;
