import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ProjectCardSkeleton, BlogCardSkeleton } from "@/components/LoadingSkeleton";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Target, Zap } from "lucide-react";

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToTop />
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="slide-in-left">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                    alt="Shobs - Professional Graphic Designer at work"
                    className="rounded-2xl shadow-2xl ring-4 ring-vibrant-pink/20 w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-vibrant-pink to-vibrant-purple rounded-full blur-2xl opacity-50 animate-pulse-slow" />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-in-right" delay={200}>
                <h2 className="font-display text-4xl md:text-5xl mb-6 bg-gradient-to-r from-vibrant-pink to-vibrant-purple bg-clip-text text-transparent">
                  Meet Shobs
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  A passionate graphic designer with over 8 years of experience crafting 
                  visual stories that resonate and convert. Specializing in brand identity, print design, 
                  and packaging, I use <span className="text-vibrant-pink font-semibold">CorelDRAW</span> and <span className="text-vibrant-purple font-semibold">Adobe Creative Suite</span> to 
                  bring bold ideas to life.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-vibrant-orange flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">Design Philosophy</h3>
                      <p className="text-muted-foreground">Every project is an opportunity to create something extraordinary. Great design solves problems and drives results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-vibrant-pink flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">Why Choose Me</h3>
                      <p className="text-muted-foreground">I combine technical mastery with creative vision, delivering designs that achieve your business goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-vibrant-purple flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">What Makes Me Different</h3>
                      <p className="text-muted-foreground">Fast turnaround, unlimited revisions until perfect, and a proven track record of increasing brand recognition.</p>
                    </div>
                  </div>
                </div>

                <Button asChild variant="outline" size="lg" className="border-2 border-vibrant-purple hover:bg-vibrant-purple/10 hover-scale">
                  <Link to="/contact">
                    Let's Collaborate
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl mb-4 text-foreground">
                Featured Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of recent projects showcasing brand identity, 
                print design, and creative solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)
              : featuredProjects.map((project, index) => (
                  <ScrollReveal key={project.id} animation="slide-up" delay={index * 100}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.images[0]}
                      images={project.images}
                      category={project.category}
                    />
                  </ScrollReveal>
                ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-vibrant-pink to-vibrant-purple hover:shadow-neon hover-scale">
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-vibrant-pink to-vibrant-purple bg-clip-text text-transparent">
                Client Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take my word for it—hear what clients say about working with Shobs Creations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} animation="scale-in" delay={index * 100}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl mb-4 text-foreground">
                Latest Insights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Design tips, case studies, and behind-the-scenes looks at recent projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => <BlogCardSkeleton key={i} />)
              : blogPosts.slice(0, 3).map((post, index) => (
                  <ScrollReveal key={post.id} animation="slide-up" delay={index * 100}>
                    <BlogCard
                      title={post.title}
                      excerpt={post.excerpt}
                      image={post.image}
                      author={post.author}
                      date={post.date}
                      category={post.category}
                    />
                  </ScrollReveal>
                ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="border-2 border-vibrant-purple hover:bg-vibrant-purple/10 hover-scale">
                <Link to="/blog">
                  Read All Posts
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
