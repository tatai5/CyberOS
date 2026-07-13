import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Markdown } from '@/components/content/markdown';
import { PROJECTS } from '@/lib/data';
import { formatDate, statusColor } from '@/lib/format';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = PROJECTS.find((p) => p.slug === params.slug);
  if (!item) return { title: 'Project Not Found' };
  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const item = PROJECTS.find((p) => p.slug === params.slug);
  if (!item) notFound();

  const related = PROJECTS.filter(
    (p) => p.category === item.category && p.id !== item.id
  ).slice(0, 2);

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-20 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              {item.category}
            </Badge>
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize ${statusColor(item.status)}`}>
              {item.status}
            </span>
            {item.featured && (
              <Badge variant="outline" className="border-warning/30 bg-warning/10 text-warning">
                Featured
              </Badge>
            )}
          </div>
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
            {item.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Updated {formatDate(item.updatedAt)}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {item.githubUrl && (
              <Button asChild>
                <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Repository
                </a>
              </Button>
            )}
            {item.liveUrl && (
              <Button variant="outline" asChild>
                <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Tech stack */}
          <div className="mb-8 rounded-xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 font-heading text-lg font-semibold">
              <Code2 className="h-5 w-5 text-primary" />
              Technology Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-surface px-3 py-1 font-mono text-sm text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {item.content && <Markdown content={item.content} />}

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="font-heading text-xl font-semibold">Related Projects</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                  >
                    <span className="text-xs text-primary">{p.category}</span>
                    <h3 className="mt-1 font-heading font-semibold transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {p.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
