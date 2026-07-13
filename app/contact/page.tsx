import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import {
  ContactForm,
  ContactFAQ,
  ContactLinks,
  AvailabilityInfo,
} from '@/components/features/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch for collaboration, research, consulting, or security inquiries. Secure, simple, and professional communication.',
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get in Touch"
        description="For collaboration, research, consulting, or security inquiries — I'd love to hear from you."
      />

      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Contact form and sidebar */}
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold">Send a Message</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form below and I'll get back to you within 48 hours.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <AvailabilityInfo />
              <div>
                <h3 className="mb-3 font-heading font-semibold">Professional Links</h3>
                <ContactLinks />
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-muted-foreground">
              Common questions about collaboration and communication.
            </p>
            <div className="mt-6">
              <ContactFAQ />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
