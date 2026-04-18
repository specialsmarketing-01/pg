export const SERVICE_SLUGS = [
  "seo-optimization",
  "google-ads",
  "social-media-marketing",
  "website-development",
  "graphic-design",
  "analytics-and-cro",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}
