import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import gsap from "gsap";
import { Magnetic } from "../common/MagneticButton";

/** Floating contact bubble available across all pages, expands into quick actions. */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!panelRef.current) return;
    if (open) {
      gsap.set(panelRef.current, { display: "flex" });
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 16, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
      );
    } else if (panelRef.current.style.display !== "none") {
      gsap.to(panelRef.current, {
        opacity: 0,
        y: 16,
        scale: 0.94,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => gsap.set(panelRef.current, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <div className="fixed bottom-6 right-5 z-[90] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <div
        ref={panelRef}
        style={{ display: "none" }}
        className="w-64 flex-col gap-3 rounded-2xl border border-white/10 bg-black/80 p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <p className="font-luxury-serif text-lg italic">Let's talk</p>
        <p className="text-xs font-light text-white/50">
          Speak with a private advisor about any residence.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
            setOpen(false);
          }}
          className="mt-1 rounded-full bg-white px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-85"
        >
          Book Consultation
        </button>
        <a
          href="tel:+18005551234"
          className="text-center text-[0.65rem] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
        >
          +1 (800) 555-1234
        </a>
      </div>

      <Magnetic
        as="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_10px_40px_rgba(255,255,255,0.25)] transition-transform duration-300"
      >
        {open ? <X size={20} strokeWidth={1.5} /> : <MessageCircle size={20} strokeWidth={1.5} />}
      </Magnetic>
    </div>
  );
}
