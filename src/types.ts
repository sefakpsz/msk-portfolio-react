export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  domain: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  medium: string;
  profile: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education;
  languages: string[];
}

export interface Stat {
  num: string;
  label: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
