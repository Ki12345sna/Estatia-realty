import { useState } from "react";
import { Link } from "react-router-dom";
import { MaskReveal, Reveal } from "../common/Reveal";
import { categories, properties } from "../../data";

export default function ShowcaseCategories() {
  const [active, setActive] = useState(0);
  const activeProperty = properties[active % properties.length];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
            Luxury Showcase
          </span>
        </Reveal>
        <MaskReveal className="mt-5">
          <h2 className="max-w-2xl font-luxury-serif text-4xl italic leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            An immersive look into extraordinary living
          </h2>
        </MaskReveal>

        {/* Showcase image with crossfade */}
        <Reveal delay={0.15} className="relative mt-14 h-[26rem] overflow-hidden rounded-2xl border border-white/10 sm:h-[32rem] lg:h-[40rem]">
          {properties.slice(0, 5).map((p, i) => (
            <img
              key={p.id}
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out"
              style={{ opacity: i === active % 5 ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-7 sm:p-10">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60">
              {activeProperty.location}
            </p>
            <h3 className="font-luxury-serif text-3xl italic sm:text-4xl">
              {activeProperty.title}
            </h3>
            <Link
              to="/properties"
              className="mt-2 inline-block w-fit border-b border-white/40 pb-1 text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-white hover:text-white"
            >
              Discover the residence
            </Link>
          </div>
        </Reveal>

        {/* Interactive categories */}
        <div className="mt-16">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              Explore by Category
            </span>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                data-cursor="hover"
                className="group relative h-52 overflow-hidden rounded-xl border border-white/10 text-left transition-transform duration-500 hover:-translate-y-1.5 sm:h-64"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h4 className="font-luxury-serif text-lg italic text-white sm:text-xl">
                    {cat.name}
                  </h4>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                    {cat.count} Listings
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
