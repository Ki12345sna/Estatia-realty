import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../utils/cn";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  start?: string;
};

/** Fade + rise reveal on scroll, used across the site for section entrances. */
export function Reveal({
  children,
  className,
  as = "div",
  y = 48,
  delay = 0,
  duration = 1,
  once = true,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as any;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [y, delay, duration, once, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

type MaskRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  start?: string;
};

/** Clip-path mask reveal, ideal for headings and images. */
export function MaskReveal({ children, className, delay = 0, start = "top 85%" }: MaskRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: 110, scale: 1.06 },
        {
          yPercent: 0,
          scale: 1,
          duration: 1.3,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wrap,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, wrapRef);
    return () => ctx.revert();
  }, [delay, start]);

  return (
    <div ref={wrapRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}

type StaggerProps = {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  y?: number;
  stagger?: number;
  start?: string;
};

/** Staggered fade-up for lists of children (cards, grid items, etc). */
export function StaggerReveal({
  children,
  className,
  itemClassName,
  y = 40,
  stagger = 0.12,
  start = "top 85%",
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [y, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div key={i} className={itemClassName}>
          {child}
        </div>
      ))}
    </div>
  );
}
