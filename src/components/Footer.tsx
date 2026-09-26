import { LinkedinLogo, XLogo } from "@phosphor-icons/react";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "Modules", href: "#modules" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Customers", href: "#customers" },
      { label: "Contact", href: "mailto:hello@melvatron.com" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Security", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
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
              <span className="font-mono text-sm text-paper">melvatron</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper/45">
              SAP-native GPTs for the vendors who keep your supply chain running.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Melvatron on LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-paper/60 transition-colors hover:border-white/30 hover:text-paper"
              >
                <LinkedinLogo size={16} />
              </a>
              <a
                href="#"
                aria-label="Melvatron on X"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-paper/60 transition-colors hover:border-white/30 hover:text-paper"
              >
                <XLogo size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-medium text-paper">{col.heading}</h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-paper/45 transition-colors hover:text-paper"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ink-line pt-8 text-xs text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Melvatron. All rights reserved.</span>
          <span>Not affiliated with or endorsed by SAP SE.</span>
        </div>
      </div>
    </footer>
  );
}
