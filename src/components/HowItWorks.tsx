import { Broadcast, Plug, Rocket, ShieldCheck } from "@phosphor-icons/react";

const STEPS = [
  {
    title: "Connect",
    body: "Point Maveron Tech at your SAP tenant — ECC, S/4HANA, or a hybrid landscape. Read-only by default.",
    image: "connect-sap",
    icon: Plug,
  },
  {
    title: "Fine-tune",
    body: "We train on your master data, org hierarchy, and approval chains, not a generic SAP manual.",
    image: "finetune-sap",
    icon: Broadcast,
  },
  {
    title: "Deploy",
    body: "Ship the co-pilot to your vendor portal, email, or Slack — no new login for vendors to manage.",
    image: "deploy-sap",
    icon: Rocket,
  },
  {
    title: "Govern",
    body: "Every answer stays inside role-based SAP authorizations, with a full audit trail.",
    image: "govern-sap",
    icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="mb-14 max-w-2xl">
          <h2 className="text-balance font-sans font-medium leading-[1.1] text-paper text-[clamp(2.25rem,4.5vw,3.5rem)]">
            From SAP tenant to vendor co-pilot in four steps
          </h2>
        </div>

        <div
          data-reveal
          className="flex h-[520px] flex-col gap-3 overflow-hidden rounded-3xl border border-ink-line md:h-[480px] md:flex-row md:gap-0"
        >
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="group relative flex-1 overflow-hidden bg-ink-soft transition-[flex-grow] duration-700 ease-out md:hover:flex-[2.6]"
              style={{ borderLeft: i === 0 ? undefined : "1px solid var(--color-ink-line)" }}
            >
              <div
                className="absolute inset-0 scale-105 bg-cover bg-center opacity-0 grayscale transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-30"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${step.image}/900/1200)` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-ink-soft/60 to-transparent" />

              <div className="relative flex h-full flex-col justify-between p-6">
                <step.icon size={22} weight="light" className="text-signal-soft" />

                <div>
                  <h3 className="text-2xl font-medium text-paper md:whitespace-nowrap">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
