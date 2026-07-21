import { useNavigate } from "react-router-dom";
import { Award } from "lucide-react";
import { MaskReveal, Reveal, StaggerReveal } from "../common/Reveal";
import { Magnetic } from "../common/MagneticButton";
import { awards } from "../../data";

export default function AwardsCTA() {
  const navigate = useNavigate();

  return (
    <>
      {/* Awards & Recognition */}
      <section className="relative bg-black px-6 py-24 text-white sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              Awards &amp; Recognition
            </span>
          </Reveal>

          <StaggerReveal
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            y={30}
          >
            {awards.map((award) => (
              <div
                key={award.title}
                className="group flex flex-col items-center gap-4 rounded-xl border border-white/10 px-6 py-10 text-center transition-colors duration-500 hover:border-white/40"
              >
                <Award
                  size={26}
                  strokeWidth={1.2}
                  className="text-white/50 transition-colors duration-500 group-hover:text-white"
                />
                <div>
                  <p className="font-luxury-serif text-lg italic text-white">{award.title}</p>
                  <p className="mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
                    {award.org} · {award.year}
                  </p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <MaskReveal>
            <h2 className="font-luxury-serif text-4xl italic leading-[1.15] sm:text-5xl lg:text-6xl">
              Your next chapter begins with the right address
            </h2>
          </MaskReveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-white/50">
              Speak with a private advisor and discover residences curated
              exclusively for you.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic
              as="button"
              onClick={() => navigate("/contact")}
              className="rounded-full bg-white px-9 py-4 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-black transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
            >
              Schedule a Visit
            </Magnetic>
            <Magnetic
              as="button"
              onClick={() => navigate("/properties")}
              className="rounded-full border border-white/30 px-9 py-4 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-500 hover:border-white"
            >
              Explore Properties
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}
