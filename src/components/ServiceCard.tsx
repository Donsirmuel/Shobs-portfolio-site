import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ name, description, icon: Icon }: ServiceCardProps) => {
  return (
    <Card className="hover-lift transition-all duration-300 border-2 hover:border-accent group">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;
