import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { siteInfo } from "@/data/siteInfo";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: siteInfo.whatsappNumber,
      link: siteInfo.whatsapp,
    },
    {
      icon: Mail,
      title: "Email",
      description: siteInfo.email,
      link: `mailto:${siteInfo.email}`,
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "See my latest work",
      link: siteInfo.instagram,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToTop />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-40 right-10 w-20 h-20 border-2 border-vibrant-pink/20 rounded-full animate-float hidden lg:block" />
        <div className="absolute bottom-20 left-20 w-14 h-14 bg-vibrant-purple/10 rounded-lg rotate-45 animate-float-delayed hidden lg:block" />

        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl mb-6 bg-gradient-to-r from-vibrant-pink to-vibrant-purple bg-clip-text text-transparent">
                Let's Create Together
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? I'd love to hear about it. 
                Fill out the form below or reach out directly.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal animation="slide-in-left">
              <Card className="p-8">
                <h2 className="font-display text-2xl mb-6 text-foreground">Send a Message</h2>
                <ContactForm />
              </Card>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-right" delay={200}>
              <div className="space-y-6">
                <h2 className="font-display text-2xl mb-6 text-foreground">Other Ways to Connect</h2>
                
                <div className="grid gap-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group"
                    >
                      <Card className="p-6 hover-lift transition-all border-2 hover:border-accent">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                            <method.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1 text-foreground group-hover:text-accent transition-colors">
                              {method.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>

                <Card className="p-6 bg-accent/5 border-accent/20">
                  <h3 className="font-semibold mb-2 text-foreground">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. 
                    For urgent inquiries, WhatsApp is the fastest way to reach me.
                  </p>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
