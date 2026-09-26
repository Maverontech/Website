import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import ModuleStack from "./components/ModuleStack";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { gsap } from "./lib/gsap";

function App() {
  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    const triggers = targets.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      ),
    );
    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, []);

  return (
    <main className="w-full max-w-full overflow-x-hidden bg-ink text-paper">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <UseCases />
      <ModuleStack />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
