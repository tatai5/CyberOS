import Link from 'next/link';
import { Shield, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-6 font-heading text-6xl font-bold tracking-tight">
          404
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          This page was not found or has been moved.
        </p>
        <p className="mt-1 font-mono text-sm text-muted-foreground">
          Error: RESOURCE_NOT_FOUND
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
