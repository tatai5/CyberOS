'use client';

import * as React from 'react';
import { toast } from 'sonner';
import { Mail, Github, Linkedin, FileText, Send, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const FAQ = [
  {
    q: 'What types of collaboration do you accept?',
    a: 'Research collaborations, security audits, tool development, and knowledge sharing. Reach out with details about your project.',
  },
  {
    q: 'How quickly do you respond?',
    a: 'Typically within 48 hours. For urgent security matters, mention it in the subject line.',
  },
  {
    q: 'Do you offer consulting services?',
    a: 'Consulting services are available on a case-by-case basis. Use the contact form to discuss your needs.',
  },
  {
    q: 'Can I report a security vulnerability?',
    a: 'Yes. Please include details about the vulnerability, reproduction steps, and any relevant screenshots or code.',
  },
];

export function ContactForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success('Message sent successfully. I will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-error">*</span>
          </Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-error">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">
          Subject <span className="text-error">*</span>
        </Label>
        <Input
          id="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="What is this about?"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-error">*</span>
        </Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project, question, or collaboration idea..."
          className="min-h-[160px]"
          required
        />
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export function ContactFAQ() {
  return (
    <div className="space-y-4">
      {FAQ.map((item) => (
        <div
          key={item.q}
          className="rounded-xl border border-border bg-card p-5"
        >
          <h3 className="font-heading font-semibold">{item.q}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
        </div>
      ))}
    </div>
  );
}

export function ContactLinks() {
  const links = [
    { label: 'Email', value: 'contact@cyberos.io', href: 'mailto:contact@cyberos.io', icon: Mail },
    { label: 'GitHub', value: 'github.com/cyberos', href: 'https://github.com', icon: Github },
    { label: 'LinkedIn', value: 'linkedin.com/in/cyberos', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Resume', value: 'Download PDF', href: '#', icon: FileText },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
            <link.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{link.label}</p>
            <p className="text-sm font-medium text-foreground">{link.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export function AvailabilityInfo() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-primary" />
        <h3 className="font-heading font-semibold">Availability</h3>
      </div>
      <div className="mt-3 space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-success" />
          Open for collaboration
        </p>
        <p className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-info" />
          Response within 48 hours
        </p>
        <p className="flex items-center gap-2">
          <Globe className="h-3.5 w-3.5" />
          Remote / Worldwide
        </p>
      </div>
    </div>
  );
}
