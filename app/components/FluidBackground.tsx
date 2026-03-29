"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
  vec2 m = uMouse * 0.5 + 0.5;
  float t = uTime * 0.15;
  float n = noise(uv * 3.0 + t) * 0.08;
  float n2 = noise(uv * 6.0 - t * 0.5) * 0.04;
  float dist = length((uv - m) * aspect);
  float glow = smoothstep(0.55, 0.0, dist) * 0.28;
  vec3 c1 = vec3(0.878, 0.949, 0.996);
  vec3 c2 = vec3(0.490, 0.827, 0.988);
  vec3 c3 = vec3(1.0);
  float mixAmt = uv.y * 0.55 + 0.2 * sin(t + uv.x * 6.2831853) + n + n2 + glow;
  vec3 col = mix(c1, c2, clamp(mixAmt, 0.0, 1.0));
  col = mix(col, c3, 0.12 + 0.08 * sin(t * 0.7));
  gl_FragColor = vec4(col, 1.0);
}
`;

function FluidPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, pointer, size } = useThree();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame((state) => {
    /* Three.js ShaderMaterial uniforms are updated by mutating `.value`. */
    /* eslint-disable react-hooks/immutability -- GPU uniform objects */
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uMouse.value.set(pointer.x, pointer.y);
    uniforms.uResolution.value.set(size.width, size.height);
    /* eslint-enable react-hooks/immutability */
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        depthWrite={false}
      />
    </mesh>
  );
}

function Scene() {
  return <FluidPlane />;
}

type FluidBackgroundProps = {
  reducedMotion: boolean;
};

export function FluidBackground({ reducedMotion }: FluidBackgroundProps) {
  if (reducedMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_20%,#E0F2FE_0%,#BAE6FD_45%,#7DD3FC_100%)]"
        aria-hidden
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1, near: 0.1, far: 1000 }}
        gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
