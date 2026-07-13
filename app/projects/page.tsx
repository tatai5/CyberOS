import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { ProjectList } from '@/components/features/project-list';
import { PROJECTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A showcase of cybersecurity engineering projects including tools, platforms, and research utilities.',
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Project Showcase"
        description="Engineering solutions for real-world security challenges, from tooling to platforms."
      />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <ProjectList items={PROJECTS} />
      </div>
    </div>
  );
}
