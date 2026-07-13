import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <section className={cn('relative overflow-hidden border-b border-border', className)}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-20 lg:px-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
