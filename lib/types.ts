export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type ContentStatus = 'draft' | 'published' | 'archived';

export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  difficulty: Difficulty;
  readingTime: number;
  publishedAt: string;
  updatedAt: string;
  views: number;
  featured?: boolean;
  content?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  category: string;
  status: 'active' | 'maintained' | 'archived';
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  coverImage?: string;
  gallery?: string[];
  tags: string[];
  content?: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Writeup {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  difficulty: Difficulty;
  readingTime: number;
  publishedAt: string;
  updatedAt: string;
  views: number;
  content?: string;
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  platform: string[];
  license: 'Open Source' | 'Commercial' | 'Freemium';
  websiteUrl: string;
  documentationUrl?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}
