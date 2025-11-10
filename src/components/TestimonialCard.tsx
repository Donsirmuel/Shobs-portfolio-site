import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, avatar, rating }: TestimonialCardProps) => {
  return (
    <Card className="p-6 hover-lift bg-card/50 backdrop-blur border-2 border-border/50">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={avatar}
          alt={`${name} - Client photo`}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-vibrant-pink/20"
          loading="lazy"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{role}</p>
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-vibrant-orange text-vibrant-orange" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-foreground/80 italic leading-relaxed">"{content}"</p>
    </Card>
  );
};

export default TestimonialCard;
