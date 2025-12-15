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

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Deploy: `netlify deploy --prod`

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

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
