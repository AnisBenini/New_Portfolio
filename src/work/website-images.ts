const websiteImageModules = import.meta.glob<string>("./Websites/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function normalizeFolder(folder: string): string {
  return folder.replace(/\\/g, "/").toLowerCase();
}

export function resolveWebsiteImages(folder: string): string[] {
  const needle = normalizeFolder(folder);

  return Object.entries(websiteImageModules)
    .filter(([path]) => normalizeFolder(path).includes(needle))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
}

export function resolveWebsitePreview(folder: string): string | undefined {
  return resolveWebsiteImages(folder)[0];
}
