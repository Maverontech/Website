import { ArrowRight } from "@phosphor-icons/react";

export default function CTA() {
  return (
    <section id="cta" className="mesh-dark relative overflow-hidden bg-ink py-32 md:py-48">
      <div className="grain" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2
          data-reveal
          className="text-balance font-sans font-medium leading-[1.08] text-paper text-[clamp(2.5rem,6vw,4.25rem)]"
        >
          Ready to give every vendor an SAP co-pilot?
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-paper/60">
          Talk to us about your SAP landscape. Most teams see a working pilot inside two weeks.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@maverontech.com"
            className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
          >
            Book a demo
            <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:hello@maveron Tech.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Talk to an engineer
          </a>
        </div>
      </div>
    </section>
  );
}
