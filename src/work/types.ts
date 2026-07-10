export type Project = {
  id: string;
  title: string;
  category: string;
  description?: string;
  thumbnail: string;
  images: string[];
  file: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  /** Horizontal scroll strip in the archive card (smaller previews). */
  cardScroll?: boolean;
  /** Vertical stack in the archive card (images stacked top-to-bottom). */
  cardStack?: boolean;
  /** Horizontal scroll in the fullscreen lightbox. */
  lightboxScroll?: boolean;
  year: number;
};

export type Website = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  previewImage?: string;
  year: number;
  inProgress?: boolean;
};
