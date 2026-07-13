'use client';

import * as React from 'react';
import { Plus, Search, Edit, Trash2, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WRITEUPS } from '@/lib/data';
import { formatDate, formatViews, difficultyColor } from '@/lib/format';

export default function AdminWriteupsPage() {
  const [search, setSearch] = React.useState('');

  const filtered = WRITEUPS.filter((w) =>
    !search || w.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Writeups Manager
          </h1>
          <p className="mt-1 text-muted-foreground">
            Create, edit, and publish technical writeups.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Writeup
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search writeups..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((item) => (
          <Card key={item.id} className="border-border bg-card">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                    {item.category}
                  </Badge>
                  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${difficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </div>
                <h3 className="mt-1.5 font-heading font-semibold">{item.title}</h3>
                <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.readingTime} min
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {formatViews(item.views)}
                  </span>
                  <span>{formatDate(item.publishedAt)}</span>
                </div>
              </div>
              <div className="flex shrink-0 gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Edit">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-error" aria-label="Delete">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
