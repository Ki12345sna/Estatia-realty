import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Plus } from "lucide-react";
import { MaskReveal, Reveal, StaggerReveal } from "../components/common/Reveal";
import { Magnetic } from "../components/common/MagneticButton";
import ContactForm from "../components/contact/ContactForm";
import { faqs } from "../data";

const info = [
  { icon: MapPin, title: "Office Address", lines: ["One Park Avenue, Suite 4200", "New York, NY 10016"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon – Fri: 9am – 7pm", "Sat: By Appointment"] },
  { icon: Phone, title: "Phone", lines: ["+1 (800) 555-1234"] },
  { icon: Mail, title: "Email", lines: ["hello@estatia.com"] },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white">
      {/* Large hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden px-6 pb-16 pt-40 sm:px-10">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="https://images.pexels.com/photos/35295992/pexels-photo-35295992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600"
            alt="Estatia contact"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/50">
              Get in Touch
            </span>
          </Reveal>
          <MaskReveal className="mt-5">
            <h1 className="max-w-3xl font-luxury-serif text-5xl italic leading-[1.05] sm:text-6xl lg:text-7xl">
              Let's find your next address
            </h1>
          </MaskReveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/50 sm:text-base">
              Whether buying, selling, or simply exploring — our advisors are
              here to guide you with discretion and care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="px-6 py-16 sm:px-10">
        <StaggerReveal className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" y={30}>
          {info.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="rounded-2xl border border-white/10 p-7 transition-colors duration-500 hover:border-white/30">
              <Icon size={22} strokeWidth={1.2} className="text-white/60" />
              <h4 className="mt-5 text-sm font-medium uppercase tracking-[0.15em] text-white">{title}</h4>
              <div className="mt-2 space-y-1">
                {lines.map((l) => (
                  <p key={l} className="text-sm font-light text-white/45">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </section>

      {/* Form + Map */}
      <section className="px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="min-h-[26rem] overflow-hidden rounded-2xl border border-white/10 lg:min-h-full">
            <iframe
              title="Estatia office location"
              src="https://www.google.com/maps?q=One%20Park%20Avenue%2C%20New%20York%2C%20NY&output=embed"
              className="h-full min-h-[26rem] w-full grayscale invert-[92%] contrast-[90%] lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      {/* Book Consultation CTA */}
      <section className="relative overflow-hidden px-6 py-24 text-center sm:px-10 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <MaskReveal>
            <h2 className="font-luxury-serif text-4xl italic leading-[1.15] sm:text-5xl">
              Prefer to speak directly?
            </h2>
          </MaskReveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-sm font-light text-white/50">
              Book a complimentary private consultation with one of our advisors.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-8">
            <Magnetic
              as="a"
              href="tel:+18005551234"
              className="inline-block rounded-full bg-white px-9 py-4 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-black transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
            >
              Book Consultation
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              Frequently Asked
            </span>
          </Reveal>
          <MaskReveal className="mt-5 text-center">
            <h2 className="font-luxury-serif text-3xl italic sm:text-4xl">Questions, answered</h2>
          </MaskReveal>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-luxury-serif text-lg italic text-white sm:text-xl">
                    {faq.question}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-white/50 transition-transform duration-300 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    openFaq === i ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-sm font-light leading-relaxed text-white/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
