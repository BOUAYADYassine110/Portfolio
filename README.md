# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile-first approach)
- ♿ Accessible (semantic HTML, ARIA labels)
- 🎨 Smooth animations and transitions
- 🎯 Component-based architecture
- 📊 Data-driven content (easy to update)
- 🚀 Performance optimized
- 🔍 SEO friendly

## Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Intersection Observer API

## Project Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── About.tsx
│   ├── Button.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── IconLink.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── SectionWrapper.tsx
│   ├── Skills.tsx
│   └── Tag.tsx
├── data/                  # Content data files
│   ├── certifications.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── types.ts
└── public/               # Static assets

```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

Edit the data files in the `data/` folder:

- **data/profile.ts** - Name, title, email, location, about section
- **data/skills.ts** - Skills organized by category
- **data/experience.ts** - Work experience and achievements
- **data/projects.ts** - Project portfolio with descriptions
- **data/education.ts** - Educational background
- **data/certifications.ts** - Certifications and courses

### Update CV Link

In `data/profile.ts`, update the `cvUrl` field:

```typescript
cvUrl: '/cv.pdf', // Place your CV in the public folder
```

### Change Color Theme

Edit `tailwind.config.ts` to customize the primary color palette:

```typescript
colors: {
  primary: {
    // Update these color values
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  },
}
```

### Add/Remove Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/Navbar.tsx`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Pre-Deployment Checklist

- [ ] Update all personal information in `data/` files
- [ ] Add your CV to `public/cv.pdf`
- [ ] Test the build locally: `npm run build && npm start`
- [ ] Commit all changes to Git
- [ ] Push to GitHub repository

### Deploy to Vercel (Recommended - Free)

**Option 1: Via Vercel Dashboard**
1. Create a GitHub repository and push your code
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New" → "Project"
4. Import your portfolio repository
5. Vercel auto-detects Next.js settings (no configuration needed)
6. Click "Deploy"
7. Your site will be live at `your-project.vercel.app`

**Option 2: Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Custom Domain (Optional):**
- Go to Project Settings → Domains
- Add your custom domain and follow DNS instructions

### Deploy to Netlify (Free)

**Option 1: Via Netlify Dashboard**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

**Option 2: Via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```

### Deploy to GitHub Pages (Free)

1. Install the deployment package:
```bash
npm install --save-dev gh-pages
```

2. Update `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  basePath: '/your-repo-name',
  images: { unoptimized: true }
}
```

3. Add to `package.json`:
```json
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings (use `gh-pages` branch)

### Deploy to Cloudflare Pages (Free)

1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
6. Click "Save and Deploy"

### Deploy to Railway (Free Tier Available)

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Next.js and deploys
5. Your site will be live with a generated URL

### Troubleshooting Deployment

**Build fails:**
- Run `npm run build` locally to check for errors
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility (18+)

**Images not loading:**
- Verify images are in the `public/` folder
- Check image paths start with `/` (e.g., `/cv.pdf`)

**Environment variables:**
- Add them in your platform's dashboard (not in code)
- Redeploy after adding variables

## Contact Form Integration

The contact form currently logs to console. To connect it to an email service:

1. Choose a service (EmailJS, SendGrid, Resend, etc.)
2. Update the `handleSubmit` function in `components/Contact.tsx`
3. Add your API keys to environment variables

Example with EmailJS:

```typescript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (validateForm()) {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
  }
};
```

## Performance Tips

- Place your CV and images in the `public/` folder
- Optimize images before uploading (use WebP format)
- Keep animations subtle for better performance
- Test on mobile devices regularly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Author

**Yassine BOUAYAD**
- Email: bouayadyassine110@gmail.com
- GitHub: [@BOUAYADYassine110](https://github.com/BOUAYADYassine110)
- LinkedIn: [bouayad-yassine](https://www.linkedin.com/in/bouayad-yassine/)
