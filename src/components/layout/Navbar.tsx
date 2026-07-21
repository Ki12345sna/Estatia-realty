import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Menu, Search, X } from "lucide-react";
import { Magnetic } from "../common/MagneticButton";
import { cn } from "../../utils/cn";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu / search on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuRef.current) return;
    if (menuOpen) {
      gsap.set(menuRef.current, { display: "flex" });
      gsap.fromTo(
        menuRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power4.inOut" }
      );
      gsap.fromTo(
        menuRef.current.querySelectorAll("[data-menu-item]"),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, delay: 0.25, ease: "power3.out" }
      );
    } else if (menuRef.current.style.display !== "none") {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!searchRef.current) return;
    if (searchOpen) {
      gsap.set(searchRef.current, { display: "flex" });
      gsap.fromTo(
        searchRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    } else if (searchRef.current.style.display !== "none") {
      gsap.to(searchRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => gsap.set(searchRef.current, { display: "none" }),
      });
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q");
    navigate(`/properties${q ? `?q=${encodeURIComponent(String(q))}` : ""}`);
    setSearchOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-black/50 py-3 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "border-b border-transparent bg-transparent py-6"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          {/* Logo */}
          <Link
            to="/"
            data-cursor="hover"
            className="font-luxury-serif text-xl italic tracking-wide text-white transition-opacity hover:opacity-70 sm:text-2xl"
          >
            Estatia
          </Link>

          {/* Center links (desktop) */}
          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <li key={link.to} className="relative">
                  <Link
                    to={link.to}
                    className={cn(
                      "group relative text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/80 transition-colors duration-300 hover:text-white",
                      active && "text-white"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-400 ease-out group-hover:scale-x-100",
                        active && "scale-x-100"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              aria-label="Search properties"
              data-cursor="hover"
              onClick={() => setSearchOpen((v) => !v)}
              className="hidden h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white sm:flex"
            >
              <Search size={17} strokeWidth={1.5} />
            </button>

            <Magnetic
              as="a"
              href="/contact"
              onClick={(e: any) => {
                e.preventDefault();
                navigate("/contact");
              }}
              className="hidden items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/5 px-6 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-500 hover:border-white hover:bg-white hover:text-black sm:flex"
            >
              Schedule Visit
            </Magnetic>

            <button
              type="button"
              aria-label="Toggle menu"
              data-cursor="hover"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>

        {/* Search bar dropdown */}
        <div
          ref={searchRef}
          style={{ display: "none" }}
          className="hidden w-full justify-center border-t border-white/10 bg-black/70 px-6 py-5 backdrop-blur-xl sm:flex"
        >
          <form onSubmit={handleSearchSubmit} className="flex w-full max-w-lg items-center gap-3">
            <Search size={16} className="text-white/50" />
            <input
              name="q"
              type="text"
              autoFocus
              placeholder="Search by city, property or style…"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        ref={menuRef}
        style={{ display: "none" }}
        className="fixed inset-0 z-40 flex-col justify-between bg-black px-8 pb-10 pt-28 lg:hidden"
      >
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.to} data-menu-item>
              <Link
                to={link.to}
                className="font-luxury-serif text-4xl italic text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div data-menu-item className="flex flex-col gap-6">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-3 border-b border-white/20 pb-3"
          >
            <Search size={16} className="text-white/50" />
            <input
              name="q"
              type="text"
              placeholder="Search properties…"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </form>
          <Link
            to="/contact"
            className="w-full rounded-full border border-white/30 bg-white px-6 py-3.5 text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-black"
          >
            Schedule Visit
          </Link>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40">
            Estatia — Luxury Real Estate
          </p>
        </div>
      </div>
    </>
  );
}
