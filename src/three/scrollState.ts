// Mutable singleton written by GSAP ScrollTrigger and read inside the R3F
// render loop, so scroll-driven scene motion never triggers a React re-render.
export const scrollState = {
  progress: 0,
  velocity: 0,
};
