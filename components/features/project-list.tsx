'use client';

import * as React from 'react';
import { ProjectCard } from '@/components/cards/project-card';
import { FilterBar } from '@/components/layout/filter-bar';
import { Project } from '@/lib/types';
import { PROJECT_CATEGORIES } from '@/lib/data';
import { FileSearch } from 'lucide-react';

interface ProjectListProps {
  items: Project[];
}

export function ProjectList({ items }: ProjectListProps) {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [sort, setSort] = React.useState('featured');

  const filtered = React.useMemo(() => {
    let result = [...items];

    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'updated':
        result.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));
        break;
      case 'alpha':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [items, search, category, sort]);

  return (
    <div className="space-y-8">
      <FilterBar
        categories={PROJECT_CATEGORIES}
        selectedCategory={category}
        onCategoryChange={setCategory}
        searchQuery={search}
        onSearchChange={setSearch}
        sortOptions={[
          { value: 'featured', label: 'Featured' },
          { value: 'updated', label: 'Recently Updated' },
          { value: 'alpha', label: 'Alphabetical' },
        ]}
        selectedSort={sort}
        onSortChange={setSort}
        searchPlaceholder="Search projects..."
      />

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
          <FileSearch className="h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-heading text-lg font-semibold">
            No projects found
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      )}
    </div>
  );
}
