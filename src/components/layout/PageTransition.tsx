import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = { children: React.ReactNode };

/** Smooth cross-fade + rise transition between routes, refreshing ScrollTrigger on change. */
export default function PageTransition({ children }: Props) {
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );
      if (veilRef.current) {
        gsap.fromTo(
          veilRef.current,
          { scaleY: 1 },
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 0.8,
            ease: "power4.inOut",
          }
        );
      }
    });

    const id = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      cancelAnimationFrame(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className="relative">
      <div
        ref={veilRef}
        className="pointer-events-none fixed inset-0 z-[200] bg-black"
        aria-hidden="true"
      />
      <div ref={wrapRef} key={location.pathname}>
        {children}
      </div>
    </div>
  );
}
