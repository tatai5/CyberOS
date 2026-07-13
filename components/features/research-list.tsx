'use client';

import * as React from 'react';
import { ResearchCard } from '@/components/cards/research-card';
import { FilterBar } from '@/components/layout/filter-bar';
import { ResearchItem } from '@/lib/types';
import { RESEARCH_CATEGORIES } from '@/lib/data';
import { FileSearch } from 'lucide-react';

interface ResearchListProps {
  items: ResearchItem[];
}

export function ResearchList({ items }: ResearchListProps) {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [sort, setSort] = React.useState('newest');

  const filtered = React.useMemo(() => {
    let result = [...items];

    if (category !== 'All') {
      result = result.filter((r) => r.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.summary.toLowerCase().includes(q) ||
          r.tags.some((t) => t.includes(q))
      );
    }

    switch (sort) {
      case 'newest':
        result.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
        break;
      case 'oldest':
        result.sort((a, b) => +new Date(a.publishedAt) - +new Date(b.publishedAt));
        break;
      case 'views':
        result.sort((a, b) => b.views - a.views);
        break;
      case 'updated':
        result.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));
        break;
    }

    return result;
  }, [items, search, category, sort]);

  return (
    <div className="space-y-8">
      <FilterBar
        categories={RESEARCH_CATEGORIES}
        selectedCategory={category}
        onCategoryChange={setCategory}
        searchQuery={search}
        onSearchChange={setSearch}
        sortOptions={[
          { value: 'newest', label: 'Newest' },
          { value: 'oldest', label: 'Oldest' },
          { value: 'views', label: 'Most Viewed' },
          { value: 'updated', label: 'Recently Updated' },
        ]}
        selectedSort={sort}
        onSortChange={setSort}
        searchPlaceholder="Search research articles..."
      />

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
          <FileSearch className="h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-heading text-lg font-semibold">
            No research found
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ResearchCard key={item.id} research={item} />
          ))}
        </div>
      )}
    </div>
  );
}
