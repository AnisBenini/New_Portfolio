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
        <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
          {project.file}
        </span>
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
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.04]">
        <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-[grain_1s_steps(2)_infinite]" />
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
      <section id="top" className="relative px-6 pt-12 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-[0.08] pointer-events-none">
          <h1 className="font-display text-[25vw] leading-[0.8] tracking-tighter uppercase whitespace-nowrap -translate-x-[3%]">
            Anis Benini
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 space-y-8">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted animate-[slide-up_0.8s_var(--ease-cinematic)_both]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for select projects — 2026
            </div>
            <h2 className="font-display text-6xl sm:text-7xl md:text-9xl uppercase leading-[0.85] tracking-tight animate-[slide-up_1s_var(--ease-cinematic)_both]">
              AI Engineer<br />
              <span className="text-primary">×</span> Visual<br />
              Engineer
            </h2>
            <p className="max-w-md text-base md:text-lg text-muted font-mono animate-[slide-up_1.2s_0.2s_var(--ease-cinematic)_both]">
              I build intelligent products and cinematic interfaces — where machine learning, web engineering and art direction collide.
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
            <div className="relative w-full aspect-[4/5] overflow-hidden outline outline-1 -outline-offset-1 outline-white/5 group">
              <img src={featuredProject.thumbnail} alt={`${featuredProject.title} by Anis Benini`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                <span>{featuredProject.file}</span>
                <span>@ANIS_BENINI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-border py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] gap-16 font-display text-4xl uppercase tracking-tight">
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
