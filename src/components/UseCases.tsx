import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";

const USE_CASES = [
  {
    title: "Procurement triage",
    body: "Vendors ask when a PO will be released and get an answer sourced from live SAP MM data, not a ticket queue.",
    image: "procurement",
  },
  {
    title: "Invoice reconciliation",
    body: "Maveron Tech explains a mismatch line-by-line and proposes the correction before it reaches AP.",
    image: "invoice",
  },
  {
    title: "Onboarding",
    body: "New vendors are guided through master-data setup with the exact SAP fields that apply to them.",
    image: "onboarding",
  },
  {
    title: "Contract compliance",
    body: "Flags deviations from negotiated terms as invoices land, referencing the governing contract clause.",
    image: "contract",
  },
];

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".use-case-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.25, scale: 0.88 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              end: "top 40%",
              scrub: true,
            },
          },
        );
        gsap.to(card, {
          opacity: 0.3,
          scale: 0.92,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "bottom 35%",
            end: "bottom 5%",
            scrub: true,
          },
        });
      });

      if (sectionRef.current && cardsRef.current && window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cardsRef.current!.offsetHeight - window.innerHeight * 0.7}`,
          pin: ".use-cases-pin",
          pinSpacing: false,
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section id="customers" ref={sectionRef} className="relative bg-paper py-32 text-ink md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-5">
          <div className="use-cases-pin">
            <h2 className="max-w-md text-balance font-sans font-medium leading-[1.1] text-[clamp(2.25rem,4.5vw,3.5rem)]">
              Built for every vendor workflow that touches SAP
            </h2>
            <p className="mt-6 max-w-sm text-balance leading-relaxed text-ink/60">
              Four surfaces, one reasoning layer — grounded in the same tenant data your ERP team
              already trusts.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="flex flex-col gap-6 lg:col-span-7">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="use-case-card relative overflow-hidden rounded-3xl border border-ink/10 bg-ink p-8 md:p-10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${useCase.image}/1200/700)` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
              <div className="relative max-w-md">
                <h3 className="text-2xl font-medium text-paper">{useCase.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/60">{useCase.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
