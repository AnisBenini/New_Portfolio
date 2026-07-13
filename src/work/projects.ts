import { findImageByName, resolveImage } from "./images";
import type { Project } from "./types";

const instagram = "design/instagram design post";
const carteVisite = "design/carte visite + menu";
const mosquePoster = "design/mosque-design-poster";

export const archiveProjects: Project[] = [
  {
    id: "dream-engine",
    title: "Dream Engine",
    category: "3D Composition / Editorial",
    thumbnail: resolveImage(`${instagram}/DREAM (1).webp`),
    images: [resolveImage(`${instagram}/DREAM (1).webp`)],
    file: "DREAM_(1).webp",
    year: 2025,
  },
  {
    id: "eid-mubarak",
    title: "Eid Mubarak",
    category: "Poster / Cultural Identity",
    thumbnail: resolveImage(`${instagram}/AID ADHA POST.webp`),
    images: [resolveImage(`${instagram}/AID ADHA POST.webp`)],
    file: "AID_ADHA_POST.webp",
    year: 2025,
  },
  {
    id: "the-full-squad",
    title: "The Full Squad",
    category: "Sports / Editorial",
    thumbnail: resolveImage(`${instagram}/The full SQUAD.webp`),
    images: [resolveImage(`${instagram}/The full SQUAD.webp`)],
    file: "The_Full_Squad.webp",
    featured: true,
    year: 2025,
  },
  {
    id: "match-day",
    title: "Match Day",
    category: "Sports / Editorial",
    thumbnail: resolveImage(`${instagram}/Algeria Vs switzeland.webp`),
    images: [resolveImage(`${instagram}/Algeria Vs switzeland.webp`)],
    file: "Algeria_Vs_Switzerland.webp",
    year: 2025,
  },
  {
    id: "heavy-head",
    title: "Heavy Head",
    category: "Conceptual / Self Portrait",
    thumbnail: resolveImage(`${instagram}/me.webp`),
    images: [resolveImage(`${instagram}/me.webp`)],
    file: "Heavy_On_My_Mind.webp",
    year: 2025,
  },

  {
    id: "algeria-first-match",
    title: "Algeria First Match",
    category: "Sports / Editorial",
    thumbnail: resolveImage(`${instagram}/algeria first match.webp`),
    images: [resolveImage(`${instagram}/algeria first match.webp`)],
    file: "Algeria_First_Match.webp",
    year: 2025,
  },
  {
    id: "outside-the-box",
    title: "Outside the Box",
    category: "Creative / Social",
    thumbnail: resolveImage(`${instagram}/OUTSIDE BOX (3).webp`),
    images: [resolveImage(`${instagram}/OUTSIDE BOX (3).webp`)],
    file: "Outside_The_Box.webp",
    year: 2025,
  },
  {
    id: "IZEM",
    title: "Energy-drink-IZEM",
    category: "Social / Energy Drink / Branding",
    thumbnail: resolveImage(`${instagram}/lastOne.webp`),
    images: [resolveImage(`${instagram}/lastOne.webp`)],
    file: "lastOne.webp",
    year: 2025,
  },
  {
    id: "ai-pill",
    title: "AI Pill",
    category: "Social / Campaign Series",
    thumbnail: resolveImage(`${instagram}/AI_PILL/1.webp`),
    images: [
      resolveImage(`${instagram}/AI_PILL/1.webp`),
      resolveImage(`${instagram}/AI_PILL/2.webp`),
      resolveImage(`${instagram}/AI_PILL/3.webp`),
      resolveImage(`${instagram}/AI_PILL/4.webp`),
    ],
    file: "AI_Pill_Series.webp",
    lightboxScroll: true,
    year: 2025,
  },
  {
    id: "rifkus-design",
    title: "Rifkus Design",
    category: "Brand / Identity",
    thumbnail: resolveImage(`${instagram}/rifkus design.webp`),
    images: [resolveImage(`${instagram}/rifkus design.webp`)],
    file: "Rifkus_Design.webp",
    year: 2025,
  },
  {
    id: "aurem",
    title: "Aurem",
    category: "Logo / Joaillerie",
    thumbnail: resolveImage(`${carteVisite}/AUREM/2.webp`),
    images: [
      resolveImage(`${carteVisite}/AUREM/1.webp`),
      resolveImage(`${carteVisite}/AUREM/2.webp`),
    ],
    file: "Aurem_Wordmark.webp",
    cardStack: true,
    lightboxScroll: true,
    year: 2024,
  },
  {
    id: "akham-lkhir",
    title: "Akham L'Khir",
    category: "Brand Identity / Print",
    thumbnail: resolveImage("design/carte visite + menu/1.webp"),
    images: [
      resolveImage("design/carte visite + menu/1.webp"),
      resolveImage("design/carte visite + menu/2.webp"),
    ],
    file: "Business_Cards.webp",
    cardStack: true,
    lightboxScroll: true,
    year: 2024,
  },

  {
    id: "restaurant-menu",
    title: "Restaurant Menu",
    category: "Print / Menu Design",
    thumbnail: findImageByName("Orange and Black Bold Geometric Restaurant Menu"),
    images: [findImageByName("Orange and Black Bold Geometric Restaurant Menu")],
    file: "Restaurant_Menu.webp",
    year: 2024,
  },

  {
    id: "last-knight",
    title: "Last Knight",
    category: "Editorial / Concept",
    thumbnail: resolveImage(`${instagram}/Last_Knight.webp`),
    images: [resolveImage(`${instagram}/Last_Knight.webp`)],
    file: "Last_Knight.webp",
    year: 2025,
  },

  {
    id: "sacred-moonlight",
    title: "Sacred Moonlight",
    category: "Poster / Spiritual Series",
    thumbnail: findImageByName("Green Cream Elegant Decorative Ramadan Kareem"),
    images: [
      findImageByName("Green Cream Elegant Decorative Ramadan Kareem"),
    ],
    file: "Ramadan_Kareem.webp",
    cardScroll: true,
    lightboxScroll: true,
    year: 2025,
  },
  {
    id: "ramadan-mubarak",
    title: "Ramadan Mubarak",
    category: "Poster / Spiritual Series",
    thumbnail: findImageByName("Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post"),
    images: [findImageByName("Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post")],
    file: "Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post.webp",
    year: 2024,
  },
  {
    id: "le-montagnard",
    title: "Le Montagnard",
    category: "Brand Identity / Packaging",
    thumbnail: resolveImage("design/drink white label/le montagnard.webp"),
    images: [resolveImage("design/drink white label/le montagnard.webp")],
    file: "Le_Montagnard.webp",
    year: 2024,
  },
  {
    id: "a-day-in-the-life",
    title: "A Day in the Life",
    category: "Lifestyle / Social",
    thumbnail: resolveImage(`${instagram}/A DAY IN THE LIFE.webp`),
    images: [resolveImage(`${instagram}/A DAY IN THE LIFE.webp`)],
    file: "A_Day_In_The_Life.webp",
    year: 2025,
  }
];

export const featuredProject =
  archiveProjects.find((project) => project.featured) ?? archiveProjects[0];

export function formatProjectIndex(index: number): string {
  return String(index + 1).padStart(3, "0");
}

export function getArchiveYearRange(): string {
  const years = archiveProjects.map((project) => project.year);
  const min = Math.min(...years);
  const max = Math.max(...years);
  return `${min}–${max}`;
}
