import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const BlogCard = ({ title, excerpt, image, author, date, category }: BlogCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="overflow-hidden hover-lift group cursor-pointer border-0 shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`Blog post: ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <Badge className="absolute top-4 left-4 bg-vibrant-pink text-white">
          {category}
        </Badge>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl mb-3 group-hover:text-vibrant-pink transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
