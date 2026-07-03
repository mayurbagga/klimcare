import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';

export function ContactPage() {
  const c = siteConfig.contact;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const infoItems = [
    { icon: MapPin, label: 'Location', value: c.address },
    { icon: Mail, label: 'Email', value: c.email, href: `mailto:${c.email}` },
    { icon: Phone, label: 'Phone Number', value: c.phone, href: `tel:${c.phone}` },
    { icon: Clock, label: 'Working Hours', value: c.hours },
  ];

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} description={c.description} image={c.image} />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Info cards */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-neutral-900">We can help</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Reach out through any of the channels below. Our team is ready to assist with your care and staffing needs.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {infoItems.map((item, i) => {
                  const content = (
                    <div className="group flex items-start gap-4 rounded-2xl border border-primary-100 bg-white p-5 transition-all duration-300 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{item.label}</div>
                        <div className="mt-1 text-sm font-medium text-neutral-700">{item.value}</div>
                      </div>
                    </div>
                  );
                  return (
                    <Reveal key={item.label} delay={i * 100}>
                      {item.href ? <a href={item.href} className="block">{content}</a> : content}
                    </Reveal>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <Reveal delay={400}>
                <div className="mt-6 overflow-hidden rounded-2xl border border-primary-100 shadow-lg">
                  <iframe
                    title="Location map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.09%2C51.52%2C-0.06%2C51.54&layer=mapnik"
                    className="h-56 w-full"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={200} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-3xl border border-primary-100 bg-white p-7 shadow-xl shadow-primary-500/5 sm:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-neutral-900">Send us a message</h3>
                    <p className="text-sm text-neutral-500">We'll get back to you within 24 hours.</p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 outline-none transition-all placeholder:text-neutral-400 focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 outline-none transition-all placeholder:text-neutral-400 focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-neutral-700">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What is this about?"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 outline-none transition-all placeholder:text-neutral-400 focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100"
                  />
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-neutral-700">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your care needs..."
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 outline-none transition-all placeholder:text-neutral-400 focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100"
                  />
                </div>
                <button type="submit" className="btn-primary mt-6 w-full group">
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
                {sent && (
                  <p className="mt-4 text-center text-sm font-medium text-primary-600 animate-fade-in">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
