import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ImageLightbox from "@/components/ImageLightbox";
import { useCursorTilt } from "@/hooks/useCursorTilt";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images?: string[];
  category: string;
}

// Deterministic palette per category, so it feels intentional, not random.
const paletteFor = (key: string) => {
  const palettes = [
    ["#E76F51", "#F4A261", "#264653"],
    ["#2A9D8F", "#E9C46A", "#1D3557"],
    ["#B5651D", "#F2EBDD", "#3D405B"],
    ["#9D4EDD", "#FFB4A2", "#22223B"],
    ["#588157", "#DAD7CD", "#344E41"],
  ];
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  return palettes[hash % palettes.length];
};

const ProjectCard = ({ title, description, image, images, category }: ProjectCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = images || [image];
  const swatches = paletteFor(title + category);
  const tilt = useCursorTilt(7);

  const handleImageClick = () => {
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };
  const handleNext = () => setCurrentImageIndex((p) => (p + 1) % projectImages.length);
  const handlePrevious = () =>
    setCurrentImageIndex((p) => (p - 1 + projectImages.length) % projectImages.length);

  return (
    <>
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group relative perspective-1000 cursor-pointer"
        onClick={handleImageClick}
      >
        {/* Floating sticker — "01 / Project" feel */}
        <div className="absolute -top-3 -left-3 z-20 sticker px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium">
          {category}
        </div>

        {/* Tiny rotating mark, designer-y */}
        <svg
          aria-hidden
          className="absolute -top-4 -right-4 z-20 w-14 h-14 text-foreground/70 animate-spin-slow opacity-80"
          viewBox="0 0 100 100"
        >
          <defs>
            <path id={`circ-${title.replace(/\s+/g, "")}`} d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
          </defs>
          <text fontSize="9.5" letterSpacing="2" fill="currentColor" fontFamily="Inter Tight, sans-serif">
            <textPath href={`#circ-${title.replace(/\s+/g, "")}`}>
              SHOBS · CRAFT · STUDIO · 2026 ·
            </textPath>
          </text>
        </svg>

        <Card className="tilt-3d card-stack sheen overflow-hidden border-0 shadow-md rounded-2xl bg-card">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={`${title} — ${category} design project by Shobs Creations`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              loading="lazy"
            />
            {/* Soft inner vignette for depth */}
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-none pointer-events-none" />
          </div>

          {/* Editorial caption block */}
          <div className="p-5 flex items-start justify-between gap-4 bg-card">
            <div className="min-w-0">
              <h3 className="font-display text-2xl leading-tight truncate">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{description}</p>
            </div>
            <div className="flex flex-col items-end gap-2 shrink-0">
              <span className="swatch-row">
                {swatches.map((c) => (
                  <span key={c} style={{ background: c }} />
                ))}
              </span>
              <Badge variant="outline" className="rounded-full text-[10px] uppercase tracking-wider border-foreground/20">
                View
              </Badge>
            </div>
          </div>
        </Card>
      </div>

      <ImageLightbox
        images={projectImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrevious={handlePrevious}
        title={title}
      />
    </>
  );
};

export default ProjectCard;
