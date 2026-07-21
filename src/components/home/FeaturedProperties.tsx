import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { MaskReveal, Reveal } from "../common/Reveal";
import { Magnetic } from "../common/MagneticButton";
import { properties, priceFormatter } from "../../data";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative bg-black px-6 py-24 text-white sm:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
                Featured Properties
              </span>
            </Reveal>
            <MaskReveal className="mt-5">
              <h2 className="font-luxury-serif text-4xl italic leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
                Residences worth discovering
              </h2>
            </MaskReveal>
          </div>
          <Reveal>
            <Magnetic
              as="div"
              className="group hidden items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white sm:flex"
            >
              <Link to="/properties" className="flex items-center gap-2">
                View All Listings
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featured.map((property, i) => (
            <FeaturedCard key={property.id} property={property} index={i} />
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center sm:hidden">
          <Link
            to="/properties"
            className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white"
          >
            View All Listings
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedCard({
  property,
  index,
}: {
  property: (typeof properties)[number];
  index: number;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    gsap.to(imgRef.current, { scale: 1.12, duration: 0.9, ease: "power3.out" });
    gsap.to(cardRef.current, { y: -10, duration: 0.5, ease: "power3.out" });
  };
  const handleLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.9, ease: "power3.out" });
    gsap.to(cardRef.current, { y: 0, duration: 0.5, ease: "power3.out" });
  };

  return (
    <Reveal delay={index * 0.1}>
      <Link
        to="/properties"
        data-cursor="hover"
        ref={cardRef as any}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      >
        <div className="relative h-[24rem] overflow-hidden">
          <img
            ref={imgRef}
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          {property.tag && (
            <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {property.tag}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60">
              {property.location}
            </p>
            <h3 className="mt-2 font-luxury-serif text-2xl italic text-white">
              {property.title}
            </h3>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-light text-white/80">
                {priceFormatter.format(property.price)}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={15} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
