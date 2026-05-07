/**
 * SEO helpers — canonical URL builder, default meta values.
 */

export const SITE_URL  = 'https://cloakd-removals.cloud';
export const SITE_NAME = 'Cloakd';

export const DEFAULT_META = {
  title:       'Stop Rodents From Coming Back | Cloakd',
  description: 'NYC and NJ rodent fertility management for restaurants, property managers, and ghost kitchens. The cycle ends here.',
  ogImage:     `${SITE_URL}/og-default.jpg`,
} as const;

export function canonical(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return `${title} | Cloakd`;
}
