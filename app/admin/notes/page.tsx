'use client';

import * as React from 'react';
import { Plus, Search, Pin, Edit, Trash2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SAMPLE_NOTES = [
  {
    id: 'n1',
    title: 'XSS Filter Bypass Cheat Sheet',
    summary: 'Collection of XSS payloads that bypass common WAF and sanitization filters.',
    category: 'Web Security',
    pinned: true,
    visibility: 'private',
    updatedAt: '2026-01-12',
  },
  {
    id: 'n2',
    title: 'AWS IAM Privilege Escalation Paths',
    summary: 'Documented paths for privilege escalation in AWS IAM roles and policies.',
    category: 'Cloud Security',
    pinned: true,
    visibility: 'private',
    updatedAt: '2026-01-08',
  },
  {
    id: 'n3',
    title: 'Nmap Scanning Techniques Reference',
    summary: 'Quick reference for advanced Nmap scanning flags and techniques.',
    category: 'Network Security',
    pinned: false,
    visibility: 'private',
    updatedAt: '2025-12-20',
  },
  {
    id: 'n4',
    title: 'Bug Bounty Methodology Notes',
    summary: 'Step-by-step methodology for approaching new bug bounty targets.',
    category: 'OSINT',
    pinned: false,
    visibility: 'internal',
    updatedAt: '2025-12-15',
  },
  {
    id: 'n5',
    title: 'Malware Analysis Workflow',
    summary: 'Standardized workflow for analyzing unknown malware samples safely.',
    category: 'Malware Analysis',
    pinned: false,
    visibility: 'private',
    updatedAt: '2025-11-30',
  },
];

export default function AdminNotesPage() {
  const [search, setSearch] = React.useState('');

  const filtered = SAMPLE_NOTES.filter((n) =>
    !search || n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            Notes Manager
          </h1>
          <p className="mt-1 text-muted-foreground">
            Private knowledge management for cybersecurity notes.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((note) => (
          <Card key={note.id} className="border-border bg-card">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  {note.pinned && (
                    <Pin className="h-3.5 w-3.5 text-warning" fill="currentColor" />
                  )}
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                    {note.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    {note.visibility}
                  </span>
                </div>
                <h3 className="mt-1.5 font-heading font-semibold">{note.title}</h3>
                <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
                  {note.summary}
                </p>
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
