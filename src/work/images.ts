const imageModules = import.meta.glob<string>("./design/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function normalizePath(path: string): string {
  return `./${path.replace(/\\/g, "/")}`;
}

export function resolveImage(relativePath: string): string {
  const key = normalizePath(relativePath);
  const url = imageModules[key];

  if (!url) {
    throw new Error(`Image not found: ${relativePath}`);
  }

  return url;
}

export function findImageByName(filename: string): string {
  const match = Object.entries(imageModules).find(([path]) =>
    path.toLowerCase().includes(filename.toLowerCase()),
  );

  if (!match) {
    throw new Error(`Image not found by name: ${filename}`);
  }

  return match[1];
}
