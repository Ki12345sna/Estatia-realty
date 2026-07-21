import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { MaskReveal, Reveal, StaggerReveal } from "../common/Reveal";
import { Magnetic } from "../common/MagneticButton";
import { locations, testimonials } from "../../data";

export default function LocationsTestimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const next = () => setActive((v) => (v + 1) % testimonials.length);
  const prev = () => setActive((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      {/* Featured Locations */}
      <section className="relative bg-black px-6 py-24 text-white sm:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              Featured Locations
            </span>
          </Reveal>
          <MaskReveal className="mt-5">
            <h2 className="max-w-xl font-luxury-serif text-4xl italic leading-[1.1] sm:text-5xl">
              Where our residences call home
            </h2>
          </MaskReveal>

          <StaggerReveal
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            y={35}
          >
            {locations.map((loc) => (
              <div
                key={loc.name}
                data-cursor="hover"
                className="group relative h-72 overflow-hidden rounded-xl border border-white/10"
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-luxury-serif text-xl italic text-white">{loc.name}</h3>
                  <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-white/50">
                    {loc.country} · {loc.count} Listings
                  </p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-black px-6 py-24 text-white sm:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              Testimonials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <Quote className="mx-auto mt-8 text-white/20" size={38} strokeWidth={1} />
          </Reveal>

          <div className="relative mt-6 min-h-[13rem] sm:min-h-[10rem]">
            <p
              key={active}
              className="mx-auto max-w-2xl font-luxury-serif text-2xl italic leading-relaxed text-white/90 sm:text-3xl animate-[fadeIn_0.6s_ease]"
            >
              "{t.quote}"
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <img
              key={t.image}
              src={t.image}
              alt={t.name}
              className="h-14 w-14 rounded-full object-cover ring-1 ring-white/20"
            />
            <div>
              <p className="text-sm font-medium text-white">{t.name}</p>
              <p className="text-xs font-light text-white/45">{t.role}</p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Magnetic
              as="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </Magnetic>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-white" : "w-1.5 bg-white/25"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Magnetic
              as="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
