import { useRef, Suspense, lazy } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight, PlayCircle } from "@phosphor-icons/react";
import { ScrollTrigger } from "../lib/gsap";
import { scrollState } from "../three/scrollState";

const HeroScene = lazy(() => import("../three/HeroScene"));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        onUpdate: (self) => {
          scrollState.progress = self.progress;
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="mesh-dark relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24"
    >
      <div className="grain" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-7">
          <h1 className="max-w-6xl text-balance font-sans font-medium leading-[1.05] text-paper text-[clamp(2.75rem,6vw,4.75rem)]">
            SAP intelligence, built for the vendors who run it.
          </h1>
          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-paper/60">
            Maveron Tech turns your SAP tenant into a live GPT co-pilot for vendors — procurement,
            invoicing, and compliance, answered in seconds instead of tickets.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              Book a demo
              <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <PlayCircle size={18} />
              See the platform
            </a>
          </div>
        </div>

        <div className="relative h-[420px] lg:col-span-5 lg:h-[560px]">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
