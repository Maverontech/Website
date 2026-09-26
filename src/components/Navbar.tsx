import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Modules", href: "#modules" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Customers", href: "#customers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 xs:top-6 xs:px-6">
      <nav
        className={`flex w-full max-w-4xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 xs:px-4 ${
          scrolled
            ? "border-ink-line/80 bg-ink-soft/90 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-white/5 bg-ink-soft/40 backdrop-blur-md"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-1">
          <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="10" fill="#8B7CF6" fillOpacity="0.15" />
            <circle cx="24" cy="24" r="5.5" fill="#8B7CF6" />
            <circle cx="10" cy="14" r="3" fill="#F5A623" />
            <circle cx="38" cy="14" r="3" fill="#F5A623" />
            <circle cx="10" cy="34" r="3" fill="#8B7CF6" />
            <circle cx="38" cy="34" r="3" fill="#8B7CF6" />
            <path
              d="M24 24 10 14M24 24 38 14M24 24 10 34M24 24 38 34"
              stroke="#8B7CF6"
              strokeWidth="1.2"
              strokeOpacity="0.7"
            />
          </svg>
          <span className="font-mono text-sm tracking-tight text-paper">melvatron</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-paper/70 transition-colors hover:bg-white/5 hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex">
          <a
            href="#cta"
            className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
          >
            Book a demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full text-paper md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-16 left-4 right-4 rounded-3xl border border-ink-line bg-ink-soft/95 p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-paper/80 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-paper px-4 py-3 text-center text-sm font-medium text-ink"
              >
                Book a demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
