import { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { gsap } from "../lib/gsap";

const QUOTES = [
  {
    quote:
      "Vendors stopped emailing our AP team for invoice status. Melvatron just tells them, sourced straight from SAP.",
    name: "Head of Vendor Operations",
    company: "Aravex Manufacturing",
    avatar: "portrait-1",
  },
  {
    quote:
      "We connected our S/4HANA tenant in an afternoon. The GPT already understood our approval hierarchy.",
    name: "VP of Procurement",
    company: "Nordholt Industrial",
    avatar: "portrait-2",
  },
  {
    quote:
      "It respects our SAP authorizations correctly every time — nothing leaks past what a vendor should see.",
    name: "SAP Security Lead",
    company: "Baltic Grid Energy",
    avatar: "portrait-3",
  },
  {
    quote: "Onboarding time for new suppliers dropped from weeks to days.",
    name: "Director of Supplier Enablement",
    company: "Corriston Logistics",
    avatar: "portrait-4",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  const active = QUOTES[index];

  useEffect(() => {
    if (!quoteRef.current) return;
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );
  }, [index]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + QUOTES.length) % QUOTES.length);

  return (
    <section className="bg-paper py-32 text-ink md:py-48">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-10 flex items-center justify-center">
          {QUOTES.map((q, i) => (
            <button
              key={q.avatar}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${q.name}`}
              className={`relative h-14 w-14 -ml-3 shrink-0 overflow-hidden rounded-full border-4 border-paper bg-cover bg-center transition-all duration-500 first:ml-0 ${
                i === index ? "z-10 scale-110 grayscale-0" : "opacity-70 grayscale hover:opacity-100"
              }`}
              style={{ backgroundImage: `url(https://picsum.photos/seed/${q.avatar}/200/200)` }}
            />
          ))}
        </div>

        <div ref={quoteRef}>
          <p className="text-balance font-sans font-medium leading-[1.3] text-[clamp(1.5rem,3vw,2.25rem)]">
            &ldquo;{active.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm text-ink/50">
            {active.name} — {active.company}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <CaretLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <CaretRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
