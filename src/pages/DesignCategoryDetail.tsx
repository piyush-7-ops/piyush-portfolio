
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { designCategoriesData } from '../data/designCategories';

const DesignCategoryDetail = () => {
  const { categoryId } = useParams();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categoryData = designCategoriesData[categoryId as keyof typeof designCategoriesData];

  if (!categoryData) {
    return (
      <Layout>
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Category not found</h1>
          <Link to="/designs" className="text-primary hover:underline">← Back to Other Designs</Link>
        </div>
      </Layout>
    );
  }

  const handleItemClick = (item: any) => {
    // Only open popup for categories that have detailed views
    if (categoryId === 'brochures') {
      setSelectedItem(item);
      setIsPopupOpen(true);
    }
  };

  const renderGalleryItem = (item: any, index: number) => {
    const isClickable = categoryId === 'brochures';
    
    return (
      <div
        key={index}
        className={`group animate-fade-in ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => handleItemClick(item)}
      >
        <div className={`bg-card rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
          isClickable ? 'hover:shadow-xl hover:scale-105' : ''
        }`}>
          <div className="aspect-square overflow-hidden">
            <img
              src={item.image}
              alt={item.title || `Gallery item ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isClickable ? 'group-hover:scale-110' : ''
              }`}
            />
          </div>
          {/* Only show text content for logo designs and brochures */}
          {(categoryId === 'logo-designs' || categoryId === 'brochures') && (
            <div className="p-4">
              <h3 className={`font-semibold text-foreground mb-1 transition-colors ${
                isClickable ? 'group-hover:text-primary' : ''
              }`}>
                {item.title}
              </h3>
              {item.client && (
                <p className="text-sm text-muted-foreground">
                  {item.client}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPopupContent = () => {
    if (categoryId === 'brochures') {
      return (
        <div className="space-y-4">
          <Carousel className="w-full">
            <CarouselContent>
              {selectedItem.pages.map((page: string, index: number) => (
                <CarouselItem key={index}>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={page}
                      alt={`Page ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      );
    }

    return null;
  };

  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {categoryData.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {categoryData.description}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryData.items.map((item, index) => renderGalleryItem(item, index))}
          </div>

          {/* Popup Dialog */}
          <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{selectedItem?.title}</DialogTitle>
              </DialogHeader>
              {renderPopupContent()}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

export default DesignCategoryDetail;
