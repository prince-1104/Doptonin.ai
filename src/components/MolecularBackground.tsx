"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Component, useEffect, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

const TEAL = "#2EE6D6";
const TEAL_DIM = "#167a74";

function heartXY(t: number): [number, number] {
  const x = 16 * Math.sin(t) ** 3;
  const y =
    13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return [x, y];
}

function hexRing(cx: number, cy: number, cz: number, radius: number, tilt = 0): THREE.Vector3[] {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2 + tilt;
    return new THREE.Vector3(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius, cz);
  });
}

function buildMolecule(compact: boolean) {
  const outlineSteps = compact ? 22 : 32;
  const nodes: THREE.Vector3[] = [];

  for (let i = 0; i < outlineSteps; i += 1) {
    const t = (i / outlineSteps) * Math.PI * 2;
    const [x, y] = heartXY(t);
    nodes.push(new THREE.Vector3(x * 0.11, y * 0.11 + 0.15, Math.sin(t * 2) * 0.55));
  }

  for (let i = 0; i < (compact ? 8 : 12); i += 1) {
    const t = (i / 12) * Math.PI * 2;
    const [x, y] = heartXY(t);
    nodes.push(new THREE.Vector3(x * 0.06, y * 0.06 + 0.15, Math.cos(t) * 0.35));
  }

  const rings = [
    hexRing(-0.35, 0.25, 0.15, 0.42, 0.2),
    hexRing(0.4, 0.05, -0.2, 0.36, 0.5),
    hexRing(0.05, -0.55, 0.1, 0.3, 0.9),
  ];
  rings.forEach((ring) => nodes.push(...ring));

  const seen = new Set<string>();
  const pairs: [number, number][] = [];
  const addPair = (a: number, b: number) => {
    if (a === b) return;
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (seen.has(key)) return;
    seen.add(key);
    pairs.push([a, b]);
  };

  for (let i = 0; i < outlineSteps; i += 1) {
    addPair(i, (i + 1) % outlineSteps);
  }

  let cursor = outlineSteps + (compact ? 8 : 12);
  rings.forEach((ring) => {
    for (let i = 0; i < ring.length; i += 1) {
      addPair(cursor + i, cursor + ((i + 1) % ring.length));
    }
    cursor += ring.length;
  });

  const limit = compact ? 1.15 : 1.05;
  for (let i = 0; i < nodes.length; i += 1) {
    const nearest: { j: number; d: number }[] = [];
    for (let j = i + 1; j < nodes.length; j += 1) {
      const d = nodes[i].distanceTo(nodes[j]);
      if (d < limit) nearest.push({ j, d });
    }
    nearest
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
      .forEach(({ j }) => addPair(i, j));
  }

  return { nodes, pairs };
}

function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? window.scrollY / max : 0;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}

function useReducedMotion() {
  const reduced = useRef(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = media.matches;
    const onChange = () => {
      reduced.current = media.matches;
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function Molecule({ compact }: { compact: boolean }) {
  const { nodes, pairs } = useMemo(() => buildMolecule(compact), [compact]);
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const bondGeometry = useMemo(() => {
    const positions = new Float32Array(pairs.length * 6);
    pairs.forEach(([a, b], i) => {
      positions.set([nodes[a].x, nodes[a].y, nodes[a].z], i * 6);
      positions.set([nodes[b].x, nodes[b].y, nodes[b].z], i * 6 + 3);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [nodes, pairs]);

  useEffect(() => {
    if (!mesh.current) return;
    nodes.forEach((point, i) => {
      dummy.position.copy(point);
      dummy.scale.setScalar(i % 5 === 0 ? 1.35 : 1);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [dummy, nodes]);

  return (
    <group>
      <instancedMesh ref={mesh} args={[undefined, undefined, nodes.length]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshStandardMaterial
          color={TEAL}
          emissive={TEAL}
          emissiveIntensity={0.7}
          roughness={0.3}
          metalness={0.15}
        />
      </instancedMesh>
      <lineSegments geometry={bondGeometry}>
        <lineBasicMaterial color={TEAL} transparent opacity={0.32} />
      </lineSegments>
    </group>
  );
}

function Dust({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  const reduced = useReducedMotion();

  useFrame((_, delta) => {
    if (!points.current || reduced.current) return;
    points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color={TEAL}
        size={0.028}
        transparent
        opacity={0.28}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function OrbitingRings() {
  const group = useRef<THREE.Group>(null);

  const reduced = useReducedMotion();

  useFrame((_, delta) => {
    if (!group.current || reduced.current) return;
    group.current.rotation.z += delta * 0.05;
    group.current.rotation.x += delta * 0.02;
  });

  return (
    <group ref={group}>
      {[2.6, 3.3, 4.1].map((radius, index) => (
        <mesh key={radius} rotation={[Math.PI / 2.6, index * 0.4, 0]}>
          <torusGeometry args={[radius, 0.008, 8, 64]} />
          <meshBasicMaterial color={index === 1 ? TEAL_DIM : TEAL} transparent opacity={0.16} />
        </mesh>
      ))}
    </group>
  );
}

function ScrollScene({ compact }: { compact: boolean }) {
  const group = useRef<THREE.Group>(null);
  const progress = useScrollProgress();
  const reduced = useReducedMotion();
  const { camera } = useThree();
  const idle = useRef(0);

  useFrame((_, delta) => {
    const p = progress.current;
    if (reduced.current) {
      camera.position.set(0, 0.15, 8.4);
      camera.lookAt(0, 0, 0);
      return;
    }

    idle.current += delta * 0.12;
    if (group.current) {
      group.current.rotation.y = p * Math.PI * 1.25 + idle.current;
      group.current.rotation.x = -0.18 + p * 0.55;
      group.current.position.y = Math.sin(p * Math.PI) * 0.25;
    }

    camera.position.x = Math.sin(p * Math.PI) * 0.7;
    camera.position.y = 0.1 + p * 0.9;
    camera.position.z = 8.6 - p * 2.2;
    camera.lookAt(0, 0.1, 0);
  });

  return (
    <>
      <color attach="background" args={["#0B0E1A"]} />
      <ambientLight intensity={0.28} />
      <pointLight position={[4.5, 3.2, 6]} intensity={18} color={TEAL} distance={18} />
      <pointLight position={[-4, -2, 5]} intensity={8} color="#5b6fd6" distance={16} />
      <group ref={group}>
        <Molecule compact={compact} />
        {compact ? null : <OrbitingRings />}
      </group>
      <Dust count={compact ? 28 : 90} />
    </>
  );
}

class WebGLGuard extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export function MolecularBackground() {
  const compact = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <WebGLGuard>
        <Canvas
          dpr={compact ? [1, 1] : [1, 1.5]}
          camera={{ position: [0, 0.15, 8.6], fov: compact ? 46 : 40, near: 0.1, far: 40 }}
          gl={{ antialias: !compact, alpha: true, powerPreference: compact ? "low-power" : "high-performance" }}
        >
          <ScrollScene compact={compact} />
        </Canvas>
      </WebGLGuard>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_22%,rgba(11,14,26,0.55)_0%,rgba(11,14,26,0.78)_52%,#0B0E1A_100%)] md:bg-[radial-gradient(ellipse_at_50%_28%,rgba(11,14,26,0.65)_0%,rgba(11,14,26,0.80)_58%,#0B0E1A_100%)]" />
    </div>
  );
}
