"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

function LightRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, state.pointer.x * 0.08, 3, delta);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, state.pointer.y * 0.14, 3, delta);
  });

  return (
    <group ref={group} position={[2.7, 0, 0]}>
      <mesh rotation={[0.15, 0.55, 0]}>
        <torusGeometry args={[2.1, 0.012, 8, 120]} />
        <meshBasicMaterial color="#d1a75c" transparent opacity={0.22} />
      </mesh>
      <mesh rotation={[-0.25, 0.8, 0.35]} scale={0.68}>
        <torusGeometry args={[2.1, 0.01, 8, 120]} />
        <meshBasicMaterial color="#f4dfae" transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      <Canvas camera={{ position: [0, 0, 7], fov: 48 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <LightRings />
        <Sparkles count={26} size={1.2} speed={0.16} scale={[10, 6, 3]} color="#e0b76a" opacity={0.38} />
      </Canvas>
    </div>
  );
}
