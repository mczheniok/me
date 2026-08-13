import { BookUser, FolderKanban, Home, Info,  } from "lucide-react";

export const HEADER_LINKS = [
    {
        title: "Main",
        href: "/",
        icon: Home
    },
    {
        title: "About",
        href: "/about",
        icon: Info
    },
    {
        title: "Projects",
        href: "/projects",
        icon: FolderKanban
    },
    {
        title: "Contact",
        href: "/contact",
        icon: BookUser
    }
];

export const HERO_LINKS = [
    {
        title: "about.md",
        href: "/about"
    },
    {
        title: "skills.json",
        href: "/skills"  
    },
    {
        title: "shorado.md",
        href: "/projects/shorado"
    }
]; 

export const CATEGORY_SKILL_STYLE = {
  frontend: "bg-[#85B7EB] text-[#0E0E0E]",
  backend: "bg-[#C0DD97] text-[#0E0E0E]",
  infra: "bg-[#F5A623] text-[#0E0E0E]",
};

export const STACK = {
  "frontend": [
    "Next.js (App Router)",
    "React",
    "WebSocket Client",
    "Image Pipeline (Sharp, blur placeholders)",
    "Service Worker Caching",
    "BarcodeDetector API",
    "Custom Animation System (Material 3 easing)",
    "Mobile-first Responsive Design"
  ],
  "backend": [
    "Fastify (service/repository pattern)",
    "PostgreSQL (JSONB, append-only tables)",
    "JWT Auth + Refresh Rotation",
    "Google OAuth",
    "WebAuthn / Passkeys",
    "WebSocket Server",
    "Firebase Cloud Messaging"
  ],
  "infra": [
    "Cloudflare R2",
    "Cloudflare Cache Rules",
    "Schema.org JSON-LD / SEO",
    "AI Crawler Optimization",
    "CDN Architecture"
  ]
}