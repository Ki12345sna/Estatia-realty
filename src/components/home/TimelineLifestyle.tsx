import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { MaskReveal, Reveal } from "../common/Reveal";
import { Magnetic } from "../common/MagneticButton";
import { timeline } from "../../data";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineLifestyle() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth + 100;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
        },
      });

      return () => tween.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Pinned horizontal timeline */}
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden bg-black text-white"
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              Our Journey
            </span>
          </Reveal>
          <MaskReveal className="mt-4">
            <h2 className="max-w-xl font-luxury-serif text-3xl italic leading-[1.15] sm:text-4xl lg:text-5xl">
              Two decades of shaping the luxury market
            </h2>
          </MaskReveal>

          <div className="mt-14 h-px w-full bg-white/10">
            <div
              ref={progressRef}
              className="h-px w-full origin-left scale-x-0 bg-white/70"
            />
          </div>

          <div ref={trackRef} className="mt-14 flex w-max gap-8 sm:gap-14">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="w-[76vw] shrink-0 border-t border-white/10 pt-8 sm:w-[26rem]"
              >
                <span className="font-luxury-serif text-5xl italic text-white/90 sm:text-6xl">
                  {item.year}
                </span>
                <h3 className="mt-5 text-lg font-medium uppercase tracking-[0.1em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle + Video banner */}
      <section className="relative bg-black px-6 py-24 text-white sm:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
                  The Estatia Lifestyle
                </span>
              </Reveal>
              <MaskReveal className="mt-5">
                <h2 className="font-luxury-serif text-4xl italic leading-[1.15] sm:text-5xl">
                  More than a residence — a way of living
                </h2>
              </MaskReveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/50">
                  Every Estatia property is chosen not only for its
                  architecture, but for the life it enables — private,
                  considered, and quietly extraordinary. From concierge
                  services to bespoke interior curation, we design an
                  experience around the home.
                </p>
              </Reveal>
              <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-10">
                {[
                  ["24/7", "Concierge"],
                  ["150+", "Partner Vendors"],
                  ["Private", "Viewings Only"],
                ].map(([a, b]) => (
                  <div key={b}>
                    <p className="font-luxury-serif text-2xl italic">{a}</p>
                    <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
                      {b}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>

            {/* Video banner */}
            <Reveal delay={0.1} className="group relative h-[24rem] overflow-hidden rounded-2xl border border-white/10 sm:h-[30rem]">
              <img
                src="https://images.pexels.com/photos/17007767/pexels-photo-17007767.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt="Estatia lifestyle film preview"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/55" />
              <Magnetic
                as="button"
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black"
              >
                <Play size={22} className="ml-1" fill="currentColor" />
              </Magnetic>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/70">
                  Watch
                </p>
                <p className="mt-1 font-luxury-serif text-xl italic text-white">
                  A Film on Modern Luxury Living
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
