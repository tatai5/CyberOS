import { ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tool } from '@/lib/types';
import { licenseColor } from '@/lib/format';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="h-full border-border bg-card transition-all duration-250 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
            {tool.category}
          </Badge>
          <span
            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${licenseColor(tool.license)}`}
          >
            {tool.license}
          </span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold leading-snug tracking-tight">
          {tool.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          {tool.description}
        </p>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="flex flex-wrap gap-1.5">
          {tool.platform.map((p) => (
            <span
              key={p}
              className="rounded border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </CardContent>
      <div className="flex items-center gap-4 border-t border-border p-5 pt-3">
        <a
          href={tool.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4" />
          Website
        </a>
        {tool.documentationUrl && (
          <a
            href={tool.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <BookOpen className="h-4 w-4" />
            Docs
          </a>
        )}
      </div>
    </Card>
  );
}
