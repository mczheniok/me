export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "build", label: "What I build" },
  { id: "stack", label: "Stack" },
  { id: "shorado", label: "Shorado" },
  { id: "lab", label: "Lab" },
  { id: "path", label: "Path" },
  { id: "contact", label: "Contact" },
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

export const STACK = [
  {
    title: "Core",
    list: [
      "JavaScript",
      "NodeJs",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frontend",
    list: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Zustand",
    ]
  },
  {
    title: "Backend",
    list: [
      "Node.js",
      "Fastify",
      "Express",
    ]
  },
  {
    title: "Data",
    list: [
      "Postgresql",
      "SQlite",
      "Redis"
    ]
  },
  {
    title: "Systems",
    list: [
      "REST APIs",
      "WebSockets",
      "WebAuthn",
      "PWA / Service Workers"
    ]
  },
  {
    title: "Exploring",
    list: [
      "React Native",
      "Kotlin",
      "Swift",
      "Go"
    ]
  },
  {
    title: "Services",
    list: [
      "Supabase",
      "Firebase",
      "Cloudflare",
      "Vercel Deploying" 
    ]
  },
  {
    title: "Ai",
    list: [
      "Vercel",
      "Together AI API",
      "Chatgpt API",
      "Chatgpt Moderation API"
    ]
  }
];

export const LANGUAGES = [
  {
    title: "ENG",
    lv: "+"
  },
  {
    title: "DEU",
    lv: "+-"
  },
  {
    title: "RUS",
    lv: "+"
  },
  {
    title: "UKR",
    lv: "++"
  }
];

export const SHORADO = [
  {
    t: "The Problem",
    d: "Existing Ukrainian platforms for selling used items let visibility be bought outright. The best listing isn't the one shown first — the one paid for is. His father's work as a realtor made that dynamic visible up close.",
  },
  {
    t: "The Idea",
    d: "Here, you don't buy first place. Ranking follows seller reputation and listing quality, not ad spend.",
  },
  {
    t: "The System",
    d: "A PostgreSQL schema built around items, users, and an append-only event log, with a progressive reach-stage model that governs how far a listing travels based on signal, not payment.",
  },
  {
    t: "The Interface",
    d: "A dark, amber-accented UI in Ukrainian, built around bento-style grids, WebAuthn passkey login, and a real-time chat system between buyers and sellers over WebSockets.",
  },
  {
    t: "The Engineering",
    d: "Fastify and Node.js on the backend, Cloudflare R2 and CDN for media, a Sharp-based image pipeline generating WebP variants with blur placeholders, and a tombstone pattern so deleted listings resolve to clean 410 responses.",
  },
];

export const SHORADO_STACK = [
  {
    t: "Onboarding & mobile UX",
    d: "Programmatic phone mockups with perspective-warped screenshots, collapsible navigation, and a keyboard-safe chat UI tuned for Android's viewport quirks.",
  },
  {
    t: "Cross-platform barcode scanning",
    d: "A BarcodeDetector-based scanner with a manual polyfill fallback for browsers that don't support the native API.",
  },
  {
    t: "Notification architecture",
    d: "Firebase Cloud Messaging paired with a Service Worker layer that separates caching logic from push handling.",
  },
  {
    t: "Edge caching",
    d: "Cloudflare CDN in front of Next.js ISR, bringing time-to-first-byte down to roughly 20ms — written up as a short technical article.",
  },
];

export const SHORADO_BUILD_STEPS = [
  { s: "Foundations", d: "HTML, CSS, JavaScript — understanding the web from the ground up." },
  { s: "Interfaces", d: "React, component architecture, responsive UI systems." },
  { s: "Applications", d: "Node.js, APIs, databases, authentication, WebSockets." },
  { s: "Systems", d: "Next.js, PostgreSQL, real-time architecture, storage, caching." },
  { s: "Products", d: "Shorado — shipping and operating a real product, solo." },
];

export const WHAT_I_BUILD = [
  {
    t: "Interfaces",
    d: "Component-driven UI built for clarity and speed, not decoration.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    span: "md:col-span-2",
    variant: "outline",
  },
  {
    t: "Applications",
    d: "Full products with auth, state, and real-time interaction.",
    tags: ["WebAuthn", "Zustand", "WebSocket"],
    span: "md:col-span-2",
    variant: "outline",
  },
  {
    t: "Products",
    d: "Taking all of the above and shipping it as something people can actually use — end to end. Shorado is the proof.",
    tags: ["Shorado", "Solo-built", "In production"],
    span: "md:col-span-2 md:row-span-2",
    variant: "fill",
  },
  {
    t: "Backends",
    d: "APIs and services designed around the data they actually need to move.",
    tags: ["Node.js", "Fastify", "Express"],
    span: "md:col-span-2",
    variant: "outline",
  },
  {
    t: "Data",
    d: "Schemas built for growth — event logs, indexes that hold under load.",
    tags: ["PostgreSQL", "Redis", "SQLite"],
    span: "",
    variant: "dark",
  },
  {
    t: "Real-time systems",
    d: "Sockets and push that stay in sync without polling.",
    tags: ["WebSocket", "FCM", "Service Workers"],
    span: "",
    variant: "dark",
  },
];
 