import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CyberOS — Research. Learn. Build. Secure.',
    template: '%s | CyberOS',
  },
  description:
    'CyberOS is a professional cybersecurity knowledge platform combining research, engineering, documentation, and tools into one scalable ecosystem.',
  keywords: [
    'cybersecurity',
    'security research',
    'bug bounty',
    'web security',
    'network security',
    'OSINT',
    'reverse engineering',
    'security tools',
  ],
  authors: [{ name: 'CyberOS' }],
  openGraph: {
    title: 'CyberOS — Research. Learn. Build. Secure.',
    description:
      'A professional cybersecurity knowledge platform for research, engineering, and documentation.',
    type: 'website',
    siteName: 'CyberOS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberOS — Research. Learn. Build. Secure.',
    description:
      'A professional cybersecurity knowledge platform for research, engineering, and documentation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
