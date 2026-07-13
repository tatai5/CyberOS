import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Bug,
  Search,
  Network,
  Cloud,
  Code2,
  Lock,
  Eye,
  Terminal,
  Award,
  ArrowRight,
  Target,
  BookOpen,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/page-header';
import { SKILLS, TIMELINE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about CyberOS, the mission behind the platform, and the expertise driving its cybersecurity research and engineering.',
};

const EXPERTISE = [
  {
    icon: Bug,
    title: 'Web Security',
    description: 'OWASP Top 10, XSS, SSRF, IDOR, GraphQL security, and API exploitation.',
  },
  {
    icon: Search,
    title: 'OSINT',
    description: 'Subdomain enumeration, social media intelligence, and attack surface mapping.',
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Active Directory attacks, network segmentation, and zero-trust architecture.',
  },
  {
    icon: Code2,
    title: 'Secure Development',
    description: 'TypeScript, Python, Go, Rust. Building security tools and platforms.',
  },
  {
    icon: Bug,
    title: 'Bug Bounty',
    description: 'Top performer on HackerOne with 20+ critical vulnerabilities discovered.',
  },
  {
    icon: BookOpen,
    title: 'Research & Documentation',
    description: 'Publishing in-depth research on cloud security, malware analysis, and AI security.',
  },
];

const VALUES = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every system is designed with security as the foundational principle, not an afterthought.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Open documentation, honest research, and clear communication of findings.',
  },
  {
    icon: Zap,
    title: 'Continuous Learning',
    description: 'The threat landscape evolves constantly. So must our knowledge and tools.',
  },
  {
    icon: Target,
    title: 'Practical Impact',
    description: 'Research and tools that solve real problems for real security professionals.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About CyberOS"
        description="A professional cybersecurity knowledge platform built for research, engineering, and continuous learning."
      />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                <Terminal className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold">The Platform</h2>
                <p className="text-sm text-muted-foreground">CyberOS v2.0</p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              CyberOS is not a portfolio website. It is a long-term cybersecurity
              operating system that integrates research, engineering, documentation,
              and tools into a single scalable ecosystem. The platform serves as a
              trusted hub for security researchers, bug bounty hunters, students,
              and recruiters.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The mission is simple: publish high-quality cybersecurity knowledge
              while maintaining a secure, fast, accessible, and maintainable platform.
              Every piece of content is researched, documented, and reviewed to meet
              enterprise standards.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="border-y border-border bg-surface/30 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
            Core Expertise
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            Specialized knowledge across the cybersecurity domain.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
            Skills Matrix
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            Technologies and tools used across projects and research.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center"
              >
                <h3 className="w-full shrink-0 font-heading font-semibold text-primary sm:w-48">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-surface/30 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
            Timeline
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            Key milestones in the cybersecurity journey.
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
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

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
            Values
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            The principles that guide every decision.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface/50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight">
              Let's connect
            </h2>
            <p className="mt-3 text-muted-foreground">
              Whether you're interested in collaboration, research, or just want
              to talk security, reach out.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/research">Read research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
