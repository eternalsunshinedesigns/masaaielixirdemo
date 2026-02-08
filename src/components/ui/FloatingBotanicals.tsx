import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface LeafShapeProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
}

const LeafShape = ({ position, rotation, scale, color, speed, distort }: LeafShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.rotation.z += 0.001 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.002;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.5}
          roughness={0.6}
          metalness={0.1}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
};

const PetalShape = ({ position, rotation, scale, color, speed }: Omit<LeafShapeProps, "distort">) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.001;
    }
  });

  return (
    <Float speed={speed * 0.7} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.2}
          roughness={0.8}
          metalness={0.05}
        />
      </mesh>
    </Float>
  );
};

interface FloatingBotanicalsProps {
  variant?: "hero" | "section" | "accent" | "minimal";
  className?: string;
}

const Scene = ({ variant = "section" }: { variant: string }) => {
  const elements = useMemo(() => {
    const palette = [
      "hsl(24, 35%, 28%)",   // warm brown
      "hsl(15, 45%, 55%)",   // terracotta
      "hsl(75, 25%, 35%)",   // olive
      "hsl(35, 25%, 75%)",   // sand
      "hsl(18, 40%, 45%)",   // clay
    ];

    const count = variant === "hero" ? 8 : variant === "section" ? 5 : variant === "accent" ? 3 : 2;
    const spread = variant === "hero" ? 6 : 4;

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * spread * 2,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * 3 - 2,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.6,
      color: palette[Math.floor(Math.random() * palette.length)],
      speed: 0.5 + Math.random() * 1.2,
      distort: 0.2 + Math.random() * 0.4,
      type: Math.random() > 0.5 ? "leaf" : "petal",
    }));
  }, [variant]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      <pointLight position={[-3, 2, 4]} intensity={0.3} color="hsl(15, 45%, 55%)" />
      {elements.map((el) =>
        el.type === "leaf" ? (
          <LeafShape
            key={el.id}
            position={el.position}
            rotation={el.rotation}
            scale={el.scale}
            color={el.color}
            speed={el.speed}
            distort={el.distort}
          />
        ) : (
          <PetalShape
            key={el.id}
            position={el.position}
            rotation={el.rotation}
            scale={el.scale}
            color={el.color}
            speed={el.speed}
          />
        )
      )}
    </>
  );
};

export const FloatingBotanicals = ({ variant = "section", className = "" }: FloatingBotanicalsProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene variant={variant} />
      </Canvas>
    </div>
  );
};