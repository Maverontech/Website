import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { scrollState } from "./scrollState";

const NODE_COUNT = 9;
const RADIUS = 2.5;

function useNodePositions(radius: number) {
  return useMemo(() => {
    const positions: [number, number, number][] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      positions.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
    }
    return positions;
  }, [radius]);
}

export default function HeroGraph() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const autoRotate = useRef(0);
  const nodes = useNodePositions(RADIUS);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useFrame((_, delta) => {
    autoRotate.current += delta * 0.1;
    const g = group.current;
    if (!g) return;
    const pointerYaw = pointer.current.x * 0.3;
    const pointerPitch = pointer.current.y * 0.15;
    g.rotation.y = autoRotate.current + scrollState.progress * Math.PI * 1.3 + pointerYaw;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, pointerPitch, 0.06);
  });

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.7}>
        <mesh>
          <icosahedronGeometry args={[0.68, 1]} />
          <meshStandardMaterial color="#8B7CF6" emissive="#6E56CF" emissiveIntensity={0.7} wireframe />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#0B0C0F" emissive="#8B7CF6" emissiveIntensity={1.3} />
        </mesh>
      </Float>

      {nodes.map((pos, i) => {
        const accent = i % 2 === 0 ? "#F5A623" : "#8B7CF6";
        return (
          <group key={i}>
            <Line points={[[0, 0, 0], pos]} color={accent} transparent opacity={0.22} lineWidth={1} />
            <mesh position={pos}>
              <sphereGeometry args={[i % 3 === 0 ? 0.1 : 0.065, 16, 16]} />
              <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.9} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
