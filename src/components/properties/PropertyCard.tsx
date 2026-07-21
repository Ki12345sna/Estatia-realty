import { useRef, useState } from "react";
import gsap from "gsap";
import { BedDouble, Bath, Expand, Heart, MapPin, Search } from "lucide-react";
import { Property, priceFormatter } from "../../data";

type Props = {
  property: Property;
  view: "grid" | "list";
  index: number;
  favorite: boolean;
  onToggleFavorite: () => void;
  onPreview: () => void;
};

export default function PropertyCard({
  property,
  view,
  favorite,
  onToggleFavorite,
  onPreview,
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [heartPop, setHeartPop] = useState(false);

  const handleEnter = () => gsap.to(imgRef.current, { scale: 1.1, duration: 0.9, ease: "power3.out" });
  const handleLeave = () => gsap.to(imgRef.current, { scale: 1, duration: 0.9, ease: "power3.out" });

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite();
    setHeartPop(true);
    setTimeout(() => setHeartPop(false), 300);
  };

  if (view === "list") {
    return (
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="group flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:flex-row sm:p-5"
      >
        <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-72">
          <img ref={imgRef} src={property.image} alt={property.title} loading="lazy" className="h-full w-full object-cover" />
          {property.tag && (
            <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {property.tag}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between py-1">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                  <MapPin size={12} /> {property.location}
                </p>
                <h3 className="mt-2 font-luxury-serif text-2xl italic text-white">{property.title}</h3>
              </div>
              <button
                onClick={handleFavorite}
                aria-label="Save to favorites"
                data-cursor="hover"
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  favorite ? "border-white bg-white text-black" : "border-white/20 text-white/60 hover:border-white hover:text-white"
                }`}
              >
                <Heart size={16} className={heartPop ? "scale-125" : ""} fill={favorite ? "currentColor" : "none"} />
              </button>
            </div>
            <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-white/45 line-clamp-2">
              {property.description}
            </p>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-5 text-xs font-light text-white/55">
              <span className="flex items-center gap-1.5"><BedDouble size={14} /> {property.bedrooms}</span>
              <span className="flex items-center gap-1.5"><Bath size={14} /> {property.bathrooms}</span>
              <span className="flex items-center gap-1.5"><Expand size={14} /> {property.area.toLocaleString()} sqft</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-luxury-serif text-lg italic text-white">{priceFormatter.format(property.price)}</span>
              <button
                onClick={onPreview}
                data-cursor="hover"
                className="rounded-full border border-white/25 px-5 py-2.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-white"
              >
                Quick View
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
    >
      <div className="relative h-72 overflow-hidden">
        <img ref={imgRef} src={property.image} alt={property.title} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {property.tag && (
          <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {property.tag}
          </span>
        )}

        <button
          onClick={handleFavorite}
          aria-label="Save to favorites"
          data-cursor="hover"
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
            favorite ? "border-white bg-white text-black" : "border-white/30 bg-black/30 text-white hover:bg-white hover:text-black"
          } ${heartPop ? "scale-125" : "scale-100"}`}
        >
          <Heart size={15} fill={favorite ? "currentColor" : "none"} />
        </button>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <button
            onClick={onPreview}
            data-cursor="hover"
            className="flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-black shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Search size={13} /> Quick Preview
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-white/45">
          <MapPin size={11} /> {property.location}
        </p>
        <h3 className="mt-2 font-luxury-serif text-xl italic text-white">{property.title}</h3>

        <div className="mt-4 flex items-center gap-4 text-xs font-light text-white/50">
          <span className="flex items-center gap-1.5"><BedDouble size={14} /> {property.bedrooms}</span>
          <span className="flex items-center gap-1.5"><Bath size={14} /> {property.bathrooms}</span>
          <span className="flex items-center gap-1.5"><Expand size={14} /> {property.area.toLocaleString()}</span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="font-luxury-serif text-lg italic text-white">{priceFormatter.format(property.price)}</span>
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">{property.type}</span>
        </div>
      </div>
    </div>
  );
}
