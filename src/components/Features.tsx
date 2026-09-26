const BENTO = [
  {
    id: "core",
    span: "col-span-4 row-span-2 md:col-span-2",
    title: "Custom GPTs, trained on your SAP tenant",
    body: "Maveron Tech fine-tunes on your master data, org structure, and approval chains — not a generic SAP manual.",
    image: "sap-core",
    tone: "large" as const,
  },
  {
    id: "portal",
    span: "col-span-4 row-span-1 md:col-span-2",
    title: "Vendor self-service, without the SAP GUI",
    body: "Vendors ask in plain language. Maveron Tech answers from live SAP data and routes exceptions to the right owner.",
    image: "sap-portal",
    tone: "wide" as const,
  },
  {
    id: "match",
    span: "col-span-2 row-span-1 md:col-span-1",
    title: "Real-time PO & invoice matching",
    body: "Three-way match runs continuously, not at month-end.",
    image: null,
    tone: "small" as const,
  },
  {
    id: "guardrails",
    span: "col-span-2 row-span-1 md:col-span-1",
    title: "Compliance-grade guardrails",
    body: "Every answer is scoped to role-based SAP authorizations.",
    image: null,
    tone: "small" as const,
  },
];

const MODULE_TAGS = ["MM", "SD", "FI", "ARIBA", "SUCCESSFACTORS"];

export default function Features() {
  return (
    <section id="platform" className="relative bg-paper py-32 text-ink md:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          data-reveal
          className="max-w-4xl text-balance font-sans font-medium leading-[1.08] text-[clamp(2.25rem,4.5vw,3.5rem)]"
        >
          We turn SAP complexity
          <span
            className="mx-2 inline-block h-9 w-20 translate-y-2 rounded-full bg-cover bg-center align-middle contrast-125 grayscale xs:h-10 xs:w-24"
            style={{ backgroundImage: "url(https://picsum.photos/seed/sap-tangle/200/120)" }}
            aria-hidden
          />
          into vendor clarity
          <span
            className="mx-2 inline-block h-9 w-20 translate-y-2 rounded-full bg-cover bg-center align-middle contrast-125 grayscale xs:h-10 xs:w-24"
            style={{ backgroundImage: "url(https://picsum.photos/seed/sap-clear/200/120)" }}
            aria-hidden
          />
          .
        </h2>

        <div
          data-reveal
          className="mt-16 grid auto-rows-[190px] grid-cols-4 grid-flow-dense gap-4 md:auto-rows-[220px] md:gap-6"
        >
          {BENTO.map((card) => (
            <article
              key={card.id}
              className={`group relative overflow-hidden rounded-3xl border border-ink/10 bg-ink ${card.span}`}
            >
              {card.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(https://picsum.photos/seed/${card.image}/900/900)` }}
                  aria-hidden
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                <h3
                  className={`font-medium text-paper ${
                    card.tone === "large" ? "text-2xl md:text-3xl" : card.tone === "wide" ? "text-xl md:text-2xl" : "text-lg"
                  }`}
                >
                  {card.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/55">{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-4 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink/10 bg-ink p-6 md:mt-6 md:flex-row md:items-center md:p-8"
        >
          <div>
            <h3 className="text-lg font-medium text-paper md:text-xl">
              One connector for the modules vendors actually touch
            </h3>
            <p className="mt-1 text-sm text-paper/55">Live to your tenant in days, not quarters.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {MODULE_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs tracking-wide text-paper/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
