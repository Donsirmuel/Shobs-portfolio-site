import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/data/siteInfo";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Bold Hero Image/Video Background */}
      <div className="absolute inset-0 -z-10">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
        {/* Animated gradient accents */}
        <div className="absolute inset-0 bg-gradient-creative opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-96 h-96 bg-vibrant-purple/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-vibrant-pink/30 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vibrant-orange/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Decorative Element */}
            <div className="flex justify-center mb-8 animate-bounce-slow">
              <div className="relative">
                <Sparkles className="w-12 h-12 text-vibrant-pink animate-pulse" />
                <Sparkles className="w-6 h-6 text-vibrant-purple absolute -top-2 -right-2 animate-ping" />
              </div>
            </div>

            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 text-balance leading-tight">
              <span className="text-gradient-hero">
                {siteInfo.tagline}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground mb-4 max-w-3xl mx-auto text-balance font-medium">
              {siteInfo.name}
            </p>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto text-balance">
              Crafting visual stories with <span className="text-creative-pink font-semibold">CorelDRAW</span> & <span className="text-creative-purple font-semibold">Adobe Creative Suite</span>. 
              Turning ideas into stunning designs that captivate and convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="group bg-gradient-to-r from-vibrant-pink to-vibrant-purple hover:shadow-neon text-lg px-8 py-6 hover-scale">
                <Link to="/services">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-vibrant-purple hover:bg-vibrant-purple/10 text-lg px-8 py-6 hover-scale">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          {/* Floating Design Elements */}
          <div className="absolute top-1/4 left-10 animate-float opacity-20 hidden lg:block">
            <div className="w-32 h-32 border-4 border-vibrant-pink rounded-full" />
          </div>
          <div className="absolute bottom-1/4 right-10 animate-float-delayed opacity-20 hidden lg:block">
            <div className="w-24 h-24 bg-gradient-to-br from-vibrant-purple to-vibrant-orange rounded-lg rotate-45" />
          </div>

          {/* Scroll indicator - hidden on mobile to avoid obstructing buttons */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-vibrant-pink rounded-full flex justify-center p-1">
              <div className="w-1.5 h-3 bg-vibrant-pink rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
