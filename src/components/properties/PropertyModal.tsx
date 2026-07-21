import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { BedDouble, Bath, Expand, MapPin, X } from "lucide-react";
import { Property, priceFormatter } from "../../data";
import { Magnetic } from "../common/MagneticButton";

type Props = {
  property: Property | null;
  onClose: () => void;
};

export default function PropertyModal({ property, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
    if (!property) return;

    document.body.style.overflow = "hidden";
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
      );
    });

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [property]);

  if (!property) return null;

  const handleClose = () => {
    gsap.to(panelRef.current, { opacity: 0, y: 30, scale: 0.97, duration: 0.3, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.35, ease: "power2.in", onComplete: onClose });
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_30px_100px_rgba(0,0,0,0.6)] sm:flex-row"
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
        >
          <X size={16} />
        </button>

        <div className="relative h-64 shrink-0 sm:h-auto sm:w-1/2">
          <img
            src={property.gallery[activeImg]}
            alt={property.title}
            className="h-full w-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 flex gap-2 p-4">
            {property.gallery.map((g, i) => (
              <button
                key={g}
                onClick={() => setActiveImg(i)}
                className={`h-14 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-colors ${
                  i === activeImg ? "border-white" : "border-transparent opacity-60"
                }`}
              >
                <img src={g} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-7 sm:p-9">
          {property.tag && (
            <span className="mb-3 w-fit rounded-full border border-white/25 px-3 py-1 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/70">
              {property.tag}
            </span>
          )}
          <p className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
            <MapPin size={12} /> {property.location}
          </p>
          <h2 className="mt-2 font-luxury-serif text-3xl italic text-white">{property.title}</h2>

          <div className="mt-5 flex items-center gap-6 border-y border-white/10 py-4 text-sm font-light text-white/60">
            <span className="flex items-center gap-2"><BedDouble size={16} /> {property.bedrooms} Beds</span>
            <span className="flex items-center gap-2"><Bath size={16} /> {property.bathrooms} Baths</span>
            <span className="flex items-center gap-2"><Expand size={16} /> {property.area.toLocaleString()} sqft</span>
          </div>

          <p className="mt-5 flex-1 text-sm font-light leading-relaxed text-white/55">
            {property.description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="font-luxury-serif text-2xl italic text-white">
              {priceFormatter.format(property.price)}
            </span>
            <Magnetic
              as="button"
              onClick={handleClose}
              className="rounded-full bg-white px-6 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-85"
            >
              Enquire Now
            </Magnetic>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
