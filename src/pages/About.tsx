
import React from 'react';
import Layout from '../components/Layout';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    'User Experience Design',
    'User Interface Design',
    'User Research',
    'Prototyping',
    'Design Systems',
    'Social Media Marketing',
    'Interaction Design',
    'Branding'
  ];

  const tools = [
    'Figma',
    'Adobe XD',
    'Sketch',
    'Illustrator',
    'Photoshop',
    'Relume AI',
    'Webflow'
  ];

  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate about creating meaningful digital experiences that solve real problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">PK</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  My Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I started my design journey as a Junior Designer, driven by a strong passion for creating intuitive digital experiences. From day one, I knew this field was the right fit for me.
                  </p>
                  <p>
                    In the past year, I’ve grown as a Product Designer by working on real-world projects, collaborating with teams, and solving user problems through thoughtful design.
                  </p>
                  <p>
                    Design isn’t just my career — it’s my passion. I love turning ideas into user-friendly solutions and constantly learning to create better, smarter products.
                  </p>
                </div>
              </div>

              {/* Resume Button */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative inline-block">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    Download My Resume
                    <a
                      href="/resume.pdf"
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 rounded hover:bg-primary-foreground/20 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills and Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="animate-slide-in">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Skills & Expertise
              </h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Tools & Software
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className="bg-muted rounded-lg px-4 py-2 text-center text-muted-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
