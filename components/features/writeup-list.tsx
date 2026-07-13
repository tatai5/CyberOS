'use client';

import * as React from 'react';
import { WriteupCard } from '@/components/cards/writeup-card';
import { FilterBar } from '@/components/layout/filter-bar';
import { Writeup } from '@/lib/types';
import { WRITEUP_CATEGORIES } from '@/lib/data';
import { FileSearch } from 'lucide-react';

interface WriteupListProps {
  items: Writeup[];
}

export function WriteupList({ items }: WriteupListProps) {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [sort, setSort] = React.useState('newest');

  const filtered = React.useMemo(() => {
    let result = [...items];

    if (category !== 'All') {
      result = result.filter((w) => w.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (w) =>
          w.title.toLowerCase().includes(q) ||
          w.summary.toLowerCase().includes(q) ||
          w.tags.some((t) => t.includes(q))
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
    }

    return result;
  }, [items, search, category, sort]);

  return (
    <div className="space-y-8">
      <FilterBar
        categories={WRITEUP_CATEGORIES}
        selectedCategory={category}
        onCategoryChange={setCategory}
        searchQuery={search}
        onSearchChange={setSearch}
        sortOptions={[
          { value: 'newest', label: 'Newest' },
          { value: 'oldest', label: 'Oldest' },
          { value: 'views', label: 'Most Viewed' },
        ]}
        selectedSort={sort}
        onSortChange={setSort}
        searchPlaceholder="Search writeups..."
      />

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
          <FileSearch className="h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-heading text-lg font-semibold">
            No writeups found
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <WriteupCard key={item.id} writeup={item} />
          ))}
        </div>
      )}
    </div>
  );
}
