import Link from 'next/link';
import {
  Shield,
  Terminal,
  ArrowRight,
  BookOpen,
  Code2,
  Search,
  Bug,
  Cloud,
  Network,
  Cpu,
  Lock,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ResearchCard } from '@/components/cards/research-card';
import { ProjectCard } from '@/components/cards/project-card';
import { WriteupCard } from '@/components/cards/writeup-card';
import { RESEARCH, PROJECTS, WRITEUPS, SKILLS, TIMELINE } from '@/lib/data';

export default function HomePage() {
  const featuredResearch = RESEARCH.filter((r) => r.featured).slice(0, 3);
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const latestWriteups = WRITEUPS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container relative mx-auto px-4 py-24 md:px-6 md:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/10 text-primary"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Enterprise Cybersecurity Platform
            </Badge>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Research. Learn.{' '}
              <span className="text-gradient">Build. Secure.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
              A unified cybersecurity knowledge platform combining research,
              engineering, documentation, and tools into one scalable ecosystem.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild className="glow-primary">
                <Link href="/research">
                  Explore Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>

          {/* Terminal visual */}
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-primary/5">
              <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-error/80" />
                  <span className="h-3 w-3 rounded-full bg-warning/80" />
                  <span className="h-3 w-3 rounded-full bg-success/80" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  cyberos@research:~$
                </span>
              </div>
              <div className="p-5 font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> cyberos scan --target research
                </p>
                <p className="mt-2 text-foreground">
                  <span className="text-success">[+]</span> Initializing CyberOS research engine...
                </p>
                <p className="text-foreground">
                  <span className="text-success">[+]</span> Loading knowledge base: <span className="text-info">6 articles</span>
                </p>
                <p className="text-foreground">
                  <span className="text-success">[+]</span> Indexing projects: <span className="text-info">6 repositories</span>
                </p>
                <p className="text-foreground">
                  <span className="text-success">[+]</span> Cataloging tools: <span className="text-info">12 utilities</span>
                </p>
                <p className="text-foreground">
                  <span className="text-success">[+]</span> Writeups indexed: <span className="text-info">6 published</span>
                </p>
                <p className="mt-2 text-primary">
                  <span className="animate-blink">{'>'}_</span> Ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-surface/50">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4 md:px-6 lg:px-8">
          {[
            { label: 'Research Articles', value: '6', icon: BookOpen },
            { label: 'Projects', value: '6', icon: Code2 },
            { label: 'Technical Writeups', value: '6', icon: Terminal },
            { label: 'Security Tools', value: '12', icon: Shield },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-heading text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Featured Research
              </h2>
              <p className="mt-2 text-muted-foreground">
                In-depth analysis of cybersecurity topics and methodologies.
              </p>
            </div>
            <Link
              href="/research"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
            >
              View all research
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredResearch.map((item) => (
              <ResearchCard key={item.id} research={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-y border-border bg-surface/30 py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-2 text-muted-foreground">
                Engineering solutions for real-world security challenges.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight">
              Core Expertise
            </h2>
            <p className="mt-2 text-muted-foreground">
              Specialized skills across the cybersecurity domain.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skillGroup) => {
              const iconMap: Record<string, typeof Bug> = {
                'Web Security': Bug,
                'Network Security': Network,
                OSINT: Search,
                Development: Code2,
                Cloud: Cloud,
              };
              const Icon = iconMap[skillGroup.category] || Shield;
              return (
                <div
                  key={skillGroup.category}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold">
                    {skillGroup.category}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="border-y border-border bg-surface/30 py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight">
              Experience Timeline
            </h2>
            <p className="mt-2 text-muted-foreground">
              Key milestones in the cybersecurity journey.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border">
              {TIMELINE.map((entry) => (
                <div key={entry.year} className="relative pl-12">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <span className="font-mono text-xs font-bold text-primary">
                      {entry.year.slice(-2)}
                    </span>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <span className="font-mono text-xs text-primary">{entry.year}</span>
                    <h3 className="mt-1 font-heading text-lg font-semibold">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Writeups */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Latest Writeups
              </h2>
              <p className="mt-2 text-muted-foreground">
                Technical deep-dives and vulnerability analyses.
              </p>
            </div>
            <Link
              href="/writeups"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
            >
              View all writeups
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestWriteups.map((item) => (
              <WriteupCard key={item.id} writeup={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface/50 py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-10 text-center md:p-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight">
              Ready to explore?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Dive into the research, browse the tools, or get in touch for
              collaboration and consulting.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tools">Browse tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
