// NOTE: This data can later be managed via Decap CMS or API if needed.

export const projects = [
  {
    id: 1,
    title: "Modern Logo Collection",
    description: "A curated set of minimalist logos for tech startups, featuring clean lines and bold typography.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    category: "Branding",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Restaurant Branding",
    description: "Complete brand identity including menu design, business cards, and signage for an upscale dining experience.",
    image: "https://images.unsplash.com/photo-1616587226157-48e49175ee20?w=800&h=600&fit=crop",
    category: "Branding",
    featured: true,
  },
  {
    id: 3,
    title: "Event Flyer Series",
    description: "Dynamic promotional flyers for music festivals and cultural events, designed to grab attention.",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    category: "Print Design",
    featured: true,
  },
  {
    id: 4,
    title: "Mobile App UI Design",
    description: "Intuitive user interface design for a fitness tracking app with smooth animations and modern aesthetics.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    category: "UI Design",
    featured: true,
  },
  {
    id: 5,
    title: "Product Packaging Mockups",
    description: "Realistic 3D mockups for skincare product line, showcasing elegant packaging design and color schemes.",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=600&fit=crop",
    category: "Mockups",
    featured: true,
  },
  {
    id: 6,
    title: "Corporate Brand Guidelines",
    description: "Comprehensive brand book including logo usage, color palettes, typography, and visual standards.",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&h=600&fit=crop",
    category: "Branding",
    featured: true,
  },
  {
    id: 7,
    title: "Social Media Graphics",
    description: "Eye-catching Instagram and Facebook templates for fashion brands, optimized for engagement.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
    category: "Digital Design",
    featured: false,
  },
  {
    id: 8,
    title: "Magazine Layout Design",
    description: "Editorial layouts for lifestyle magazine featuring creative typography and striking photo compositions.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    category: "Print Design",
    featured: false,
  },
];

export const categories = [...new Set(projects.map(p => p.category))];
