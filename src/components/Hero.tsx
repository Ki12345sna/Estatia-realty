import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const secondaryBtnRef = useRef<HTMLButtonElement>(null);

  // Entrance + scroll-driven animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bgRef.current, { scale: 1.18 });
      gsap.set(
        [eyebrowRef.current, dividerRef.current, subRef.current, scrollRef.current],
        { opacity: 0, y: 24 }
      );
      gsap.set([line1Ref.current, line2Ref.current], { yPercent: 120 });
      if (ctaRef.current) {
        gsap.set(Array.from(ctaRef.current.children), { opacity: 0, y: 24 });
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      tl.to(bgRef.current, { opacity: 1, duration: 1.6, ease: "power2.out" }, 0)
        .to(dividerRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
        .to(
          line1Ref.current,
          { yPercent: 0, duration: 1.1, ease: "power4.out" },
          0.55
        )
        .to(
          line2Ref.current,
          { yPercent: 0, duration: 1.1, ease: "power4.out" },
          0.68
        )
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.95)
        .to(
          ctaRef.current ? Array.from(ctaRef.current.children) : [],
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.14 },
          1.05
        )
        .to(scrollRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.3);

      // Cinematic background zoom tied to scroll
      gsap.to(bgRef.current, {
        scale: 1.34,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content parallax / fade on scroll
      gsap.to(contentRef.current, {
        yPercent: -22,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "65% top",
          scrub: 1,
        },
      });

      // Overlay deepens on scroll for cinematic fade
      gsap.to(overlayRef.current, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Scroll indicator fades out quickly
      gsap.to(scrollRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "15% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle mouse parallax on background + content
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const xToBg = gsap.quickTo(bgRef.current, "xPercent", {
      duration: 1.4,
      ease: "power3.out",
    });
    const yToBg = gsap.quickTo(bgRef.current, "yPercent", {
      duration: 1.4,
      ease: "power3.out",
    });
    const xToContent = gsap.quickTo(contentRef.current, "x", {
      duration: 1.2,
      ease: "power3.out",
    });
    const yToContent = gsap.quickTo(contentRef.current, "y", {
      duration: 1.2,
      ease: "power3.out",
    });

    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const relX = (e.clientX / innerWidth - 0.5) * 2;
      const relY = (e.clientY / innerHeight - 0.5) * 2;

      xToBg(relX * -1.6);
      yToBg(relY * -1.6);
      xToContent(relX * -10);
      yToContent(relY * -6);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Magnetic hover for CTA buttons
  useEffect(() => {
    const buttons = [primaryBtnRef.current, secondaryBtnRef.current];
    const cleanups: Array<() => void> = [];

    buttons.forEach((btn) => {
      if (!btn) return;
      const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });

      const handleMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        xTo(relX * 0.28);
        yTo(relY * 0.45);
      };
      const handleLeave = () => {
        xTo(0);
        yTo(0);
      };

      btn.addEventListener("mousemove", handleMove);
      btn.addEventListener("mouseleave", handleLeave);
      cleanups.push(() => {
        btn.removeEventListener("mousemove", handleMove);
        btn.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 origin-center opacity-0 will-change-transform"
      >
        <img
          src="/images/hero-villa.jpg"
          alt="Modern luxury villa with reflective lake and forest surroundings"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Dark cinematic overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80 opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_10vw_2vw_rgba(0,0,0,0.55)]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center sm:px-10"
      >
        <span
          ref={dividerRef}
          className="mb-5 block h-px w-14 bg-white/50 sm:w-20"
        />
        <span
          ref={eyebrowRef}
          className="mb-6 inline-block text-[0.65rem] font-medium uppercase tracking-[0.5em] text-white/70 sm:text-xs"
        >
          Estatia Real Estate
        </span>

        <h1 className="font-luxury-serif text-[2.6rem] leading-[1.08] text-white sm:text-6xl md:text-[5.5rem] md:leading-[1.05] lg:text-[6.5rem]">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="block">
              Find Your
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              ref={line2Ref}
              className="block font-light italic text-white/95"
            >
              Perfect Home
            </span>
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-8 max-w-md text-sm font-light leading-relaxed tracking-wide text-white/70 sm:max-w-xl sm:text-base md:text-lg"
        >
          Discover handpicked residences where architecture meets nature —
          curated for those who seek timeless elegance and quiet luxury.
        </p>

        <div
          ref={ctaRef}
          className="mt-12 flex flex-col items-center gap-4 sm:mt-14 sm:flex-row sm:gap-6"
        >
          <button
            ref={primaryBtnRef}
            className="group relative overflow-hidden bg-white px-9 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-black transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] sm:px-10 sm:py-4"
          >
            <span className="relative z-10 transition-colors duration-500">
              Explore Properties
            </span>
            <span className="absolute inset-0 -translate-x-full bg-black/10 transition-transform duration-500 group-hover:translate-x-0" />
          </button>

          <button
            ref={secondaryBtnRef}
            className="group relative overflow-hidden border border-white/40 px-9 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white backdrop-blur-[2px] transition-colors duration-500 hover:border-white sm:px-10 sm:py-4"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative transition-colors duration-500 group-hover:text-black">
              Schedule a Visit
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-10"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-white/50">
          Scroll
        </span>
        <div className="flex h-9 w-[1.5px] items-start overflow-hidden bg-white/20 sm:h-11">
          <div className="h-full w-full origin-top scale-y-0 animate-scroll-line bg-white/80" />
        </div>
      </div>
    </section>
  );
}
