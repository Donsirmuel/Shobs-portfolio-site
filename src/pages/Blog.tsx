import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-creative-pink via-creative-purple to-creative-orange bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my design process, case studies, and creative insights
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map((category: string) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm hover:scale-105 transition-transform"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Blog;
