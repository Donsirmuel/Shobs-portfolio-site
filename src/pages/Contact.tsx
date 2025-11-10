import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
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
      label: "Chat on WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      description: siteInfo.email,
      link: `mailto:${siteInfo.email}`,
      label: "Send Email",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "See my latest work",
      link: siteInfo.instagram,
      label: "Follow on Instagram",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl mb-6 animate-fade-in bg-gradient-to-r from-vibrant-pink to-vibrant-purple bg-clip-text text-transparent">
              Let's Create Together
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in">
              Have a project in mind? I'd love to hear about it. 
              Fill out the form below or reach out directly through your preferred channel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="p-8">
                <h2 className="font-display text-2xl mb-6">Send a Message</h2>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-display text-2xl mb-6">Other Ways to Connect</h2>
              
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
                          <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
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
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours during business days. 
                  For urgent inquiries, WhatsApp is the fastest way to reach me.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
