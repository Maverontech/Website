const MODULES = [
  "S/4HANA",
  "ECC",
  "Ariba",
  "SuccessFactors",
  "Concur",
  "Fieldglass",
  "SAP BTP",
  "Business One",
];

export default function TrustStrip() {
  const row = [...MODULES, ...MODULES];

  return (
    <div className="relative border-y border-ink-line bg-ink py-8">
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-paper/35">
        Works alongside the SAP stack vendors already use
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16">
          {row.map((mod, i) => (
            <span
              key={`${mod}-${i}`}
              className="whitespace-nowrap font-sans text-2xl font-medium text-paper/25 xs:text-3xl"
            >
              {mod}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
