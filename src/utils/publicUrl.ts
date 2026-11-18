// Turns a path to a file in public/ (e.g. "/members/2027/oscar.jpg") into a
// URL that works when the site is served from a subfolder, like GitHub Pages
// at /vital-hacks-website/. Vite only does this automatically for paths
// written directly in a template, not for paths that come from data files.
export function publicUrl(path: string): string {
  if (!path.startsWith("/")) return path;
  return import.meta.env.BASE_URL + path.slice(1);
}
