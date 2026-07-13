import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { ToolList } from '@/components/features/tool-list';
import { TOOLS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'A searchable catalog of cybersecurity, development, and productivity tools for security professionals.',
};

export default function ToolsPage() {
  return (
    <div>
      <PageHeader
        title="Tool Directory"
        description="A curated catalog of cybersecurity tools for web security, network analysis, OSINT, reverse engineering, and more."
      />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <ToolList items={TOOLS} />
      </div>
    </div>
  );
}
