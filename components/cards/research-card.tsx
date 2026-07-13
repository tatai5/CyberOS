import Link from 'next/link';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ResearchItem } from '@/lib/types';
import { formatDate, formatViews, difficultyColor } from '@/lib/format';

interface ResearchCardProps {
  research: ResearchItem;
}

export function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Link href={`/research/${research.slug}`} className="group block h-full">
      <Card className="h-full border-border bg-card transition-all duration-250 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="p-5 pb-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              {research.category}
            </Badge>
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${difficultyColor(research.difficulty)}`}
            >
              {research.difficulty}
            </span>
          </div>
          <h3 className="mt-3 font-heading text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
            {research.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
            {research.summary}
          </p>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <div className="flex flex-wrap gap-1.5">
            {research.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border p-5 pt-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {research.readingTime} min
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {formatViews(research.views)}
            </span>
          </div>
          <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            Read more
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
