
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const WorkSection = () => {
  return (
    <section id="work-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Gradient section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A selection of projects that showcase my approach to solving complex design challenges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/work/${project.id}`}>
                <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="text-sm font-medium mb-2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
