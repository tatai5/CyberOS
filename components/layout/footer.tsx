import Link from 'next/link';
import { Shield, Github, Linkedin, Mail, FileText } from 'lucide-react';

const FOOTER_LINKS = {
  Platform: [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Projects', href: '/projects' },
    { label: 'Writeups', href: '/writeups' },
  ],
  Resources: [
    { label: 'Tools', href: '/tools' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Admin', href: '/admin' },
  ],
};

const SOCIAL_LINKS = [
    { label: 'GitHub', href: 'https://github.com', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Email', href: 'mailto:contact@cyberos.io', icon: Mail },
    { label: 'Resume', href: '#', icon: FileText },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <Shield className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <span className="font-heading text-lg font-semibold tracking-tight">
                Cyber<span className="text-primary">OS</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Research. Learn. Build. Secure. A professional cybersecurity
              knowledge platform.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CyberOS. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with security, engineered for knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
}
