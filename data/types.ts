export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  cvUrl: string;
  seo: {
    title: string;
    description: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  organization: string;
  role: string;
  dates: string;
  location: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  dates: string;
  location: string;
  focus?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}
