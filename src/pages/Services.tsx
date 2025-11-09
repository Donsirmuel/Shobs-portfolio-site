import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const handleScroll = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const nextImage = (projectId: number, maxLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxLength
    }));
  };

  const prevImage = (projectId: number, maxLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxLength) % maxLength
    }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl mb-6 animate-fade-in bg-gradient-to-r from-vibrant-pink via-vibrant-purple to-vibrant-orange bg-clip-text text-transparent">
              Services
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in">
              From concept to execution, I offer comprehensive design services 
              tailored to elevate your brand and captivate your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleScroll(service.anchor)}
              >
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>

          {/* Design Showcases by Category */}
          {services.map((service) => {
            const categoryProjects = projects.filter(p => 
              p.category.toLowerCase().replace(/\s+/g, '-') === service.anchor ||
              p.category === service.name
            );

            if (categoryProjects.length === 0) return null;

            return (
              <section 
                key={service.id} 
                id={service.anchor}
                className="mb-32 scroll-mt-20"
              >
                <div className="mb-12 text-center">
                  <h2 className="font-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-vibrant-pink to-vibrant-purple bg-clip-text text-transparent">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {categoryProjects.map((project) => {
                    const currentIndex = currentImageIndex[project.id] || 0;
                    
                    return (
                      <div 
                        key={project.id}
                        className="group bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-vibrant-pink transition-all duration-300 hover-lift"
                      >
                        {/* Image Carousel */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <img 
                            src={project.images[currentIndex]}
                            alt={`${project.title} - Image ${currentIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          {project.images.length > 1 && (
                            <>
                              <button
                                onClick={() => prevImage(project.id, project.images.length)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Previous image"
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => nextImage(project.id, project.images.length)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Next image"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </button>
                              
                              {/* Image indicators */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.images.map((_, idx) => (
                                  <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                      idx === currentIndex 
                                        ? 'bg-vibrant-pink w-6' 
                                        : 'bg-white/50'
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                          <h3 className="font-display text-2xl mb-3 text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-vibrant-pink/10 via-vibrant-purple/10 to-vibrant-orange/10 rounded-2xl p-12 text-center border-2 border-vibrant-purple/20">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. 
              Whether it's a complete rebrand or a single design piece, I'm here to help.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-vibrant-pink to-vibrant-purple hover:shadow-neon hover-scale">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
