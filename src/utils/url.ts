const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Astro does not rewrite hrefs written in templates, so every internal link is
 * prefixed with `import.meta.env.BASE_URL` (root on Vercel; a subpath if you
 * ever re-enable GitHub Pages). External and hash links pass through untouched.
 */
export function withBase(path: string): string {
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${normalised}` || '/';
}

/** True when `href` is the current page or an ancestor section of it. */
export function isActive(href: string, pathname: string): boolean {
  const target = withBase(href).replace(/\/$/, '');
  const current = pathname.replace(/\/$/, '');
  if (target === BASE || target === '') return current === BASE || current === '';
  return current === target || current.startsWith(`${target}/`);
}
