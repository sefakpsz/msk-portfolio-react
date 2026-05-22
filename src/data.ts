import type { PortfolioData } from "./types";

export const data: PortfolioData = {
  name: "Muhammet Sefa Kapısız",
  title: "Backend Engineer & Team Lead",
  email: "m.sefa06@hotmail.com",
  phone: "+90 555 881 1783",
  location: "Istanbul, Turkey",
  github: "https://github.com/sefakpsz",
  linkedin: "https://linkedin.com/in/sefakpsz",
  medium: "https://medium.com/@sefakpsz",
  profile:
    "Results-driven Backend Engineer and Team Lead with 3+ years of professional experience designing and delivering scalable, cloud-native systems in fintech and SaaS environments. Proven expertise in C#, .NET, and Node.js, with hands-on production experience across PostgreSQL, MongoDB, Redis, and RabbitMQ. Passionate about clean architecture, system performance, and delivering reliable software at scale.",
  skills: [
    { category: "Languages", items: ["C#", "TypeScript", "JavaScript"] },
    {
      category: "Frameworks",
      items: [
        ".NET",
        "Entity Framework",
        "ASP.NET Core",
        "Node.js",
        "Express.js",
        "Fastify.js",
        "MediatR",
        "Autofac",
        "Ocelot",
        "Mongoose",
        "Prisma",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MSSQL", "MongoDB", "Redis", "RabbitMQ"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (S3, EC2, RDS, SES)", "Docker", "Nginx", "GitHub Actions", "Hetzner", "Ubuntu"],
    },
    {
      category: "Real-time & APIs",
      items: ["gRPC", "WebSockets", "SignalR", "Socket.IO", "REST API"],
    },
    {
      category: "Practices",
      items: [
        "Microservices",
        "Multi-tenant SaaS",
        "Clean Architecture",
        "Unit Testing (XUnit, FakeItEasy)",
        "Playwright",
        "CI/CD",
      ],
    },
  ],
  experience: [
    {
      role: "Backend Team Lead & DevOps Engineer",
      company: "Reseed Software",
      domain: "Customs",
      period: "Dec 2023 – Apr 2026",
      location: "Belgium (Remote)",
      highlights: [
        "Led backend and DevOps operations for a multi-tenant SaaS customs platform",
        "Architected migration from Node.js/MongoDB to .NET/PostgreSQL for long-term scalability",
        "Implemented RabbitMQ queue system to handle heavy background processing",
        "Built real-time communication layer: migrated Socket.IO to SignalR post-.NET migration",
        "Configured full CI/CD pipeline with GitHub Actions, Docker, and Nginx on Ubuntu/Hetzner",
        "Migrated infrastructure from AWS EC2/S3 to Hetzner for cost efficiency",
        "Developed image processing service using Magick.NET and SkiaSharp",
        "Implemented secure refresh-token system and Redis caching across tenants",
      ],
      stack: [".NET", "PostgreSQL", "RabbitMQ", "SignalR", "Docker", "Hetzner", "Redis", "Autofac"],
    },
    {
      role: "Backend & DevOps Engineer",
      company: "Bahtrade",
      domain: "Finance",
      period: "Aug 2023 – Feb 2024",
      location: "Romania (Remote)",
      highlights: [
        "Sole DevOps engineer managing ~20 AWS machines across multiple projects",
        "Configured Ubuntu, Nginx, Docker, GitHub Actions, EC2, RDS, S3, SES end-to-end",
        "Built large-scale Socket.IO system bridging main platform, frontend, and support services",
        "Liaised with AWS Support for service limit increases and SES production access",
      ],
      stack: ["Node.js", "Socket.IO", "AWS", "Docker", "Nginx", "GitHub Actions"],
    },
    {
      role: "Backend Engineer",
      company: "Prime Tech",
      domain: "Finance",
      period: "Aug 2022 – Jul 2024",
      location: "Istanbul, Turkey",
      highlights: [
        "Separated monolith news platform into clean-architecture admin and microservice client apps",
        "Implemented Redis Pub/Sub for cross-service data synchronization",
        "Enabled inter-service communication via MediatR and gRPC",
        "Built API gateway access layer using Ocelot",
        "Integrated SignalR for real-time frontend updates",
        "Developed CRM system and live support with Socket.IO",
        "Implemented blockchain infrastructure for BTC, NEAR, DOGE with Node.js",
      ],
      stack: [".NET", "PostgreSQL", "MSSQL", "Redis", "gRPC", "MediatR", "Ocelot", "MongoDB", "SignalR"],
    },
    {
      role: "Backend & DevOps Engineer",
      company: "Wordigo",
      domain: "Startup",
      period: "Jun 2023 – Oct 2023",
      location: "Istanbul, Turkey",
      highlights: [
        "Built backend with Fastify.js in a tRPC mono-repo setup",
        "Managed data layer with Prisma ORM on PostgreSQL",
        "Integrated Google Cloud Storage for image uploads",
      ],
      stack: ["Node.js", "Fastify.js", "Prisma", "PostgreSQL", "Google Cloud Storage"],
    },
    {
      role: "Backend Intern",
      company: "Naryex",
      domain: "Finance",
      period: "Jan 2022 – Aug 2022",
      location: "Istanbul, Turkey",
      highlights: [
        "Completed .NET Web API development coursework",
        "Delivered a Stock Management project for the accounting department",
        "Gained hands-on experience with Code First migrations in Entity Framework",
      ],
      stack: [".NET", "Entity Framework", "MSSQL"],
    },
  ],
  education: {
    degree: "Computer Engineering",
    school: "Istanbul Aydın University",
    period: "Oct 2020 – Jun 2024",
    location: "Istanbul, Turkey",
  },
  languages: ["Turkish (Native)", "English (Fluent)"],
};

export const NAV_ITEMS = ["About", "Skills", "Experience", "Education", "Contact"] as const;
export type NavItem = (typeof NAV_ITEMS)[number];

export const STATS: Array<{ num: string; label: string }> = [
  { num: "3+", label: "Years experience" },
  { num: "5", label: "Companies" },
  { num: "28+", label: "Technologies" },
  { num: "2", label: "Languages" },
];
