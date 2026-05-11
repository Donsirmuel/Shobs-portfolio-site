import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useCursorTilt } from "@/hooks/useCursorTilt";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ name, description, icon: Icon }: ServiceCardProps) => {
  const tilt = useCursorTilt(6);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="group relative perspective-1000"
    >
      {/* Floating sticker number/label */}
      <div className="absolute -top-3 -right-3 z-20 sticker w-10 h-10 text-[10px] uppercase tracking-wider">
        ✦
      </div>

      <Card className="tilt-3d card-stack sheen relative overflow-hidden border-0 shadow-md rounded-2xl bg-card p-7">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <span className="font-display italic text-3xl text-foreground/20 group-hover:text-primary/60 transition-colors">
            ✦
          </span>
        </div>
        <h3 className="font-display text-2xl leading-tight mb-2 text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        {/* Bottom rule + arrow hint */}
        <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>View work</span>
          <span className="font-display text-base text-foreground transition-transform group-hover:translate-x-1">→</span>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
