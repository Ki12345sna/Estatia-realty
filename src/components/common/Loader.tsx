import { useEffect, useRef } from "react";
import gsap from "gsap";

type LoaderProps = {
  onComplete: () => void;
};

/** Cinematic luxury loading screen shown once on first mount. */
export default function Loader({ onComplete }: LoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(rootRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            onComplete,
          });
        },
      });

      gsap.set(wordRef.current, { opacity: 0, y: 20 });
      gsap.set(lineRef.current, { scaleX: 0 });

      tl.to(wordRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .to(
          obj,
          {
            val: 100,
            duration: 2.1,
            ease: "power2.inOut",
            onUpdate: () => {
              if (countRef.current) countRef.current.textContent = Math.floor(obj.val).toString();
              if (barRef.current) barRef.current.style.width = `${obj.val}%`;
            },
          },
          "-=0.3"
        )
        .to(lineRef.current, { scaleX: 1, duration: 2.1, ease: "power2.inOut" }, "<")
        .to({}, { duration: 0.35 });
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black text-white"
    >
      <div ref={wordRef} className="mb-8 flex flex-col items-center gap-3">
        <span className="font-luxury-serif text-3xl italic tracking-wide sm:text-4xl">
          Estatia
        </span>
        <span className="text-[0.6rem] uppercase tracking-[0.5em] text-white/50">
          Luxury Real Estate
        </span>
      </div>

      <div className="relative h-px w-56 overflow-hidden bg-white/10 sm:w-72">
        <div ref={lineRef} className="h-full w-full origin-left bg-white/70" />
      </div>
      <div ref={barRef} className="sr-only" />

      <div className="mt-6 flex items-baseline gap-1 text-xs tracking-widest text-white/60">
        <span ref={countRef}>0</span>
        <span>%</span>
      </div>
    </div>
  );
}
