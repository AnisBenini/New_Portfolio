import { resolveWebsitePreview } from "./website-images";
import type { Website } from "./types";

export const websites: Website[] = [
  {
    id: "truthscope",
    title: "TruthScope",
    description:
      "AI-powered fact-checking platform that surfaces source-backed claims and helps users evaluate information credibility in real time.",
    technologies: ["React", "TypeScript", "AI", "Vercel"],
    liveUrl: "https://thetruthscope.vercel.app/",
    githubUrl: "https://github.com/AnisBenini/TruthScope",
    previewImage: resolveWebsitePreview("Truthscope"),
    year: 2025,
  },
  {
    id: "connect-with-me",
    title: "Connect With Me",
    description:
      "Personal link hub for social profiles, contact routes, and quick access to projects — a lightweight digital business card on the web.",
    technologies: ["HTML", "CSS", "GitHub Pages"],
    liveUrl: "https://anisbenini.github.io/conenctWithMe/",
    previewImage: resolveWebsitePreview("connectWithMe"),
    year: 2024,
  },
  {
    id: "kadour-location",
    title: "Kadour Location",
    description:
      "Location and booking experience for Kadour — a clean, responsive landing page built to showcase services and drive conversions.",
    technologies: ["React", "Netlify", "Responsive UI"],
    liveUrl: "https://kadour.netlify.app/",
    previewImage: resolveWebsitePreview("Location"),
    year: 2025,
  },
  {
    id: "the-auction-room",
    title: "The Auction Room",
    description:
      "Live auction platform with real-time bidding flows, catalog browsing, and a cinematic interface for high-value collectibles.",
    technologies: ["React", "TypeScript", "Real-time", "Web App"],
    previewImage: resolveWebsitePreview("TheAuctionRoom"),
    year: 2026,
    inProgress: true,
  },
  {
    id: "fine-tuning-qa",
    title: "Fine-Tuning QA Dataset",
    description:
      "NLP research project fine-tuning LLaMA 3.2 1B and GPT-2 Large on 140K Python QA pairs — comparing model accuracy, coherence, and inference efficiency with LoRA/QLoRA.",
    technologies: ["Python", "PyTorch", "LLaMA", "GPT-2", "LoRA"],
    githubUrl: "https://github.com/AnisBenini/FineTuning-QA_Dataset",
    year: 2025,
  },
  {
    id: "myticket",
    title: "MyTicket",
    description:
      "Full-stack ticket booking platform with user authentication, dynamic event listings, real-time booking, admin panel, and PDF e-tickets — built with PHP and MySQL.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/AnisBenini/MyTicket",
    previewImage: resolveWebsitePreview("MyTicket"),
    year: 2024,
  },
];

export function formatWebsiteIndex(index: number): string {
  return `W${String(index + 1).padStart(2, "0")}`;
}
