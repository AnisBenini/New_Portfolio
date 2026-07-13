import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ImageLightbox } from "@/components/image-lightbox";
import { ResumeModal } from "@/components/resume-modal";
import englishResume from "@/work/resume/englishResume.pdf";
import frenchResume from "@/work/resume/frenchResume.pdf";
import {
  archiveProjects,
  featuredProject,
  formatProjectIndex,
  formatWebsiteIndex,
  getArchiveYearRange,
  websites,
} from "@/work";
import type { Project } from "@/work";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: featuredProject.thumbnail },
      { name: "twitter:image", content: featuredProject.thumbnail },
    ],
  }),
});

const stack = [
  "Python", "HTML / CSS", "Canva", "FastAPI", "JavaScript",
  "Photoshop", "PostgreSQL", "TypeScript", "After Effects", "LangChain",
  "React", "Illustrator", "PyTorch", "Figma", "Blender",
  "Transformers", "UI/UX", "And more"
];


const education = [
  {
    role: "Master's Degree in Intelligent Computer Systems",
    company: "University of Mouloud Mammeri, Tizi Ouzou, Algeria",
    period: "2023 — 2025",
    description:
      "Specialised in AI, machine learning, and intelligent system design.",
    details: [
      "Master Thesis: Automatic Detection of Fake News Through Semantic Analysis of Social Media Texts.",
    ],
  },
  {
    role: "Bachelor's Degree in Computer Science",
    company: "University of Mouloud Mammeri, Tizi Ouzou, Algeria",
    period: "2020 — 2023",
    description:
      "Core foundations in algorithms, data structures, software engineering, and databases.",
    details: [],
  },
];



function ContactButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("anisbenini@proton.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href="mailto:anisbenini@proton.me"
        onClick={handleCopy}
        className="group relative inline-flex items-center gap-4 bg-white text-black font-mono text-xs md:text-sm uppercase tracking-widest px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 border border-white"
      >
        <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
          {copied ? "Copied to Clipboard!" : "anisbenini@proton.me"}
        </span>
        <span className="relative z-10 text-primary font-bold transition-transform duration-300 group-hover:translate-x-1">
          {copied ? "✓" : "↗"}
        </span>
        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      </a>
      <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 animate-pulse">
        {copied ? "Clicking copies the address" : "Click to copy email address"}
      </span>
    </div>
  );
}






type LightboxState = {
  images: string[];
  title: string;
  scroll?: boolean;
} | null;

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={`group cursor-crosshair space-y-6 text-left w-full ${index % 2 === 1 ? "md:mt-32" : ""}`}
    >
      <div className="relative overflow-hidden bg-secondary">
        {project.cardStack && project.images.length > 1 ? (
          <div className="flex flex-col aspect-[4/5] overflow-hidden">
            {project.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} ${i + 1}`}
                loading="lazy"
                className="w-full flex-1 object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
            ))}
          </div>
        ) : project.cardScroll && project.images.length > 1 ? (
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory p-4 aspect-[4/5] items-center">
            {project.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} ${i + 1}`}
                loading="lazy"
                className="snap-center shrink-0 h-[70%] max-w-[75%] object-contain mx-auto transition-all duration-700 group-hover:scale-[1.02]"
              />
            ))}
          </div>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
          />
        )}
        <div className="absolute inset-0 border border-white/0 group-hover:border-primary/30 transition-colors pointer-events-none" />

        {project.cardScroll && project.images.length > 1 && (
          <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            ← scroll →
          </span>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-display text-2xl md:text-3xl uppercase group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-muted font-mono uppercase mt-1">{project.category}</p>
        </div>
        <span className="font-mono text-xs text-muted opacity-60">{formatProjectIndex(index)}</span>
      </div>
    </button>
  );
}

