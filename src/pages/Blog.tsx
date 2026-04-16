import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { BlogCardSkeleton } from "@/components/LoadingSkeleton";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-vibrant-pink via-vibrant-purple to-vibrant-orange bg-clip-text text-transparent">
                Blog & Insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my design process, case studies, and creative insights
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category: string) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm hover-scale"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)
              : filteredPosts.map((post, index) => (
                  <ScrollReveal key={post.id} animation="slide-up" delay={index * 80}>
                    <BlogCard {...post} />
                  </ScrollReveal>
                ))}
          </div>

          {!isLoading && filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Blog;
