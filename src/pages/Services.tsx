import { useState } from "react";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ImageLightbox from "@/components/ImageLightbox";
import Newsletter from "@/components/Newsletter";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";
import { projects, categories } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Sparkles, Eye } from "lucide-react";
import { useCursorTilt } from "@/hooks/useCursorTilt";

// Small inline wrapper to attach cursor-based tilt to a card
const TiltShell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const tilt = useCursorTilt(6);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`group relative perspective-1000 ${className}`}
    >
      {children}
    </div>
  );
};

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

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

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const filteredPortfolioProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-vibrant-pink/20 rounded-full animate-float hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-vibrant-purple/10 rounded-lg rotate-45 animate-float-delayed hidden lg:block" />
        <div className="absolute top-1/2 left-20 w-12 h-12 border-2 border-vibrant-orange/20 rounded-full animate-pulse-slow hidden lg:block" />
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-vibrant-cyan/10 rounded-full animate-float hidden lg:block" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-vibrant-purple/10 text-vibrant-purple px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">What I Do Best</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl mb-6 animate-fade-in bg-gradient-to-r from-vibrant-pink via-vibrant-purple to-vibrant-orange bg-clip-text text-transparent">
              Services & Portfolio
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
              <ScrollReveal
                key={service.id} 
                animation="scale-in"
                delay={index * 100}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => handleScroll(service.anchor)}
                >
                  <ServiceCard
                    name={service.name}
                    description={service.description}
                    icon={service.icon}
                  />
                </div>
              </ScrollReveal>
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
                <ScrollReveal>
                  <div className="mb-12 text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-vibrant-pink to-vibrant-purple bg-clip-text text-transparent">
                      {service.name}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {categoryProjects.map((project, index) => {
                    const currentIndex = currentImageIndex[project.id] || 0;
                    
                    return (
                      <ScrollReveal key={project.id} animation="slide-up" delay={index * 150}>
                        <TiltShell>
                          <div className="tilt-3d card-stack sheen bg-card rounded-2xl overflow-hidden border border-border/60 shadow-md">
                            {/* Image Carousel */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                              <img
                                src={project.images[currentIndex]}
                                alt={`${project.title} - Image ${currentIndex + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                loading="lazy"
                              />

                              {/* View full size */}
                              <button
                                onClick={() => openLightbox(project.images, currentIndex, project.title)}
                                className="absolute top-4 right-4 bg-background/85 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                aria-label="View full size"
                              >
                                <Eye className="w-5 h-5" />
                              </button>

                              {project.images.length > 1 && (
                                <>
                                  <button
                                    onClick={() => prevImage(project.id, project.images.length)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/85 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft className="w-5 h-5" />
                                  </button>
                                  <button
                                    onClick={() => nextImage(project.id, project.images.length)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/85 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                    aria-label="Next image"
                                  >
                                    <ChevronRight className="w-5 h-5" />
                                  </button>

                                  {/* Image indicators */}
                                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                    {project.images.map((_, idx) => (
                                      <div
                                        key={idx}
                                        className={`h-2 rounded-full transition-all ${
                                          idx === currentIndex
                                            ? 'bg-primary w-6'
                                            : 'bg-background/70 w-2'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}

                              {/* Sticker label */}
                              <div className="absolute -top-3 -left-3 z-20 sticker px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">
                                {project.category}
                              </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                              <h3 className="font-display text-2xl mb-3 text-foreground">
                                {project.title}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {project.description}
                              </p>

                              {/* Project Story */}
                              {project.challenge && (
                                <div className="space-y-3 pt-4 border-t border-border">
                                  <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Challenge</span>
                                    <p className="text-sm text-muted-foreground mt-1">{project.challenge}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Outcome</span>
                                    <p className="text-sm text-muted-foreground mt-1">{project.outcome}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </TiltShell>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Portfolio Section */}
          <section className="mb-32" id="portfolio">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-2 bg-vibrant-orange/10 text-vibrant-orange px-4 py-2 rounded-full mb-6">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">Full Portfolio</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-vibrant-orange to-vibrant-pink bg-clip-text text-transparent">
                  All Projects
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Browse through my complete body of work across all categories.
                </p>
              </div>
            </ScrollReveal>

            {/* Category Filter */}
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 justify-center mb-12">
                <Badge
                  variant={selectedCategory === "All" ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm hover-scale"
                  onClick={() => setSelectedCategory("All")}
                >
                  All
                </Badge>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 text-sm hover-scale"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolioProjects.map((project, index) => {
                const currentIndex = currentImageIndex[project.id] || 0;
                return (
                  <ScrollReveal key={project.id} animation="scale-in" delay={index * 80}>
                    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-vibrant-pink transition-all duration-300 hover-lift">
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
                           onClick={() => openLightbox(project.images, 0, project.title)}>
                        <img 
                          src={project.images[currentIndex]}
                          alt={`${project.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge className="bg-vibrant-pink text-white mb-2">{project.category}</Badge>
                            <h3 className="text-white font-display text-lg">{project.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <ScrollReveal animation="scale-in">
            <div className="bg-gradient-to-br from-vibrant-pink/10 via-vibrant-purple/10 to-vibrant-orange/10 rounded-2xl p-12 text-center border-2 border-vibrant-purple/20 relative overflow-hidden">
              {/* Floating decorative elements */}
              <div className="absolute top-6 left-6 w-16 h-16 border-2 border-vibrant-pink/20 rounded-full animate-float hidden md:block" />
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-vibrant-purple/10 rounded-lg rotate-45 animate-float-delayed hidden md:block" />
              
              <h2 className="font-display text-3xl md:text-4xl mb-4 text-foreground">
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
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>

      <Footer />

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)}
        onPrevious={() => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
        title={lightboxTitle}
      />
    </div>
  );
};

export default Services;
