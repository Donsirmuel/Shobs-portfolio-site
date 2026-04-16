import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, Sparkles } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Welcome aboard! You'll receive design inspiration soon. 🎨");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/5 via-vibrant-purple/10 to-vibrant-orange/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-vibrant-pink/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-vibrant-purple/10 rounded-lg rotate-45 animate-float-delayed hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-12 h-12 border-2 border-vibrant-orange/20 rounded-full animate-pulse-slow hidden lg:block" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-vibrant-purple/10 text-vibrant-purple px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Stay Inspired</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl mb-4 text-foreground">
            Get Design Tips & Updates
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join the creative community! Get exclusive design insights, project showcases, 
            and industry tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 border-2 border-border focus:border-vibrant-purple"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-8 bg-gradient-to-r from-vibrant-pink to-vibrant-purple hover:shadow-neon hover-scale"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
