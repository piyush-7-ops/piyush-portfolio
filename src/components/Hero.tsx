
import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Piyush Kumar</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">a Product Designer</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Focused on crafting user-centered experiences and turning design challenges into elegant digital products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            {/* Resume Button with gradient */}
            <div className="relative w-full sm:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                My Resume
                <a
                  href="/resume.pdf"
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="ml-2 p-1 rounded hover:bg-white/20 transition-colors"
                  title="Download Resume"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </a>
            </div>
            
            <button
              onClick={scrollToWork}
              className="relative border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 rounded-lg text-base sm:text-lg font-medium hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
            >
              <span className="block bg-background hover:bg-transparent hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-300">
                View My Work
              </span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-8 sm:mt-0">
            <button
              onClick={scrollToWork}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to work section"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
