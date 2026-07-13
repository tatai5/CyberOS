'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/auth-context';
import { AuthProvider } from '@/lib/auth/auth-context';
import {
  LayoutDashboard,
  BookOpen,
  Code2,
  FileText,
  StickyNote,
  Image as ImageIcon,
  Tags,
  LogOut,
  Shield,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Research', href: '/admin/research', icon: BookOpen },
  { label: 'Projects', href: '/admin/projects', icon: Code2 },
  { label: 'Writeups', href: '/admin/writeups', icon: FileText },
  { label: 'Notes', href: '/admin/notes', icon: StickyNote },
  { label: 'Media', href: '/admin/media', icon: ImageIcon },
  { label: 'Categories', href: '/admin/categories', icon: Tags },
];

function AdminShell({ children }: { children: React.ReactNode }) {
  const { user, loading, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (!loading && !user) {
      router.replace('/admin/login');
    }
  }, [user, loading, router]);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) return null;

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const SidebarContent = () => (
    <>
      <div className="flex items-center gap-2.5 px-4 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
          <Shield className="h-5 w-5 text-primary" strokeWidth={2} />
        </div>
        <div>
          <span className="font-heading text-base font-semibold tracking-tight">
            Cyber<span className="text-primary">OS</span>
          </span>
          <p className="text-xs text-muted-foreground">Admin Panel</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3" aria-label="Admin navigation">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              isActive(item.href)
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <div className="mb-3 px-3 py-2">
          <p className="truncate text-xs text-muted-foreground">
            Signed in as
          </p>
          <p className="truncate text-sm font-medium text-foreground">
            {user.email}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleSignOut}
          className="w-full"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-card md:flex">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-4 z-40 md:hidden"
            aria-label="Open admin menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 border-border bg-card p-0">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="font-heading text-sm font-semibold">Menu</span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close">
                  <X className="h-4 w-4" />
                </Button>
              </SheetClose>
            </div>
            <SidebarContent />
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AdminShell>{children}</AdminShell>
    </AuthProvider>
  );
}
