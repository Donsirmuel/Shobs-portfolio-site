import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Hi, I'm Nancy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A passionate graphic designer with over 5 years of experience crafting 
              visual stories that resonate. I specialize in brand identity, digital design, 
              and print media, using tools like CorelDRAW and Adobe Creative Suite to 
              bring ideas to life. Every project is an opportunity to create something 
              meaningful and memorable.
            </p>
            <Button asChild variant="outline" size="lg">
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
                  image={project.image}
                  category={project.category}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
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
