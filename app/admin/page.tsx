'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Code2,
  FileText,
  StickyNote,
  Image as ImageIcon,
  Tags,
  TrendingUp,
  Eye,
  Clock,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RESEARCH, PROJECTS, WRITEUPS, TOOLS } from '@/lib/data';
import { formatDate, formatViews } from '@/lib/format';

const STATS = [
  { label: 'Research', value: RESEARCH.length, icon: BookOpen, href: '/admin/research', color: 'text-primary' },
  { label: 'Projects', value: PROJECTS.length, icon: Code2, href: '/admin/projects', color: 'text-info' },
  { label: 'Writeups', value: WRITEUPS.length, icon: FileText, href: '/admin/writeups', color: 'text-warning' },
  { label: 'Tools', value: TOOLS.length, icon: Tags, href: '/admin', color: 'text-accent' },
];

const QUICK_ACTIONS = [
  { label: 'New Research', href: '/admin/research', icon: BookOpen },
  { label: 'New Project', href: '/admin/projects', icon: Code2 },
  { label: 'New Writeup', href: '/admin/writeups', icon: FileText },
  { label: 'New Note', href: '/admin/notes', icon: StickyNote },
  { label: 'Upload Media', href: '/admin/media', icon: ImageIcon },
  { label: 'Manage Tags', href: '/admin/categories', icon: Tags },
];

export default function AdminDashboardPage() {
  const recentResearch = [...RESEARCH]
    .sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt))
    .slice(0, 4);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Overview of CyberOS content and activity.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="border-border bg-card transition-colors hover:border-primary/40">
              <CardHeader className="flex flex-row items-center justify-between p-5 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <p className="font-heading text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 font-heading text-lg font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {QUICK_ACTIONS.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                <action.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between p-5 pb-3">
            <CardTitle className="text-base font-semibold">Recent Research</CardTitle>
            <Link
              href="/admin/research"
              className="flex items-center gap-1 text-xs text-primary hover:underline"
            >
              View all
              <ArrowRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="space-y-3">
              {recentResearch.map((item) => (
                <Link
                  key={item.id}
                  href={`/admin/research`}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface p-3 transition-colors hover:border-primary/30"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{item.title}</p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatDate(item.updatedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {formatViews(item.views)}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-3 shrink-0 border-success/30 bg-success/10 text-success">
                    published
                  </Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between p-5 pb-3">
            <CardTitle className="text-base font-semibold">Top Content</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="space-y-3">
              {[...RESEARCH, ...WRITEUPS]
                .sort((a, b) => b.views - a.views)
                .slice(0, 5)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface p-3"
                  >
                    <p className="truncate text-sm font-medium">{item.title}</p>
                    <div className="ml-3 flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      {formatViews(item.views)}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inbox */}
      <Card className="border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between p-5 pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <Mail className="h-4 w-4 text-primary" />
            Recent Messages
          </CardTitle>
          <Link
            href="/admin"
            className="flex items-center gap-1 text-xs text-primary hover:underline"
          >
            View all
            <ArrowRight className="h-3 w-3" />
          </Link>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Mail className="h-10 w-10 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">
              No new messages
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
