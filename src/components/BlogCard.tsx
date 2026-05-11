import { Card } from "@/components/ui/card";
import { Calendar, ArrowUpRight } from "lucide-react";
import { useCursorTilt } from "@/hooks/useCursorTilt";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const BlogCard = ({ title, excerpt, image, author, date, category }: BlogCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const tilt = useCursorTilt(6);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="group relative perspective-1000 cursor-pointer"
    >
      {/* Sticker */}
      <div className="absolute -top-3 left-4 z-20 sticker px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
        {category}
      </div>

      <Card className="tilt-3d sheen overflow-hidden border-0 shadow-md rounded-2xl bg-card">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={`Blog post: ${title}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
              <span className="mx-1">·</span>
              <span>{author}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-foreground/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <h3 className="font-display text-2xl leading-tight mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
