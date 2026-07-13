import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, Clock, Eye, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Markdown } from '@/components/content/markdown';
import { WRITEUPS } from '@/lib/data';
import { formatDate, formatViews, difficultyColor } from '@/lib/format';

export function generateStaticParams() {
  return WRITEUPS.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = WRITEUPS.find((w) => w.slug === params.slug);
  if (!item) return { title: 'Writeup Not Found' };
  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: item.title,
      description: item.summary,
      type: 'article',
    },
  };
}

export default function WriteupDetailPage({ params }: { params: { slug: string } }) {
  const item = WRITEUPS.find((w) => w.slug === params.slug);
  if (!item) notFound();

  const idx = WRITEUPS.findIndex((w) => w.id === item.id);
  const prev = idx > 0 ? WRITEUPS[idx - 1] : null;
  const next = idx < WRITEUPS.length - 1 ? WRITEUPS[idx + 1] : null;
  const related = WRITEUPS.filter(
    (w) => w.category === item.category && w.id !== item.id
  ).slice(0, 2);

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-20 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/writeups">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Writeups
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              {item.category}
            </Badge>
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${difficultyColor(item.difficulty)}`}>
              {item.difficulty}
            </span>
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
              {formatDate(item.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {item.readingTime} min read
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              {formatViews(item.views)} views
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {item.content && <Markdown content={item.content} />}

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Prev/Next */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
            {prev ? (
              <Link
                href={`/writeups/${prev.slug}`}
                className="group flex items-center gap-2 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                <div>
                  <span className="text-xs text-muted-foreground">Previous</span>
                  <p className="text-sm font-medium transition-colors group-hover:text-primary">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/writeups/${next.slug}`}
                className="group flex flex-col items-end gap-1 rounded-lg border border-border bg-card p-4 text-right transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <span className="text-xs text-muted-foreground">Next</span>
                    <p className="text-sm font-medium transition-colors group-hover:text-primary">
                      {next.title}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="font-heading text-xl font-semibold">Related Writeups</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((w) => (
                  <Link
                    key={w.id}
                    href={`/writeups/${w.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                  >
                    <span className="text-xs text-primary">{w.category}</span>
                    <h3 className="mt-1 font-heading font-semibold transition-colors group-hover:text-primary">
                      {w.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {w.summary}
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
