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
    thumbnail: resolveImage(`${instagram}/DREAM (1).png`),
    images: [resolveImage(`${instagram}/DREAM (1).png`)],
    file: "DREAM_(1).png",
    year: 2025,
  },
  {
    id: "eid-mubarak",
    title: "Eid Mubarak",
    category: "Poster / Cultural Identity",
    thumbnail: resolveImage(`${instagram}/AID ADHA POST.png`),
    images: [resolveImage(`${instagram}/AID ADHA POST.png`)],
    file: "AID_ADHA_POST.png",
    year: 2025,
  },
  {
    id: "the-full-squad",
    title: "The Full Squad",
    category: "Sports / Editorial",
    thumbnail: resolveImage(`${instagram}/The full SQUAD.png`),
    images: [resolveImage(`${instagram}/The full SQUAD.png`)],
    file: "The_Full_Squad.png",
    featured: true,
    year: 2025,
  },
  {
    id: "match-day",
    title: "Match Day",
    category: "Sports / Editorial",
    thumbnail: resolveImage(`${instagram}/Algeria Vs switzeland.png`),
    images: [resolveImage(`${instagram}/Algeria Vs switzeland.png`)],
    file: "Algeria_Vs_Switzerland.png",
    year: 2025,
  },
  {
    id: "heavy-head",
    title: "Heavy Head",
    category: "Conceptual / Self Portrait",
    thumbnail: resolveImage(`${instagram}/me.png`),
    images: [resolveImage(`${instagram}/me.png`)],
    file: "Heavy_On_My_Mind.png",
    year: 2025,
  },

  {
    id: "algeria-first-match",
    title: "Algeria First Match",
    category: "Sports / Editorial",
    thumbnail: resolveImage(`${instagram}/algeria first match.png`),
    images: [resolveImage(`${instagram}/algeria first match.png`)],
    file: "Algeria_First_Match.png",
    year: 2025,
  },
  {
    id: "outside-the-box",
    title: "Outside the Box",
    category: "Creative / Social",
    thumbnail: resolveImage(`${instagram}/OUTSIDE BOX (3).png`),
    images: [resolveImage(`${instagram}/OUTSIDE BOX (3).png`)],
    file: "Outside_The_Box.png",
    year: 2025,
  },
  {
    id: "IZEM",
    title: "Energy-drink-IZEM",
    category: "Social / Energy Drink / Branding",
    thumbnail: resolveImage(`${instagram}/lastOne.png`),
    images: [resolveImage(`${instagram}/lastOne.png`)],
    file: "lastOne.png",
    year: 2025,
  },
  {
    id: "ai-pill",
    title: "AI Pill",
    category: "Social / Campaign Series",
    thumbnail: resolveImage(`${instagram}/AI_PILL/1.png`),
    images: [
      resolveImage(`${instagram}/AI_PILL/1.png`),
      resolveImage(`${instagram}/AI_PILL/2.png`),
      resolveImage(`${instagram}/AI_PILL/3.png`),
      resolveImage(`${instagram}/AI_PILL/4.png`),
    ],
    file: "AI_Pill_Series.png",
    lightboxScroll: true,
    year: 2025,
  },
  {
    id: "rifkus-design",
    title: "Rifkus Design",
    category: "Brand / Identity",
    thumbnail: resolveImage(`${instagram}/rifkus design.jpg`),
    images: [resolveImage(`${instagram}/rifkus design.jpg`)],
    file: "Rifkus_Design.jpg",
    year: 2025,
  },
  {
    id: "aurem",
    title: "Aurem",
    category: "Logo / Joaillerie",
    thumbnail: resolveImage(`${carteVisite}/AUREM/2.png`),
    images: [
      resolveImage(`${carteVisite}/AUREM/1.png`),
      resolveImage(`${carteVisite}/AUREM/2.png`),
    ],
    file: "Aurem_Wordmark.png",
    cardStack: true,
    lightboxScroll: true,
    year: 2024,
  },
  {
    id: "akham-lkhir",
    title: "Akham L'Khir",
    category: "Brand Identity / Print",
    thumbnail: resolveImage("design/carte visite + menu/1.jpg"),
    images: [
      resolveImage("design/carte visite + menu/1.jpg"),
      resolveImage("design/carte visite + menu/2.jpg"),
    ],
    file: "Business_Cards.jpg",
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
    file: "Restaurant_Menu.png",
    year: 2024,
  },

  {
    id: "last-knight",
    title: "Last Knight",
    category: "Editorial / Concept",
    thumbnail: resolveImage(`${instagram}/Last_Knight.jpg`),
    images: [resolveImage(`${instagram}/Last_Knight.jpg`)],
    file: "Last_Knight.jpg",
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
    file: "Ramadan_Kareem.png",
    cardScroll: true,
    lightboxScroll: true,
    year: 2025,
  },
  {
    id: "ramadan-mubarak",
    title: "Ramadan Mubarak",
    category: "Poster / Spiritual Series",
    thumbnail: findImageByName("Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post"),
    images: [findImageByName("Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post.png")],
    file: "Cyan Flat Modern Marhaban Ya Ramadhan Instagram Post.png",
    year: 2024,
  },
  {
    id: "le-montagnard",
    title: "Le Montagnard",
    category: "Brand Identity / Packaging",
    thumbnail: resolveImage("design/drink white label/le montagnard.png"),
    images: [resolveImage("design/drink white label/le montagnard.png")],
    file: "Le_Montagnard.png",
    year: 2024,
  },
  {
    id: "a-day-in-the-life",
    title: "A Day in the Life",
    category: "Lifestyle / Social",
    thumbnail: resolveImage(`${instagram}/A DAY IN THE LIFE.png`),
    images: [resolveImage(`${instagram}/A DAY IN THE LIFE.png`)],
    file: "A_Day_In_The_Life.png",
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
