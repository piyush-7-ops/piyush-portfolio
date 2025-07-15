
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { projectsData } from '../data/projects';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobile Design', 'Web Design', 'UX Design', 'Design System'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of projects showcasing my design process and problem-solving approach
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted-foreground/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/work/${project.id}`}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-primary font-medium">
                          {project.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
