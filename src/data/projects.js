// NOTE: This data can later be managed via Decap CMS or API if needed.

export const projects = [
  {
    id: 1,
    title: "Modern Logo Collection",
    description: "A curated set of minimalist logos for tech startups, featuring clean lines and bold typography.",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600096194734-e8e76d75d7e1?w=800&h=600&fit=crop",
    ],
    category: "Logo Design",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Restaurant Branding",
    description: "Complete brand identity including menu design, business cards, and signage for an upscale dining experience.",
    images: [
      "https://images.unsplash.com/photo-1616587226157-48e49175ee20?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&h=600&fit=crop",
    ],
    category: "Branding & Identity",
    featured: true,
  },
  {
    id: 3,
    title: "Event Flyer Series",
    description: "Dynamic promotional flyers for music festivals and cultural events, designed to grab attention.",
    images: [
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
    ],
    category: "Print Design",
    featured: true,
  },
  {
    id: 4,
    title: "Product Packaging Mockups",
    description: "Realistic 3D mockups for skincare product line, showcasing elegant packaging design and color schemes.",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600096194734-e8e76d75d7e1?w=800&h=600&fit=crop",
    ],
    category: "Mockups & Packaging",
    featured: true,
  },
  {
    id: 5,
    title: "Corporate Brand Guidelines",
    description: "Comprehensive brand book including logo usage, color palettes, typography, and visual standards.",
    images: [
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    ],
    category: "Branding & Identity",
    featured: true,
  },
  {
    id: 6,
    title: "Custom Character Illustrations",
    description: "Original character designs and illustrations for branding, merchandise, and digital media.",
    images: [
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&h=600&fit=crop",
    ],
    category: "Illustration",
    featured: true,
  },
  {
    id: 7,
    title: "Tech Startup Logo Suite",
    description: "Bold and modern logo designs for emerging technology companies with scalable brand systems.",
    images: [
      "https://images.unsplash.com/photo-1600096194734-e8e76d75d7e1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    ],
    category: "Logo Design",
    featured: false,
  },
  {
    id: 8,
    title: "Magazine Layout Design",
    description: "Editorial layouts for lifestyle magazine featuring creative typography and striking photo compositions.",
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
    ],
    category: "Print Design",
    featured: false,
  },
  {
    id: 9,
    title: "Beverage Packaging Design",
    description: "Eye-catching packaging for premium beverage brands with focus on shelf appeal and brand storytelling.",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600096194734-e8e76d75d7e1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&h=600&fit=crop",
    ],
    category: "Mockups & Packaging",
    featured: false,
  },
];

export const categories = [...new Set(projects.map(p => p.category))];
