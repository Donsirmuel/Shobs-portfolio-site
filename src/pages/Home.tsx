import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";
import { siteInfo } from "@/data/siteInfo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Lightbulb, Target, Zap } from "lucide-react";

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

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
              {/* Photo */}
              <div className="animate-fade-in">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                    alt="Shobs - Professional Graphic Designer at work"
                    className="rounded-2xl shadow-2xl ring-4 ring-vibrant-pink/20 w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-vibrant-pink to-vibrant-purple rounded-full blur-2xl opacity-50 animate-pulse-slow" />
                </div>
              </div>

              {/* Bio & Philosophy */}
              <div className="animate-fade-in">
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
                      <h3 className="font-semibold text-lg mb-1">Design Philosophy</h3>
                      <p className="text-muted-foreground">Every project is an opportunity to create something extraordinary. I believe great design isn't just beautiful—it solves problems and drives results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-vibrant-pink flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Why Choose Me</h3>
                      <p className="text-muted-foreground">I combine technical mastery with creative vision, delivering designs that don't just look amazing but achieve your business goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-vibrant-purple flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">What Makes Me Different</h3>
                      <p className="text-muted-foreground">Fast turnaround, unlimited revisions until perfect, and a proven track record of increasing brand recognition and sales for clients.</p>
                    </div>
                  </div>
                </div>

                <Button asChild variant="outline" size="lg" className="border-2 border-vibrant-purple hover:bg-vibrant-purple/10 hover-scale">
                  <Link to="/contact">
                    Let's Collaborate
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects showcasing brand identity, 
              UI design, and creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.images[0]}
                  category={project.category}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-vibrant-pink to-vibrant-purple hover:shadow-neon hover-scale">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-vibrant-pink to-vibrant-purple bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it—hear what clients say about working with Shobs Creations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="animate-fade-in">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Design tips, case studies, and behind-the-scenes looks at recent projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="animate-fade-in">
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  author={post.author}
                  date={post.date}
                  category={post.category}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-2 border-vibrant-purple hover:bg-vibrant-purple/10 hover-scale">
              <Link to="/blog">
                Read All Posts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
