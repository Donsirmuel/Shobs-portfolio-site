import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl mb-6 animate-fade-in">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-accent/5 rounded-2xl p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. 
              Whether it's a complete rebrand or a single design piece, I'm here to help.
            </p>
            <Button asChild size="lg">
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
