'use client';

import * as React from 'react';
import { Plus, Edit, Trash2, Tag, FolderTree } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES, TAGS } from '@/lib/data';

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Categories &amp; Tags
        </h1>
        <p className="mt-1 text-muted-foreground">
          Manage the taxonomy system used to organize all CyberOS content.
        </p>
      </div>

      {/* Categories */}
      <Card className="border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between p-5 pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <FolderTree className="h-4 w-4 text-primary" />
            Categories
          </CardTitle>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Button>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                className="flex items-center justify-between rounded-lg border border-border bg-surface p-3"
              >
                <div>
                  <p className="text-sm font-medium">{cat}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    /{cat.toLowerCase().replace(/\s+/g, '-')}
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Edit category">
                    <Edit className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-error" aria-label="Delete category">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card className="border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between p-5 pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <Tag className="h-4 w-4 text-primary" />
            Tags
          </CardTitle>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Tag
          </Button>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <div
                key={tag}
                className="group flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  #{tag}
                </span>
                <button
                  className="text-muted-foreground opacity-0 transition-opacity hover:text-error group-hover:opacity-100"
                  aria-label={`Delete tag ${tag}`}
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
