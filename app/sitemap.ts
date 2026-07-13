import type { MetadataRoute } from 'next';
import { RESEARCH, PROJECTS, WRITEUPS, TOOLS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cyberos.io';
  const staticPages = [
    { url: '', priority: 1, changeFrequency: 'weekly' as const },
    { url: '/research', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/writeups', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/tools', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
  ];

  const researchPages = RESEARCH.map((r) => ({
    url: `/research/${r.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const projectPages = PROJECTS.map((p) => ({
    url: `/projects/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const writeupPages = WRITEUPS.map((w) => ({
    url: `/writeups/${w.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...researchPages, ...projectPages, ...writeupPages].map(
    (page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  );
}
