"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const stone = new THREE.MeshStandardMaterial({
  color: "#d8d0bf",
  roughness: 0.58,
  metalness: 0.04,
});

const bronze = new THREE.MeshStandardMaterial({
  color: "#9a682b",
  roughness: 0.3,
  metalness: 0.78,
});

function Pedestal({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh material={stone}>
        <cylinderGeometry args={[0.78, 0.9, 0.18, 40]} />
      </mesh>
      <mesh position={[0, -0.46, 0]} material={stone}>
        <cylinderGeometry args={[0.62, 0.72, 0.78, 40]} />
      </mesh>
      <mesh position={[0, -0.9, 0]} material={stone}>
        <cylinderGeometry args={[0.82, 0.68, 0.14, 40]} />
      </mesh>
    </group>
  );
}

function ClassicalBust() {
  const bust = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (bust.current) bust.current.rotation.y = Math.sin(clock.elapsedTime * 0.32) * 0.13 - 0.12;
  });

  return (
    <Float speed={0.75} rotationIntensity={0.03} floatIntensity={0.08}>
      <group ref={bust} position={[0.35, -0.05, 0]} rotation={[0, -0.1, -0.03]}>
        <mesh position={[0, -0.72, 0]} scale={[1.18, 0.5, 0.5]} material={stone}>
          <sphereGeometry args={[1, 64, 48]} />
        </mesh>
        <mesh position={[0, -0.26, 0]} material={stone}>
          <cylinderGeometry args={[0.3, 0.42, 0.72, 32]} />
        </mesh>
        <mesh position={[0, 0.47, 0]} scale={[0.58, 0.76, 0.56]} material={stone}>
          <sphereGeometry args={[1, 64, 48]} />
        </mesh>
        <mesh position={[0.02, 0.52, 0.54]} rotation={[Math.PI / 2, 0, 0]} material={stone}>
          <coneGeometry args={[0.12, 0.35, 24]} />
        </mesh>
        <mesh position={[-0.2, 0.88, -0.08]} rotation={[0.1, 0, 0.15]} material={bronze}>
          <torusGeometry args={[0.42, 0.12, 20, 48, 4.5]} />
        </mesh>
        <Pedestal position={[0, -1.25, 0]} scale={0.88} />
      </group>
    </Float>
  );
}

function RibbonSculpture() {
  const ribbon = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ribbon.current) ribbon.current.rotation.y = clock.elapsedTime * 0.14;
  });

  return (
    <Float speed={1} rotationIntensity={0.08} floatIntensity={0.12}>
      <group position={[-1.45, -0.82, -0.55]} rotation={[0.1, 0.25, -0.15]}>
        <mesh ref={ribbon} position={[0, 0.75, 0]} scale={0.65} material={bronze}>
          <torusKnotGeometry args={[0.72, 0.18, 150, 22, 2, 3]} />
        </mesh>
        <Pedestal position={[0, -0.3, 0]} scale={0.68} />
      </group>
    </Float>
  );
}

function BirdSculpture() {
  const bird = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (bird.current) bird.current.rotation.y = Math.sin(clock.elapsedTime * 0.4) * 0.16 - 0.35;
  });

  return (
    <Float speed={0.9} rotationIntensity={0.05} floatIntensity={0.1}>
      <group ref={bird} position={[1.55, -0.95, -0.85]} rotation={[0, -0.35, 0]} scale={0.72}>
        <mesh position={[0, 0.72, 0]} scale={[0.65, 0.85, 0.45]} material={bronze}>
          <sphereGeometry args={[1, 40, 32]} />
        </mesh>
        <mesh position={[0.06, 1.48, 0]} scale={[0.42, 0.42, 0.38]} material={bronze}>
          <sphereGeometry args={[1, 40, 32]} />
        </mesh>
        <mesh position={[0.05, 1.48, 0.47]} rotation={[Math.PI / 2, 0, 0]} material={bronze}>
          <coneGeometry args={[0.15, 0.55, 24]} />
        </mesh>
        <mesh position={[-0.54, 0.86, 0]} rotation={[0.12, 0, 0.7]} scale={[0.32, 0.95, 0.12]} material={bronze}>
          <sphereGeometry args={[1, 32, 24]} />
        </mesh>
        <mesh position={[0.54, 0.86, 0]} rotation={[0.12, 0, -0.7]} scale={[0.32, 0.95, 0.12]} material={bronze}>
          <sphereGeometry args={[1, 32, 24]} />
        </mesh>
        <Pedestal position={[0, -0.3, 0]} scale={0.72} />
      </group>
    </Float>
  );
}

function SculptureGallery() {
  const { viewport } = useThree();
  const mobile = viewport.width < 6;

  return (
    <group position={mobile ? [0, -0.15, 0] : [-0.35, -0.1, 0]} scale={mobile ? 0.82 : 0.92}>
      <ClassicalBust />
      {!mobile && <RibbonSculpture />}
      {!mobile && <BirdSculpture />}
      <ContactShadows position={[0, -2.25, 0]} opacity={0.48} scale={8} blur={2.5} far={4} />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.15, 7], fov: 43 }}
        dpr={[1, 1.7]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.75} />
        <hemisphereLight args={["#fff6df", "#173729", 1.15]} />
        <spotLight position={[4, 6, 5]} angle={0.42} penumbra={0.75} intensity={65} color="#fff0c9" castShadow />
        <pointLight position={[-4, 1, 3]} intensity={16} color="#b37a35" />
        <SculptureGallery />
        <Sparkles count={35} size={1.4} speed={0.16} scale={[9, 6, 4]} color="#d5ad63" opacity={0.35} />
      </Canvas>
    </div>
  );
}
