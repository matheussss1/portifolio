'use client';

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Stars } from '@react-three/drei'; // Added Stars
import { Suspense, useRef } from 'react';
import * as THREE from 'three'; // Import THREE for Vector2 and MathUtils

export function Hero3D() {
  // const containerRef = useRef<HTMLDivElement>(null); // Not strictly needed for this version

  return (
    // Removed bg-accent-purple-deep/10 from className
    <div style={{ height: '400px', width: '100%' }} className='rounded-lg'>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight intensity={1} position={[5, 5, 5]} color={'#FFFFFF'} />
          <pointLight position={[-5, -5, -5]} intensity={0.7} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> {/* Added Stars with some initial props */}
          <RotatingBox />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} /> {/* Adjusted autoRotateSpeed */}
        </Suspense>
      </Canvas>
    </div>
  );
}

function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport, mouse, size } = useThree(); // Added size here

  // Store last mouse position for smooth damping
  const lastMouse = useRef(new THREE.Vector2());

  useFrame(() => { // Removed clock as it's not used in the provided logic
    if (meshRef.current) {
      // Smoothly update mouse position
      // Make sure mouse coordinates are not NaN if pointer isn't over canvas initially
      const currentMouse = new THREE.Vector2(
        Number.isFinite(mouse.x) ? mouse.x : 0,
        Number.isFinite(mouse.y) ? mouse.y : 0
      );
      lastMouse.current.lerp(currentMouse, 0.1);

      // Calculate rotation based on smoothed mouse position relative to center
      // The original logic for x and y might be inverted or need adjustment depending on desired effect.
      // The division by viewport.width/size.width seems to intend to normalize mouse to screen pixels,
      // but mouse from useThree is already normalized to [-1, 1] relative to viewport.
      // Simplifying the rotation logic slightly for typical R3F mouse coords:
      const targetRotationX = lastMouse.current.y * Math.PI * 0.1; // Rotate around X-axis based on mouse Y
      const targetRotationY = -lastMouse.current.x * Math.PI * 0.1; // Rotate around Y-axis based on mouse X

      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
    }
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]} material-color={'#8A2BE2'} />
  );
}

export default Hero3D;
