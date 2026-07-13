import { ResearchItem, Project, Writeup, Tool } from '@/lib/types';

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatViews(views: number): string {
  if (views >= 1000) return `${(views / 1000).toFixed(1)}k`;
  return String(views);
}

export function difficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Beginner':
      return 'text-success border-success/30 bg-success/10';
    case 'Intermediate':
      return 'text-info border-info/30 bg-info/10';
    case 'Advanced':
      return 'text-warning border-warning/30 bg-warning/10';
    case 'Expert':
      return 'text-error border-error/30 bg-error/10';
    default:
      return 'text-muted-foreground border-border bg-muted';
  }
}

export function statusColor(status: string): string {
  switch (status) {
    case 'active':
      return 'text-success border-success/30 bg-success/10';
    case 'maintained':
      return 'text-info border-info/30 bg-info/10';
    case 'archived':
      return 'text-muted-foreground border-border bg-muted';
    default:
      return 'text-muted-foreground border-border bg-muted';
  }
}

export function licenseColor(license: string): string {
  switch (license) {
    case 'Open Source':
      return 'text-success border-success/30 bg-success/10';
    case 'Commercial':
      return 'text-info border-info/30 bg-info/10';
    case 'Freemium':
      return 'text-warning border-warning/30 bg-warning/10';
    default:
      return 'text-muted-foreground border-border bg-muted';
  }
}

export function getResearchBySlug(slug: string): ResearchItem | undefined {
  return undefined;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return undefined;
}

export function getWriteupBySlug(slug: string): Writeup | undefined {
  return undefined;
}

export function getToolBySlug(slug: string): Tool | undefined {
  return undefined;
}
