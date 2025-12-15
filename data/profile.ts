import { Profile, SocialLink } from './types';

export const profile: Profile = {
  name: 'Yassine BOUAYAD',
  title: "Master's Student in Business Intelligence & Big Data Analytics | Aspiring Data / BI / Analytics Engineer",
  subtitle: 'Passionate about transforming data into actionable insights. Currently pursuing a Master\'s in Business Intelligence & Big Data Analytics with a strong foundation in fullstack development, data visualization, and analytical thinking.',
  location: 'Rabat, Morocco',
  email: 'bouayadyassine110@gmail.com',
  cvUrl: '/cv.pdf', // Update this path to your actual CV file
  seo: {
    title: 'Yassine BOUAYAD - Data & BI Analytics Engineer',
    description: 'Master\'s student in Business Intelligence & Big Data Analytics with expertise in data analysis, web development, and data visualization. Open to BI/Analytics internships and projects.',
  },
};

export const socials: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/BOUAYADYassine110',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bouayad-yassine/',
    icon: 'linkedin',
  },
];

export const about = {
  description: `Currently pursuing a Master's in Business Intelligence & Big Data Analytics (2024–2026), I bring a unique blend of data-focused analytical skills and fullstack development experience. With a background in Information Systems Engineering, I'm passionate about leveraging data to drive decision-making and create impactful solutions. My interests span data analytics, semantic web technologies, NLP, multi-agent systems, and web mapping.`,
  strengths: [
    'Data / BI-oriented mindset with strong analytical thinking',
    'Fullstack web development experience (React, Django)',
    'Experience with 2D/3D web mapping and data visualization',
    'Strong foundations in Python, SQL, and statistical analysis',
  ],
};

export const contact = {
  heading: "Let's Work Together",
  description: 'I\'m actively seeking opportunities in Data Engineering, Business Intelligence, and Analytics. Whether it\'s an internship, project collaboration, or full-time role, I\'d love to connect and explore how I can contribute to your team.',
};
