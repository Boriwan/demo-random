/**
 * Path helpers for sites deployed under a subpath (Astro's `base`).
 *
 * `import.meta.env.BASE_URL` is not guaranteed to end with a slash,
 * so it is normalized here once and reused everywhere.
 */

/** Configured base path, always starting and ending with a slash. */
export const BASE = (() => {
	const trimmed = (import.meta.env.BASE_URL || '/').replace(/^\/+|\/+$/g, '');
	return trimmed ? `/${trimmed}/` : '/';
})();

/**
 * Prefix an internal path with the configured base.
 * External URLs (`https://…`, `mailto:…`) and fragments (`#…`) are returned unchanged.
 */
export function withBase(path: string): string {
	if (!path.startsWith('/')) return path;
	return `${BASE}${path.replace(/^\/+/, '')}`;
}
