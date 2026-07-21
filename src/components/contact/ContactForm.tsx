import { useRef, useState } from "react";
import gsap from "gsap";
import { Check, Loader2 } from "lucide-react";
import { Magnetic } from "../common/MagneticButton";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const successRef = useRef<HTMLDivElement>(null);
  const checkRef = useRef<SVGSVGElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      requestAnimationFrame(() => {
        gsap.fromTo(
          successRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
        gsap.fromTo(
          checkRef.current,
          { scale: 0, rotate: -45 },
          { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2.5)", delay: 0.15 }
        );
      });
      e.currentTarget?.reset?.();
      setTimeout(() => setStatus("idle"), 4500);
    }, 1400);
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-10">
      {status === "success" && (
        <div
          ref={successRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-black/95 p-10 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10">
            <Check ref={checkRef} size={28} className="text-white" />
          </div>
          <p className="font-luxury-serif text-2xl italic text-white">Message sent</p>
          <p className="max-w-xs text-sm font-light text-white/50">
            Thank you for reaching out — a private advisor will be in touch within 24 hours.
          </p>
        </div>
      )}

      <h3 className="font-luxury-serif text-2xl italic text-white">Send an Inquiry</h3>
      <p className="mt-2 text-sm font-light text-white/45">
        Share a few details and our team will respond promptly.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Full Name</label>
          <input required type="text" placeholder="Jane Doe" className="border-b border-white/15 bg-transparent py-2.5 text-sm text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Email Address</label>
          <input required type="email" placeholder="jane@email.com" className="border-b border-white/15 bg-transparent py-2.5 text-sm text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Phone</label>
          <input type="tel" placeholder="+1 (___) ___-____" className="border-b border-white/15 bg-transparent py-2.5 text-sm text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Interested In</label>
          <select className="border-b border-white/15 bg-transparent py-2.5 text-sm text-white focus:border-white/50 focus:outline-none">
            <option className="bg-black">Buying a Residence</option>
            <option className="bg-black">Selling a Property</option>
            <option className="bg-black">Investment Advisory</option>
            <option className="bg-black">Private Consultation</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Message</label>
          <textarea
            required
            rows={4}
            placeholder="Tell us about what you're looking for…"
            className="resize-none border-b border-white/15 bg-transparent py-2.5 text-sm text-white placeholder:text-white/25 focus:border-white/50 focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <Magnetic
            as="div"
            className="w-full sm:w-auto"
          >
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-black transition-opacity hover:opacity-85 disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </Magnetic>
        </div>
      </form>
    </div>
  );
}
