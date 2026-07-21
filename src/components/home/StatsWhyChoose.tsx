import { Counter } from "../common/Counter";
import { MaskReveal, Reveal, StaggerReveal } from "../common/Reveal";
import { stats, whyChooseUs } from "../../data";

export default function StatsWhyChoose() {
  return (
    <section className="relative bg-black px-6 py-24 text-white sm:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Stats */}
        <StaggerReveal
          className="grid grid-cols-2 gap-8 border-b border-white/10 pb-20 sm:gap-10 lg:grid-cols-4 lg:pb-24"
          itemClassName="text-center lg:text-left"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-luxury-serif text-4xl italic sm:text-5xl lg:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/45">
                {s.label}
              </p>
            </div>
          ))}
        </StaggerReveal>

        {/* Why Choose Us */}
        <div className="mt-20 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
                Why Choose Us
              </span>
            </Reveal>
            <MaskReveal className="mt-5">
              <h2 className="font-luxury-serif text-4xl italic leading-[1.15] sm:text-5xl lg:text-[3.4rem]">
                A standard of excellence, quietly upheld.
              </h2>
            </MaskReveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/50">
                We represent a select portfolio of the world's most
                distinguished residences — each chosen for architectural
                integrity, provenance, and enduring value.
              </p>
            </Reveal>
          </div>

          <StaggerReveal
            className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2"
            itemClassName=""
            y={30}
          >
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className="group border-t border-white/10 pt-6 transition-colors duration-500 hover:border-white/40"
              >
                <span className="text-xs font-light text-white/30">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-luxury-serif text-xl italic text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
