
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Experience', path: '/experience' },
    { name: 'Other Designs', path: '/designs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            <img 
              src="/lovable-uploads/bc54c2cf-b5e4-4515-bb54-f211f89497ac.png" 
              alt="Piyush Kumar" 
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover"
            />
            Piyush Kumar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Resume Button */}
            <div className="relative">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Resume
                <a
                  href="/resume.pdf"
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="ml-1 hover:text-white/80 transition-colors"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent transition-colors relative group"
              aria-label="Toggle theme"
            >
              <span className="text-xl sm:text-2xl">{theme === 'light' ? '🌙' : '☀️'}</span>
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
              <span className={`w-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Resume
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md hover:bg-accent transition-colors ml-4"
                >
                  <span className="text-xl">{theme === 'light' ? '🌙' : '☀️'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
