import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { WriteupList } from '@/components/features/writeup-list';
import { WRITEUPS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Writeups',
  description:
    'Technical writeups covering vulnerability analyses, exploitation techniques, and security research.',
};

export default function WriteupsPage() {
  return (
    <div>
      <PageHeader
        title="Technical Writeups"
        description="Detailed analyses of vulnerabilities, exploitation techniques, and security research findings."
      />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <WriteupList items={WRITEUPS} />
      </div>
    </div>
  );
}
