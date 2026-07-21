import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MaskReveal, Reveal, StaggerReveal } from "../components/common/Reveal";
import Filters, { DEFAULT_FILTERS, FilterState } from "../components/properties/Filters";
import PropertyCard from "../components/properties/PropertyCard";
import PropertyModal from "../components/properties/PropertyModal";
import { properties, Property } from "../data";

const PAGE_SIZE = 6;

function SkeletonCard({ view }: { view: "grid" | "list" }) {
  if (view === "list") {
    return (
      <div className="flex animate-pulse flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row">
        <div className="h-56 w-full shrink-0 rounded-xl bg-white/5 sm:h-44 sm:w-72" />
        <div className="flex-1 space-y-4 py-2">
          <div className="h-3 w-1/3 rounded bg-white/5" />
          <div className="h-6 w-2/3 rounded bg-white/5" />
          <div className="h-3 w-full rounded bg-white/5" />
          <div className="h-3 w-4/5 rounded bg-white/5" />
        </div>
      </div>
    );
  }
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="h-72 bg-white/5" />
      <div className="space-y-4 p-6">
        <div className="h-3 w-1/2 rounded bg-white/5" />
        <div className="h-5 w-3/4 rounded bg-white/5" />
        <div className="h-3 w-full rounded bg-white/5" />
      </div>
    </div>
  );
}

export default function Properties() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>({
    ...DEFAULT_FILTERS,
    query: searchParams.get("q") || "",
  });
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [preview, setPreview] = useState<Property | null>(null);

  const locations = useMemo(() => Array.from(new Set(properties.map((p) => p.city))), []);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const q = filters.query.trim().toLowerCase();
      if (q && !`${p.title} ${p.location} ${p.city}`.toLowerCase().includes(q)) return false;
      if (filters.type !== "All" && p.type !== filters.type) return false;
      if (filters.location !== "All" && p.city !== filters.location) return false;
      if (filters.bedrooms && p.bedrooms < filters.bedrooms) return false;
      if (filters.bathrooms && p.bathrooms < filters.bathrooms) return false;
      if (p.price > filters.maxPrice) return false;
      if (p.area < filters.minArea) return false;
      return true;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, [filters, page, view]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <main className="bg-black">
      {/* Large header */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-black px-6 pb-16 pt-40 text-white sm:px-10 lg:min-h-[65vh]">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="https://images.pexels.com/photos/27626185/pexels-photo-27626185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600"
            alt="Luxury properties collection"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/50">
              Our Collection
            </span>
          </Reveal>
          <MaskReveal className="mt-5">
            <h1 className="max-w-3xl font-luxury-serif text-5xl italic leading-[1.05] sm:text-6xl lg:text-7xl">
              Properties for the discerning few
            </h1>
          </MaskReveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/50 sm:text-base">
              Browse a curated selection of architectural residences, estates,
              and penthouses across the world's most desirable addresses.
            </p>
          </Reveal>
        </div>
      </section>

      <Filters
        filters={filters}
        setFilters={setFilters}
        locations={locations}
        view={view}
        setView={setView}
        resultCount={filtered.length}
      />

      <section className="px-6 py-16 text-white sm:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                  : "flex flex-col gap-6"
              }
            >
              {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <SkeletonCard key={i} view={view} />
              ))}
            </div>
          ) : pageItems.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <p className="font-luxury-serif text-2xl italic text-white/70">
                No residences match your search
              </p>
              <button
                onClick={() => setFilters(DEFAULT_FILTERS)}
                className="text-xs uppercase tracking-[0.2em] text-white/50 underline underline-offset-4 hover:text-white"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <StaggerReveal
              key={`${page}-${view}`}
              className={
                view === "grid"
                  ? "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                  : "flex flex-col gap-6"
              }
              y={30}
              stagger={0.08}
            >
              {pageItems.map((property, i) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  view={view}
                  index={i}
                  favorite={favorites.has(property.id)}
                  onToggleFavorite={() => toggleFavorite(property.id)}
                  onPreview={() => setPreview(property)}
                />
              ))}
            </StaggerReveal>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm transition-colors ${
                    page === i + 1
                      ? "border-white bg-white text-black"
                      : "border-white/20 text-white/60 hover:border-white hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      <PropertyModal property={preview} onClose={() => setPreview(null)} />
    </main>
  );
}
