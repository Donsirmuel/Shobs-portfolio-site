import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectCard = ({ title, description, image, category }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group overflow-hidden border-0 shadow-md hover-lift cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${title} - ${category} design project by Shobs Creations`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <Badge className="mb-2 bg-accent text-accent-foreground">
              {category}
            </Badge>
            <h3 className="font-display text-xl mb-2">{title}</h3>
            <p className="text-sm text-background/90">{description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
