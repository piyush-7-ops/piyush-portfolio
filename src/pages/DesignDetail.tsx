
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';

const DesignDetail = () => {
  const { id } = useParams();

  const designsData = {
    1: {
      title: 'Brand Identity - TechStart',
      category: 'Logo Design',
      year: '2024',
      client: 'TechStart Inc.',
      duration: '3 months',
      role: 'Brand Designer',
      team: 'Creative Director, Marketing Manager',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      overview: 'Complete brand identity development for a technology startup, including logo design, color palette, typography, and brand guidelines.',
      challenge: 'Creating a modern, trustworthy brand identity that appeals to both B2B clients and end consumers while standing out in the competitive tech market.',
      solution: 'Developed a clean, geometric logo with a tech-forward color scheme and comprehensive brand guidelines for consistent application across all touchpoints.',
      outcome: 'The new brand identity helped TechStart secure $2M in Series A funding and increased brand recognition by 300%.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Sketch', 'Figma']
    },
    2: {
      title: 'Conference Poster Series',
      category: 'Posters',
      year: '2024',
      client: 'Design Conference 2024',
      duration: '2 months',
      role: 'Graphic Designer',
      team: 'Event Manager, Marketing Team',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      overview: 'Annual design conference promotional materials including posters, banners, and digital assets.',
      challenge: 'Creating visually striking materials that communicate the conference themes while maintaining readability and brand consistency.',
      solution: 'Designed a cohesive visual system with bold typography, vibrant colors, and geometric elements that reflect modern design trends.',
      outcome: 'Conference attendance increased by 40% compared to previous year, with high engagement on promotional materials.',
      tools: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop']
    },
    3: {
      title: 'Product Catalog',
      category: 'Brochures',
      year: '2023',
      client: 'Luxury Interiors Co.',
      duration: '4 months',
      role: 'Publication Designer',
      team: 'Product Manager, Photographer, Copywriter',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      overview: 'Premium product catalog design featuring luxury furniture and home decor items with focus on elegant presentation.',
      challenge: 'Balancing product information with aesthetic appeal while maintaining the luxury brand positioning.',
      solution: 'Created a clean, sophisticated layout with high-quality product photography and minimal text hierarchy.',
      outcome: 'Catalog contributed to 25% increase in sales and won Design Excellence Award for print publications.',
      tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Lightroom']
    },
    4: {
      title: 'Social Media Campaign',
      category: 'Social Media',
      year: '2023',
      client: 'Fashion Forward Brand',
      duration: '6 months',
      role: 'Social Media Designer',
      team: 'Social Media Manager, Content Creator, Photographer',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      overview: 'Brand awareness campaign for fashion startup including Instagram posts, stories, and advertising materials.',
      challenge: 'Creating consistent visual content that drives engagement while building brand recognition in saturated fashion market.',
      solution: 'Developed a cohesive visual style with consistent color palette, typography, and layout templates for various content types.',
      outcome: 'Campaign achieved 500% increase in Instagram followers and 200% boost in website traffic.',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma']
    },
    5: {
      title: 'Restaurant Logo',
      category: 'Logo Design',
      year: '2023',
      client: 'Bella Vista Restaurant',
      duration: '1 month',
      role: 'Logo Designer',
      team: 'Restaurant Owner, Marketing Consultant',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      overview: 'Modern logo design for fine dining restaurant focusing on elegance and sophistication.',
      challenge: 'Creating a logo that conveys upscale dining experience while remaining versatile for various applications.',
      solution: 'Designed an elegant wordmark with custom typography and subtle decorative elements that work across print and digital.',
      outcome: 'Logo helped establish strong brand presence and contributed to 30% increase in reservations.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop']
    },
    6: {
      title: 'Event Poster',
      category: 'Posters',
      year: '2022',
      client: 'Summer Music Festival',
      duration: '3 weeks',
      role: 'Poster Designer',
      team: 'Event Organizer, Marketing Team',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=600&fit=crop',
      overview: 'Music festival promotional poster design with vibrant, energetic aesthetic to attract young audience.',
      challenge: 'Capturing the festival energy and communicating essential information in a visually compelling way.',
      solution: 'Used bold colors, dynamic typography, and musical elements to create an eye-catching design that stands out.',
      outcome: 'Poster design contributed to sold-out festival with over 10,000 attendees.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop']
    },
    7: {
      title: 'Company Brochure',
      category: 'Brochures',
      year: '2022',
      client: 'Strategic Consulting Group',
      duration: '2 months',
      role: 'Publication Designer',
      team: 'Marketing Director, Content Writer',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      overview: 'Corporate brochure design for consulting firm showcasing services and company expertise.',
      challenge: 'Presenting complex business information in an accessible and professional format.',
      solution: 'Created clean, structured layout with infographics and clear information hierarchy.',
      outcome: 'Brochure helped secure 3 major client contracts worth over $500K.',
      tools: ['Adobe InDesign', 'Adobe Illustrator']
    },
    8: {
      title: 'Instagram Templates',
      category: 'Social Media',
      year: '2022',
      client: 'Lifestyle Brand Co.',
      duration: '1 month',
      role: 'Template Designer',
      team: 'Social Media Manager, Brand Manager',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      overview: 'Template pack for lifestyle brand including posts, stories, and highlight covers for Instagram.',
      challenge: 'Creating versatile templates that maintain brand consistency while allowing for content flexibility.',
      solution: 'Developed modular template system with consistent styling that can be easily customized for different content.',
      outcome: 'Templates helped increase social media efficiency by 60% and improved brand consistency across platforms.',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva']
    }
  };

  // Convert string id to number and check if it exists in designsData
  const designId = id ? parseInt(id, 10) : null;
  const design = designId && designId >= 1 && designId <= 8 ? designsData[designId as keyof typeof designsData] : null;

  if (!design) {
    return (
      <Layout>
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Design not found</h1>
          <Link to="/designs" className="text-primary hover:underline">← Back to Other Designs</Link>
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
            to="/designs"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Other Designs
          </Link>

          {/* Hero Section */}
          <div className="mb-16 animate-fade-in">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-primary font-medium">{design.category}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{design.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {design.title}
            </h1>
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Design Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6 animate-slide-in">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Client</h3>
                <p className="text-muted-foreground">{design.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">{design.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">My Role</h3>
                <p className="text-muted-foreground">{design.role}</p>
              </div>
            </div>
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Team</h3>
                <p className="text-muted-foreground">{design.team}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {design.tools.map((tool) => (
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

          {/* Design Details */}
          <div className="space-y-16">
            {/* Overview */}
            <section className="animate-fade-in">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{design.overview}</p>
            </section>

            {/* Challenge */}
            <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-semibold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{design.challenge}</p>
            </section>

            {/* Solution */}
            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-semibold text-foreground mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{design.solution}</p>
            </section>

            {/* Outcome */}
            <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Results & Impact</h2>
              <p className="text-muted-foreground leading-relaxed">{design.outcome}</p>
            </section>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-20 pt-8 border-t border-border">
            <Link
              to="/designs"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Designs
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

export default DesignDetail;
