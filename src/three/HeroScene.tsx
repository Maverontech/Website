import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import HeroGraph from "./HeroGraph";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.2], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 6]} intensity={45} color="#8B7CF6" />
      <pointLight position={[-4, -3, -4]} intensity={22} color="#F5A623" />
      <Sparkles count={70} scale={[7, 5, 4]} size={1.6} speed={0.25} opacity={0.35} color="#8B7CF6" />
      <HeroGraph />
    </Canvas>
  );
}
