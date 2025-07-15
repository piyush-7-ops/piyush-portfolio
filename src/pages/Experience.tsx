
import React from 'react';
import Layout from '../components/Layout';

const Experience = () => {
  const experiences = [
    {
      role: 'Product Designer',
      company: 'AITOXR Private Limited',
      period: 'August 2024 - Present',
      description: 'Worked on diverse client projects ranging from e-commerce to healthcare. Developed strong foundation in user research, prototyping, and design thinking methodologies.',
      achievements: [
        'Delivered 10+ successful client projects',
        'Specialized in healthcare, fintech and sports industries',
        'Collaborated with developments team and clients to deliver better product'
      ]
    },
    {
      role: 'Junior Designer',
      company: 'BDA Technologies',
      period: 'Feb 2024 - July 2024',
      description: 'Started career focusing on visual design and branding. Developed skills in user interface design and began transitioning to UX design.',
      achievements: [
        'Created brand identities for 20+ startups',
        'Learned UX research and prototyping',
        'Handling social media handles of multiple clients to get better reach.'
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-4 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              My journey as a product designer, from junior roles to senior leadership
            </p>
          </div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot with gradient */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-20">
                  <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 relative group">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-3 py-1 rounded-full mt-2 md:mt-0 self-start border border-blue-200/50 dark:border-blue-800/50">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start">
                              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mr-2 font-bold">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
