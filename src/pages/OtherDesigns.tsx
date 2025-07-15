
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const OtherDesigns = () => {
  const designCategories = [
    {
      id: 'logo-designs',
      title: 'Logo Designs',
      description: 'Brand identity and logo design projects',
      image: '/images/otherdesigns/coverimages/logocover.png',
      count: '12+ Projects'
    },
    {
      id: 'social-media',
      title: 'Social Media Designs',
      description: 'Creative social media posts and campaigns',
      image: '/images/otherdesigns/coverimages/smcover.png',
      count: '100+ Designs'
    },
    // {
    //   id: 'brochures',
    //   title: 'Brochures',
    //   description: 'Print and digital brochure designs',
    //   image: '/images/otherdesigns/coverimages/brochurecover.png',
    //   count: '8+ Brochures'
    // },
    // {
    //   id: 'other-designs',
    //   title: 'Other Designs',
    //   description: 'Miscellaneous design projects and experiments',
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    //   count: '15+ Projects'
    // },
    // {
    //   id: 'posters',
    //   title: 'Poster Designs',
    //   description: 'Event and promotional poster designs',
    //   image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=400&fit=crop',
    //   count: '10+ Posters'
    // },
    // {
    //   id: 'packaging',
    //   title: 'Packaging Design',
    //   description: 'Product packaging and label designs',
    //   image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    //   count: '7+ Packages'
    // }
  ];

  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Other Designs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring creativity beyond digital products - brand identities, print design, and visual communications
            </p>
          </div>

          {/* Design Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designCategories.map((category, index) => (
              <div
                key={category.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/designs/${category.id}`}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-primary font-medium mb-2">
                        {category.count}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
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

export default OtherDesigns;
