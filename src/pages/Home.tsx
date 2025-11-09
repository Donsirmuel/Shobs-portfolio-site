import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { projects } from "@/data/projects";
import { siteInfo } from "@/data/siteInfo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6 bg-gradient-to-r from-vibrant-pink to-vibrant-purple bg-clip-text text-transparent">
              About {siteInfo.name}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A passionate graphic designer with expertise in crafting 
              visual stories that resonate and convert. Specializing in brand identity, print design, 
              and packaging, using <span className="text-vibrant-pink font-semibold">CorelDRAW</span> and <span className="text-vibrant-purple font-semibold">Adobe Creative Suite</span> to 
              bring bold ideas to life. Every project is an opportunity to create something 
              extraordinary and unforgettable.
            </p>
            <Button asChild variant="outline" size="lg" className="border-2 border-vibrant-purple hover:bg-vibrant-purple/10 hover-scale">
              <Link to="/contact">
                Let's Collaborate
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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

      <Footer />
    </div>
  );
};

export default Home;
