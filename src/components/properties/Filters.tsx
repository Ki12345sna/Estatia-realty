import { Grid2x2, List, Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

export type FilterState = {
  query: string;
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  maxPrice: number;
  minArea: number;
};

export const DEFAULT_FILTERS: FilterState = {
  query: "",
  type: "All",
  location: "All",
  bedrooms: 0,
  bathrooms: 0,
  maxPrice: 16000000,
  minArea: 0,
};

const propertyTypes = ["All", "Villa", "Penthouse", "Apartment", "Estate", "Chalet"];

type Props = {
  filters: FilterState;
  setFilters: (f: FilterState) => void;
  locations: string[];
  view: "grid" | "list";
  setView: (v: "grid" | "list") => void;
  resultCount: number;
};

export default function Filters({ filters, setFilters, locations, view, setView, resultCount }: Props) {
  const [open, setOpen] = useState(false);

  const update = (patch: Partial<FilterState>) => setFilters({ ...filters, ...patch });

  return (
    <div className="sticky top-[64px] z-30 border-y border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-5 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 sm:max-w-sm">
            <Search size={16} className="text-white/40" />
            <input
              value={filters.query}
              onChange={(e) => update({ query: e.target.value })}
              placeholder="Search by name or city…"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen((v) => !v)}
              data-cursor="hover"
              className={`flex items-center gap-2 rounded-full border px-5 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                open ? "border-white bg-white text-black" : "border-white/20 text-white hover:border-white"
              }`}
            >
              <SlidersHorizontal size={14} /> Filters
            </button>

            <div className="flex items-center overflow-hidden rounded-full border border-white/20">
              <button
                onClick={() => setView("grid")}
                aria-label="Grid view"
                className={`flex h-11 w-11 items-center justify-center transition-colors duration-300 ${
                  view === "grid" ? "bg-white text-black" : "text-white/60 hover:text-white"
                }`}
              >
                <Grid2x2 size={16} />
              </button>
              <button
                onClick={() => setView("list")}
                aria-label="List view"
                className={`flex h-11 w-11 items-center justify-center transition-colors duration-300 ${
                  view === "list" ? "bg-white text-black" : "text-white/60 hover:text-white"
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-500 ease-out ${
            open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-5">
              <div>
                <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Property Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => update({ type: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-black px-3 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  {propertyTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => update({ location: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-black px-3 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="All">All</option>
                  {locations.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Bedrooms</label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => update({ bedrooms: Number(e.target.value) })}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-black px-3 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  <option value={0}>Any</option>
                  {[2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}+</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Bathrooms</label>
                <select
                  value={filters.bathrooms}
                  onChange={(e) => update({ bathrooms: Number(e.target.value) })}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-black px-3 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  <option value={0}>Any</option>
                  {[2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}+</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
                  Min Area: {filters.minArea.toLocaleString()} sqft
                </label>
                <input
                  type="range"
                  min={0}
                  max={7000}
                  step={500}
                  value={filters.minArea}
                  onChange={(e) => update({ minArea: Number(e.target.value) })}
                  className="mt-4 w-full accent-white"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
                Max Price: ${filters.maxPrice.toLocaleString()}
              </label>
              <input
                type="range"
                min={1000000}
                max={16000000}
                step={250000}
                value={filters.maxPrice}
                onChange={(e) => update({ maxPrice: Number(e.target.value) })}
                className="mt-4 w-full accent-white"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs font-light text-white/40">{resultCount} residences found</p>
              <button
                onClick={() => setFilters(DEFAULT_FILTERS)}
                className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
              >
                <X size={12} /> Reset Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
