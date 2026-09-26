import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

const MODULES = [
  {
    code: "MM",
    name: "SAP MM GPT",
    body: "Purchase orders, goods receipt, and delivery status — explained without opening the SAP GUI.",
    image: "module-mm",
  },
  {
    code: "ARIBA",
    name: "SAP Ariba GPT",
    body: "Sourcing events and supplier scorecards, summarized for procurement leads in plain language.",
    image: "module-ariba",
  },
  {
    code: "FI",
    name: "SAP FI GPT",
    body: "Payment status, invoice holds, and reconciliation — answered before AP has to look.",
    image: "module-fi",
  },
  {
    code: "SF",
    name: "SuccessFactors GPT",
    body: "Contractor onboarding and time entry for vendor staff, without a support ticket.",
    image: "module-sf",
  },
];

export default function ModuleStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.45,
          filter: "brightness(0.55)",
          ease: "none",
          scrollTrigger: {
            trigger: card.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="modules" ref={sectionRef} className="relative bg-ink">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-8">
        <h2
          data-reveal
          className="max-w-2xl text-balance font-sans font-medium leading-[1.1] text-paper text-[clamp(2.25rem,4.5vw,3.5rem)]"
        >
          One GPT per SAP module, one place to manage them
        </h2>
      </div>

      <div className="relative">
        {MODULES.map((mod, i) => (
          <div
            key={mod.code}
            className="sticky top-0 flex h-screen items-center justify-center px-6"
            style={{ zIndex: i + 1 }}
          >
            <div className="stack-card grid w-full max-w-4xl grid-cols-1 items-center gap-8 rounded-3xl border border-ink-line bg-ink-soft p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:grid-cols-5 md:p-14">
              <div className="sm:col-span-3">
                <span className="font-mono text-xs tracking-[0.2em] text-signal-soft">{mod.code}</span>
                <h3 className="mt-3 text-3xl font-medium text-paper md:text-4xl">{mod.name}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-paper/60">{mod.body}</p>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl sm:col-span-2">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70 grayscale transition-transform duration-700 ease-out hover:scale-105"
                  style={{ backgroundImage: `url(https://picsum.photos/seed/${mod.image}/700/700)` }}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
