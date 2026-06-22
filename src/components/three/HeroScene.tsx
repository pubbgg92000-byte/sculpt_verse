"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function AbstractSculpture() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.y = -state.clock.elapsedTime * 0.1;
      mesh2Ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.08) * 0.15;
    }
  });

  const bronzeColor = useMemo(() => new THREE.Color("#8B6914"), []);
  const stoneColor = useMemo(() => new THREE.Color("#6B7B6E"), []);

  return (
    <group position={[0, 0, 0]}>
      {/* Main organic form */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef} scale={2.2}>
          <torusKnotGeometry args={[1, 0.35, 200, 32, 2, 3]} />
          <MeshDistortMaterial
            color={bronzeColor}
            roughness={0.3}
            metalness={0.8}
            distort={0.25}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Secondary form */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={mesh2Ref} scale={1.4} position={[1.5, -0.5, -1]}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color={stoneColor}
            roughness={0.5}
            metalness={0.6}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Accent sphere */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.8}>
        <mesh scale={0.6} position={[-2, 1, -0.5]}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color={bronzeColor}
            roughness={0.2}
            metalness={0.9}
            distort={0.3}
            speed={3}
          />
        </mesh>
      </Float>

      {/* Floating particles */}
      <Sparkles
        count={80}
        size={2}
        speed={0.4}
        scale={[12, 8, 8]}
        color="#C4A45A"
        opacity={0.4}
      />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#FFF5E1" />
        <directionalLight position={[-3, -2, 4]} intensity={0.4} color="#8B6914" />
        <pointLight position={[0, 3, 0]} intensity={0.6} color="#C4A45A" />
        <AbstractSculpture />
      </Canvas>
    </div>
  );
}
