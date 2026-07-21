import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "../../utils/cn";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "div" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
};

/** Wraps any element with a premium magnetic-hover interaction. */
export function Magnetic({
  children,
  className,
  strength = 0.35,
  as = "button",
  href,
  onClick,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      xTo(relX * strength);
      yTo(relY * strength);
    };
    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      className={cn("inline-flex will-change-transform", className)}
    >
      {children}
    </Tag>
  );
}
