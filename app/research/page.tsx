import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { ResearchList } from '@/components/features/research-list';
import { RESEARCH } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'A searchable, categorized library of cybersecurity research covering web security, network security, cloud security, OSINT, reverse engineering, and AI security.',
};

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        title="Research Library"
        description="In-depth cybersecurity research across web, network, cloud, OSINT, and reverse engineering domains."
      />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <ResearchList items={RESEARCH} />
      </div>
    </div>
  );
}
