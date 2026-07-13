import Link from 'next/link';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/types';
import { statusColor } from '@/lib/format';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full border-border bg-card transition-all duration-250 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="p-5 pb-3">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              {project.category}
            </Badge>
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize ${statusColor(project.status)}`}
            >
              {project.status}
            </span>
          </div>
          <h3 className="mt-3 font-heading text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
            {project.summary}
          </p>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="rounded px-2 py-0.5 text-xs text-muted-foreground">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border p-5 pt-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Github className="h-3.5 w-3.5" />
                Code
              </span>
            )}
            {project.liveUrl && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </span>
            )}
          </div>
          <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </CardFooter>
      </Card>
    </Link>
  );
}
