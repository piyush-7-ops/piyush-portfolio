
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();

  // Convert string id to number and find the project
  const projectId = id ? parseInt(id, 10) : null;
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <Layout>
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/work" className="text-primary hover:underline">← Back to Work</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          {/* Hero Section */}
          <div className="mb-16 animate-fade-in">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-primary font-medium">{project.category}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6 animate-slide-in">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Client</h3>
                <p className="text-muted-foreground">{project.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">{project.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">My Role</h3>
                <p className="text-muted-foreground">{project.role}</p>
              </div>
            </div>
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Team</h3>
                <p className="text-muted-foreground">{project.team}</p>
              </div>
              <div>
                  <h3 className="font-semibold text-foreground mb-2">Project Link</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit Project ↗
                  </a>
                </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-16">
            {/* Overview */}
            <section className="animate-fade-in">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </section>

            {/* Challenge */}
            <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-semibold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </section>

            {/* Solution */}
            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-semibold text-foreground mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </section>

            {/* Design Process */}
{project.processImage ? (
  <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
    <h2 className="text-2xl font-semibold text-foreground mb-8">Design Process</h2>
    <div className="w-full rounded-xl overflow-hidden shadow-lg">
      <img
        src={project.processImage}
        alt="Design Process"
        className="w-full h-auto object-cover"
      />
    </div>
  </section>
) : (
  <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
    <h2 className="text-2xl font-semibold text-foreground mb-8">Design Process</h2>
    <div className="space-y-12">
      {project.process?.map((step, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {index + 1}. {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
          <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)}


            {/* Outcome */}
            <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Results & Impact</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.outcome}</p>
            </section>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-20 pt-8 border-t border-border">
            <Link
              to="/work"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Let's Work Together
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
