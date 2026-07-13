'use client';

import * as React from 'react';
import { ToolCard } from '@/components/cards/tool-card';
import { FilterBar } from '@/components/layout/filter-bar';
import { Tool } from '@/lib/types';
import { TOOL_CATEGORIES } from '@/lib/data';
import { FileSearch } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToolListProps {
  items: Tool[];
}

export function ToolList({ items }: ToolListProps) {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [platform, setPlatform] = React.useState('All');
  const [license, setLicense] = React.useState('All');

  const filtered = React.useMemo(() => {
    let result = [...items];

    if (category !== 'All') {
      result = result.filter((t) => t.category === category);
    }

    if (platform !== 'All') {
      result = result.filter((t) => t.platform.includes(platform));
    }

    if (license !== 'All') {
      result = result.filter((t) => t.license === license);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    return result;
  }, [items, search, category, platform, license]);

  return (
    <div className="space-y-6">
      <FilterBar
        categories={TOOL_CATEGORIES}
        selectedCategory={category}
        onCategoryChange={setCategory}
        searchQuery={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search tools..."
      />

      {/* Platform and License filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground">Platform:</span>
        {['All', 'Cross-platform', 'Linux', 'macOS', 'Windows'].map((p) => (
          <button
            key={p}
            onClick={() => setPlatform(p)}
            className={cn(
              'h-7 rounded-full px-3 text-xs font-medium transition-colors',
              platform === p
                ? 'bg-primary text-primary-foreground'
                : 'border border-border text-muted-foreground hover:text-foreground'
            )}
          >
            {p}
          </button>
        ))}
        <span className="ml-4 text-xs text-muted-foreground">License:</span>
        {['All', 'Open Source', 'Commercial', 'Freemium'].map((l) => (
          <button
            key={l}
            onClick={() => setLicense(l)}
            className={cn(
              'h-7 rounded-full px-3 text-xs font-medium transition-colors',
              license === l
                ? 'bg-primary text-primary-foreground'
                : 'border border-border text-muted-foreground hover:text-foreground'
            )}
          >
            {l}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
          <FileSearch className="h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-heading text-lg font-semibold">No tools found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ToolCard key={item.id} tool={item} />
          ))}
        </div>
      )}
    </div>
  );
}