function Index() {
  const [time, setTime] = useState("");
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Africa/Algiers" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const openProject = (project: Project) => {
    setLightbox({
      images: project.images,
      title: project.title,
      scroll: project.lightboxScroll,
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Grain overlay — inline SVG so it works in all browsers */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" style={{ opacity: 0.035 }}>
        <svg style={{ position: 'absolute', inset: '-200%', width: '400%', height: '400%', animation: 'grain 1s steps(2) infinite' }} xmlns="http://www.w3.org/2000/svg">
          <filter id="grain-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)" opacity="1" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-8 mix-blend-difference">
        <a href="#top" className="font-display text-2xl tracking-tighter uppercase animate-[slide-up_0.8s_var(--ease-cinematic)_both] text-foreground">AB</a>
        <div className="hidden md:flex gap-12 text-[10px] font-mono tracking-widest uppercase text-muted animate-[slide-up_0.8s_0.1s_var(--ease-cinematic)_both]">
          <a href="#work" className="hover:text-primary transition-colors hover-underline-expand">
            Selected_Works
          </a>
          <a
            href="#websites"
            className="hover:text-primary transition-colors hover-underline-expand"
          >
            Websites
          </a>
          <a href="#lab" className="hover:text-primary transition-colors hover-underline-expand">
            Laboratory
          </a>
          <a
            href="#experience"
            className="hover:text-primary transition-colors hover-underline-expand"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition-colors hover-underline-expand"
          >
            Contact
          </a>
        </div>
        <div className="hidden md:block font-mono text-[10px] tracking-widest uppercase text-muted">
          ALG / {time}
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative px-6 pt-10 pb-0 overflow-hidden">

        {/* ── Animated background ── */}
        <style>{`
          @keyframes scan-beam {
            0%   { top: -2px; opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes float-a {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33%       { transform: translateY(-14px) translateX(4px); }
            66%       { transform: translateY(-6px) translateX(-4px); }
          }
          @keyframes float-b {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-10px); }
          }
          @keyframes hero-glow {
            0%, 100% { opacity: 0.06; }
            50%       { opacity: 0.14; }
          }
          @keyframes ring-pulse {
            0%   { transform: scale(0.8); opacity: 0.4; }
            100% { transform: scale(2.2); opacity: 0; }
          }
          @keyframes blink-cursor {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0; }
          }
          @keyframes dash-move {
            from { stroke-dashoffset: 200; }
            to   { stroke-dashoffset: 0; }
          }
          .hero-scan { position: absolute; left: 0; right: 0; height: 1px; animation: scan-beam 7s linear infinite; background: linear-gradient(90deg, transparent, rgba(235,70,70,0.75), transparent); }
          .hero-float-a { animation: float-a 9s ease-in-out infinite; }
          .hero-float-b { animation: float-b 12s ease-in-out infinite; }
          .hero-glow-pulse { animation: hero-glow 4s ease-in-out infinite; }
          .hero-ring { animation: ring-pulse 3s ease-out infinite; }
          .hero-ring-2 { animation: ring-pulse 3s ease-out infinite; animation-delay: 1s; }
          .hero-ring-3 { animation: ring-pulse 3s ease-out infinite; animation-delay: 2s; }
          .blink { animation: blink-cursor 1s step-end infinite; }
          .dash-anim { animation: dash-move 4s linear infinite; stroke-dasharray: 8 6; }
        `}</style>
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

          {/* Ghost watermark — SVG text renders identically in Chrome and Firefox */}
          <div className="absolute top-0 left-0 w-full h-[60%] select-none pointer-events-none" style={{ opacity: 0.05 }}>
            <svg width="100%" height="100%" viewBox="0 0 1400 300" preserveAspectRatio="xMinYMid meet">
              <text x="0" y="60%" className="font-display uppercase" fill="white" style={{ fontSize: "23dvh", letterSpacing: '-0.06em' }}>
                Anis Benini
              </text>
            </svg>
          </div>

          {/* Grid */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.09 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          {/* Technical Edge Coordinates & Ticks */}
          <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', height: '20px', display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '8px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }} className="select-none">
            <span>[ SYS_LOC: 36.7118° N, 4.0459° E ]</span>
            <span>SCALE_FACTOR: 1.0000</span>
            <span>NAV_SYS_READY</span>
          </div>

          {/* Decorative Crosshairs & Radar Arcs */}
          <svg className="absolute top-[15%] left-[45%] w-[200px] h-[200px]" style={{ opacity: 0.08 }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(235,70,70,0.8)" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.3" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.3" />
          </svg>

          <svg className="absolute top-[60%] left-[8%] w-[120px] h-[120px]" style={{ opacity: 0.06 }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.4" />
            <path d="M 50 5 A 45 45 0 0 1 95 50" fill="none" stroke="rgba(235,70,70,0.8)" strokeWidth="1" />
            <line x1="50" y1="50" x2="85" y2="15" stroke="rgba(235,70,70,0.8)" strokeWidth="0.6" />
          </svg>

          {/* Scanning beam */}
          <div className="hero-scan" />

          {/* Diagonal accent lines */}
          <svg className="absolute top-0 left-0 w-[55%] h-[65%]" style={{ opacity: 0.1 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" preserveAspectRatio="none">
            <line x1="0" y1="400" x2="500" y2="0" stroke="white" strokeWidth="1" />
            <line x1="0" y1="300" x2="380" y2="0" stroke="white" strokeWidth="0.5" opacity="0.6" />
            <line x1="0" y1="200" x2="260" y2="0" stroke="white" strokeWidth="0.3" opacity="0.4" />
          </svg>

          {/* Circuit-board traces — animated dashes */}
          <svg className="absolute top-0 left-0 w-[50%] h-full" style={{ opacity: 0.13 }} xmlns="http://www.w3.org/2000/svg">
            <polyline className="dash-anim" points="30,80 30,160 120,160 120,240 200,240" fill="none" stroke="rgba(235,70,70,0.8)" strokeWidth="1" />
            <circle cx="200" cy="240" r="3" fill="rgba(235,70,70,0.8)" />
            <polyline className="dash-anim" points="60,40 60,100 180,100" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" style={{ animationDelay: '1.5s' }} />
            <circle cx="180" cy="100" r="2" fill="rgba(255,255,255,0.5)" />
            <polyline className="dash-anim" points="10,300 80,300 80,360 150,360" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" style={{ animationDelay: '0.8s' }} />
            <polyline className="dash-anim" points="200,40 200,120 300,120 300,200" fill="none" stroke="rgba(235,70,70,0.4)" strokeWidth="0.8" style={{ animationDelay: '2.2s' }} />
          </svg>


          {/* Pulsing ring origin point */}
          <div style={{ position: 'absolute', top: '38%', left: '18%' }}>
            <div className="hero-ring" style={{ position: 'absolute', top: -20, left: -20, width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(235,70,70,0.6)' }} />
            <div className="hero-ring-2" style={{ position: 'absolute', top: -20, left: -20, width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(235,70,70,0.6)' }} />
            <div className="hero-ring-3" style={{ position: 'absolute', top: -20, left: -20, width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(235,70,70,0.6)' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(235,70,70,0.9)' }} />
          </div>

          {/* Corner bracket — top left */}
          <div style={{ position: 'absolute', top: '6%', left: '3%', width: 48, height: 48, borderLeft: '1px solid rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.2)' }} />
          <div style={{ position: 'absolute', top: '6%', left: '3%', width: 28, height: 28, borderLeft: '1px solid rgba(235,70,70,0.3)', borderTop: '1px solid rgba(235,70,70,0.3)', marginTop: 10, marginLeft: 10 }} />

          {/* Bottom-right corner bracket */}
          <div style={{ position: 'absolute', bottom: '12%', right: '45%', width: 36, height: 36, borderRight: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)' }} />

          {/* Data glyphs */}
          <div className="hero-float-a" style={{ position: 'absolute', top: '9%', left: '4%', fontFamily: 'monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.28)', lineHeight: 1.9 }}>
            <div>AI_ENGINEER.TSX</div>
            <div style={{ color: 'rgba(235,70,70,0.6)' }}>▸ model.train()</div>
            <div>▸ design.render()</div>
            <div style={{ color: 'rgba(235,70,70,0.6)' }}>▸ build.ship()<span className="blink">_</span></div>
          </div>

          <div className="hero-float-b" style={{ position: 'absolute', top: '24%', left: '28%', fontFamily: 'monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', lineHeight: 1.9 }}>
            <div>STATUS: <span style={{ color: 'rgba(235,70,70,0.7)' }}>AVAILABLE</span></div>
            <div>LOCATION: ALGERIA</div>
            <div>YEAR: 2026</div>
          </div>

          {/* Extra data cluster bottom-left */}
          <div className="hero-float-a" style={{ position: 'absolute', bottom: '20%', left: '5%', fontFamily: 'monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.15)', lineHeight: 2, animationDelay: '3s' }}>
            <div>PROJECTS: <span style={{ color: 'rgba(235,70,70,0.5)' }}>18+</span></div>
            <div>STACK: <span style={{ color: 'rgba(235,70,70,0.5)' }}>FULL</span></div>
          </div>

          {/* Radial red glow */}
          <div className="hero-glow-pulse" style={{ position: 'absolute', top: 0, left: 0, width: '45%', height: '70%', background: 'radial-gradient(ellipse at 25% 35%, rgba(235,70,70,0.08) 0%, transparent 70%)' }} />

          {/* Floating dots */}
          {([{ x: '6%', y: '56%', d: '0s' }, { x: '14%', y: '67%', d: '1.2s' }, { x: '9%', y: '76%', d: '2.1s' }, { x: '22%', y: '61%', d: '0.6s' }, { x: '33%', y: '72%', d: '1.8s' }, { x: '18%', y: '82%', d: '0.9s' }, { x: '4%', y: '45%', d: '2.5s' }, { x: '38%', y: '55%', d: '1.4s' }] as const).map((dot, i) => (
            <div key={i} style={{ position: 'absolute', left: dot.x, top: dot.y, width: i % 3 === 0 ? 5 : 3, height: i % 3 === 0 ? 5 : 3, borderRadius: '50%', background: i % 3 === 0 ? 'rgba(235,70,70,0.55)' : 'rgba(255,255,255,0.25)', animationDelay: dot.d }} className="hero-float-b" />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted animate-[slide-up_0.8s_var(--ease-cinematic)_both]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for select projects — 2026
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-9xl uppercase leading-[0.88] tracking-tight animate-[slide-up_1s_var(--ease-cinematic)_both]">
              AI Engineer
              <br />
              <span className="text-primary">×</span>{" "}
              <span className="inline-block scale-x-110 origin-left">
                Designer
              </span>

            </h2>

            <p className="max-w-md text-sm md:text-base text-muted font-mono animate-[slide-up_1.2s_0.2s_var(--ease-cinematic)_both]">
              Building intelligent products and digital experiences through code, design, and AI.
            </p>
            <div className="flex gap-4 animate-[slide-up_1.4s_0.3s_var(--ease-cinematic)_both]">
              <a href="#work" className="group inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-widest hover:bg-primary hover:border-primary transition-colors">
                View Archive
                <span className="group-hover:translate-x-1 transition-transform">↓</span>
              </a>
              <a href="https://github.com/AnisBenini/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-muted hover:text-foreground transition-colors">
                Github
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 animate-[shutter-reveal_1.5s_0.3s_var(--ease-cinematic)_both]">
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden outline outline-1 -outline-offset-1 outline-white/5 group">
              <img src={featuredProject.thumbnail} alt={`${featuredProject.title} by Anis Benini`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                <span>@ANIS_BENINI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee — pulled into the hero so it's always in view */}
        <div className="relative z-10 mt-8 -mx-6 border-t border-border py-5 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] gap-16 font-display text-3xl md:text-4xl uppercase tracking-tight">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16 shrink-0">
                <span>AI Engineering</span><span className="text-primary">✦</span>
                <span>Web Development</span><span className="text-primary">✦</span>
                <span>Art Direction</span><span className="text-primary">✦</span>
                <span>Poster Design</span><span className="text-primary">✦</span>
                <span>Brand Identity</span><span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work archive */}
      <section id="work" className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter">Archive_01</h3>
            <span className="font-mono text-[10px] uppercase text-muted">Scroll to explore [{getArchiveYearRange()}]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {archiveProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={openProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Websites / Product builds */}
      <section id="websites" className="px-6 py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter">Live_Sites</h3>
            <span className="font-mono text-[10px] uppercase text-muted">Web builds & shipped products</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websites.map((website, i) => (
              <div
                key={website.id}
                className="group relative block border border-border overflow-hidden hover:border-primary transition-all duration-300"
              >
                {website.previewImage && (
                  <>
                    <img
                      src={website.previewImage}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-[0.18] group-hover:opacity-[0.28] transition-opacity duration-500 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />
                  </>
                )}
                <div className="relative z-10 p-8 group-hover:bg-secondary/20 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">{formatWebsiteIndex(i)}</span>
                    {website.inProgress ? (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">In Progress</span>
                    ) : website.liveUrl ? (
                      <a href={website.liveUrl} target="_blank" rel="noreferrer" className="font-mono text-xs text-muted group-hover:text-primary transition-colors">
                        ↗
                      </a>
                    ) : null}
                  </div>
                  {website.liveUrl ? (
                    <a href={website.liveUrl} target="_blank" rel="noreferrer">
                      <h4 className="font-display text-2xl md:text-3xl uppercase mb-4 group-hover:text-primary transition-colors">
                        {website.title}
                      </h4>
                    </a>
                  ) : (
                    <h4 className="font-display text-2xl md:text-3xl uppercase mb-4 group-hover:text-primary transition-colors">
                      {website.title}
                    </h4>
                  )}
                  <p className="text-muted font-mono text-sm leading-relaxed mb-8">
                    {website.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {website.technologies.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] uppercase tracking-widest border border-border px-3 py-1 text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest">
                    {website.liveUrl && (
                      <a href={website.liveUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
                        Live ↗
                      </a>
                    )}
                    {website.githubUrl && (
                      <a href={website.githubUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
                        Github ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory / About */}
      <section id="lab" className="px-6 py-32 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">[ Laboratory ]</span>
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mt-4">The<br />Workbench</h3>
          </div>
          <div className="md:col-span-8 space-y-12">
            <p className="text-2xl md:text-3xl font-body leading-snug">
              I split my time between shipping <span className="text-primary">AI systems</span> — retrieval, agents, model pipelines — and designing <span className="text-primary">visual identities</span> that actually feel like something. Code and composition, the same craft.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {stack.map((s) => (
                <div key={s} className="flex items-center gap-3 font-mono text-sm border-b border-border pb-2">
                  <span className="text-primary text-xs">●</span>
                  <span className="uppercase tracking-wider">{s}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="font-display text-5xl md:text-6xl">30<span className="text-primary">+</span></div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2">Projects Shipped</p>
              </div>
              <div>
                <div className="font-display text-5xl md:text-6xl">5<span className="text-primary">Y</span></div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2">Building Systems</p>
              </div>
              <div>
                <div className="font-display text-5xl md:text-6xl">∞</div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2">Ideas / Second</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education */}
      <section id="experience" className="px-6 py-32 border-t border-border reveal-on-scroll">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              [ Academic Background ]
            </span>
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mt-4">
              Education
            </h3>
          </div>
          <div className="md:col-span-8 space-y-16">
            {education.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l border-border hover:border-primary transition-colors duration-500 group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-500" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-display uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <p className="font-mono text-xs text-muted uppercase tracking-wider mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted border border-border px-3 py-1 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted font-mono text-sm leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
                {exp.details && (
                  <ul className="mt-4 space-y-2 pl-4 list-disc list-inside font-mono text-xs text-muted/80 leading-relaxed max-w-2xl">
                    {exp.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="hover:text-foreground transition-colors duration-300"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact CTA */}
      <footer
        id="contact"
        className="relative px-6 py-32 bg-primary text-white overflow-hidden reveal-on-scroll"
      >
        <div className="absolute inset-0 footer-grid-bg opacity-45 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] mb-8 opacity-80">
            [ Let's build something loud ]
          </span>
          <h2 className="font-display text-7xl sm:text-9xl md:text-[14rem] uppercase leading-[0.85] mb-12">
            Let's
            <br />
            Work
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
            <ContactButton />
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-mono text-xs uppercase tracking-widest">
            <a
              href="https://github.com/AnisBenini/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-8 hover:text-black transition-colors"
            >
              Github ↗
            </a>
            <a
              href="https://instagram.com/anis_benini"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-8 hover:text-black transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="mailto:anisbenini@proton.me"
              className="underline underline-offset-8 hover:text-black transition-colors"
            >
              Email ↗
            </a>
            <button
              type="button"
              onClick={() => setShowResume(true)}
              className="underline underline-offset-8 hover:text-black transition-colors cursor-pointer font-mono text-xs uppercase tracking-widest"
            >
              Resume ↗
            </button>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto mt-24 pt-8 border-t border-white/20 flex justify-between font-mono text-[10px] uppercase tracking-widest opacity-70">
          <span>© 2026 Anis Benini</span>
          <span>Algiers — 36.75° N</span>
        </div>
      </footer>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          title={lightbox.title}
          scroll={lightbox.scroll}
          onClose={() => setLightbox(null)}
        />
      )}

      {showResume && (
        <ResumeModal
          englishUrl={englishResume}
          frenchUrl={frenchResume}
          onClose={() => setShowResume(false)}
        />
      )}
    </main>
  );
}
