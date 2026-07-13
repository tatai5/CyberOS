'use client';

import * as React from 'react';
import { Plus, Search, Edit, Trash2, Github, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROJECTS } from '@/lib/data';
import { statusColor } from '@/lib/format';

export default function AdminProjectsPage() {
  const [search, setSearch] = React.useState('');

  const filtered = PROJECTS.filter((p) =>
    !search || p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Projects Manager
          </h1>
          <p className="mt-1 text-muted-foreground">
            Create, edit, and showcase technical projects.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Card key={project.id} className="border-border bg-card">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Star className="h-3.5 w-3.5 text-warning" fill="currentColor" />
                    )}
                  </div>
                  <h3 className="mt-2 font-heading font-semibold">{project.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <span className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize ${statusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <Github className="h-4 w-4 text-muted-foreground" />
                  )}
                  {project.liveUrl && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Edit">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-error" aria-label="Delete">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
