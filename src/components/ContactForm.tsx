import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { siteInfo } from "@/data/siteInfo";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Create WhatsApp message
    const message = `*New Portfolio Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A%0A*Message:*%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/2349031386928?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="phone">WhatsApp Number *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+234 903 138 6928"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="mt-1.5 min-h-[150px] resize-none"
        />
      </div>

      <Button type="submit" className="w-full" size="lg">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
