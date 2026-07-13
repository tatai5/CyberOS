'use client';

import * as React from 'react';
import { Upload, Search, ImageIcon, FileText, Copy, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const SAMPLE_MEDIA = [
  { id: 'm1', name: 'xss-payload-diagram.png', type: 'image/png', size: '245 KB', dimensions: '1920x1080', category: 'Web Security' },
  { id: 'm2', name: 'network-architecture.pdf', type: 'application/pdf', size: '1.2 MB', dimensions: '-', category: 'Network Security' },
  { id: 'm3', name: 'malware-analysis-report.pdf', type: 'application/pdf', size: '3.4 MB', dimensions: '-', category: 'Malware Analysis' },
  { id: 'm4', name: 'cloud-architecture.svg', type: 'image/svg+xml', size: '12 KB', dimensions: '800x600', category: 'Cloud Security' },
  { id: 'm5', name: 'recon-workflow.png', type: 'image/png', size: '156 KB', dimensions: '1600x900', category: 'OSINT' },
  { id: 'm6', name: 'jwt-attack-flow.svg', type: 'image/svg+xml', size: '8 KB', dimensions: '600x400', category: 'Web Security' },
];

export default function AdminMediaPage() {
  const [search, setSearch] = React.useState('');

  const filtered = SAMPLE_MEDIA.filter((m) =>
    !search || m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Media Library
          </h1>
          <p className="mt-1 text-muted-foreground">
            Upload, organize, and manage media assets.
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </div>

      <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
          <Upload className="h-6 w-6 text-primary" />
        </div>
        <p className="mt-4 font-medium">Drop files here or click to upload</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Supports PNG, JPG, WEBP, SVG, PDF (max 10MB)
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search media..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((media) => (
          <Card key={media.id} className="border-border bg-card">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                  {media.type.startsWith('image/') ? (
                    <ImageIcon className="h-6 w-6 text-muted-foreground" />
                  ) : (
                    <FileText className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{media.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {media.size} {media.dimensions !== '-' && ` - ${media.dimensions}`}
                  </p>
                  <span className="mt-1 inline-block rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {media.category}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-end gap-1 border-t border-border pt-3">
                <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Copy URL">
                  <Copy className="h-4 w-4" />
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
