# Shobs Creations - Professional Graphic Designer Portfolio

A modern, responsive portfolio website showcasing the graphic design work of Shobs Creations, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, creative design with vibrant colors and smooth animations
- 🌓 Light/Dark mode support
- 📱 Fully responsive across all devices
- ⚡ Fast load times with optimized images and lazy loading
- 🔍 SEO optimized with proper meta tags and alt text
- 📝 Blog section for sharing design insights
- 💬 Client testimonials
- 🎯 Project showcases with detailed case studies
- 📧 Contact form with social media integration

## Content Management

### Updating Projects

To add or edit projects, modify `/src/data/projects.js`:

```javascript
{
  id: 1,
  title: "Project Title",
  description: "Brief description",
  images: ["image1.jpg", "image2.jpg"],
  category: "Logo Design",
  featured: true,
  challenge: "The problem to solve",
  process: "How you solved it",
  outcome: "The results achieved"
}
```

### Updating Contact Information

Edit `/src/data/siteInfo.js` to update:
- Site name and tagline
- Email address
- WhatsApp link
- Social media links (Instagram, Behance)

### Managing Blog Posts

Edit `/src/data/blog.js` to add new blog posts or modify existing ones.

### Managing Testimonials

Edit `/src/data/testimonials.js` to add client testimonials.

## Decap CMS Integration

This project is prepared for Decap CMS (formerly Netlify CMS) for easy content management through an admin interface.

### Accessing the Admin Panel

Once deployed, access the admin panel at: `https://your-domain.com/admin`

### Setting Up Decap CMS

1. Deploy to a Git-based hosting platform (Netlify, Vercel, etc.)
2. Enable Git Gateway or OAuth authentication
3. Access `/admin` to manage content through a user-friendly interface

### What You Can Manage via CMS:
- Projects (add/edit/delete)
- Blog posts
- Testimonials
- Site settings

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy with default settings
4. Custom domain can be configured in Vercel settings

## Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components (Home, Services, Contact)
├── data/             # Content data (projects, blog, testimonials)
│   └── cms/          # Decap CMS managed content
├── lib/              # Utility functions
└── assets/           # Images and static assets
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Radix UI Components
- Lucide Icons
- Vite

## SEO Optimization

- Semantic HTML structure
- Optimized meta tags for all pages
- Descriptive alt text for all images
- Fast load times with lazy loading
- Clean URLs
- Mobile-first responsive design

## Performance

- Image optimization with lazy loading
- Code splitting
- Minimal bundle size
- Fast Time to Interactive (TTI)

## Support

For questions or support, contact: hello@shobscreations.com

---

## Lovable Project Info

**URL**: https://lovable.dev/projects/c1dae820-921e-434f-952d-141177fb188a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c1dae820-921e-434f-952d-141177fb188a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c1dae820-921e-434f-952d-141177fb188a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

Built with ❤️ by Shobs Creations
