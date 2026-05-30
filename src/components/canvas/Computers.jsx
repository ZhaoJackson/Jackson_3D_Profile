import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

/* ─────────────────────────────────────────────────────────
   RESPONSIVE TUNING CONSTANTS
   Adjust these values to change how the model looks on each
   screen size without hunting through the JSX.
   ───────────────────────────────────────────────────────── */

// Model scale — mobile is slightly smaller to fit the 300 px container
const MOBILE_SCALE    = 0.0012;   // ← mobile Iron Man size
const DESKTOP_SCALE   = 0.0018;   // desktop Iron Man size (unchanged)

// Model position — mobile lifted so the upper body is centred in view
const MOBILE_POSITION  = [0, -2.4, 0];  // ← mobile vertical position (y)
const DESKTOP_POSITION = [0, -3.9, 0];  // desktop position (unchanged)

// Camera — mobile pulled back slightly and raised to frame the upper body
const MOBILE_CAMERA_POS  = [0, 0.35, 7.5]; // ← mobile camera [x, y, z]
const DESKTOP_CAMERA_POS = [0, 0, 5];       // desktop camera (unchanged)

// Field of view — narrower gives a tighter telephoto look
const MOBILE_FOV   = 28;   // ← mobile camera zoom (lower = more zoomed in)
const DESKTOP_FOV  = 25;   // desktop FOV (unchanged)

// Device pixel ratio — higher = sharper rendering
const MOBILE_DPR   = [1.5, 2];    // ← mobile sharpness/quality
const DESKTOP_DPR  = [1, 1.5];    // desktop DPR (unchanged)

/* ───────────────────────────────────────────────────────── */

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Studio ambient lighting */}
      <ambientLight intensity={0.8} color="#ffffff" />

      {/* Key light — main dramatic light */}
      <directionalLight
        position={[10, 15, 5]}
        intensity={8}
        color="#ffffff"
        castShadow
        shadow-mapSize={4096}
        shadow-camera-far={100}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Fill light */}
      <pointLight position={[-8, 8, 8]}  intensity={6} color="#ffffff" distance={50} decay={2} />

      {/* Rim light */}
      <spotLight
        position={[0, 5, -10]}
        angle={0.4}
        penumbra={0.2}
        intensity={10}
        color="#ffffff"
        castShadow
        shadow-mapSize={2048}
        distance={50}
        decay={2}
      />

      {/* Accent lights */}
      <pointLight position={[0,   15, 0]}  intensity={5} color="#ffffff" distance={30} decay={2} />
      <pointLight position={[0,   -8, 0]}  intensity={3} color="#ffffff" distance={30} decay={2} />
      <pointLight position={[12,   5, 0]}  intensity={4} color="#ffffff" distance={40} decay={2} />
      <pointLight position={[-12,  5, 0]}  intensity={4} color="#ffffff" distance={40} decay={2} />

      <primitive
        object={computer.scene}
        scale={isMobile ? MOBILE_SCALE    : DESKTOP_SCALE}
        position={isMobile ? MOBILE_POSITION  : DESKTOP_POSITION}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={isMobile ? MOBILE_DPR : DESKTOP_DPR}
      camera={{
        position: isMobile ? MOBILE_CAMERA_POS : DESKTOP_CAMERA_POS,
        fov:      isMobile ? MOBILE_FOV        : DESKTOP_FOV,
      }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,            // sharp edges on all screen sizes
        alpha: true,                // transparent background
        powerPreference: "high-performance",
      }}
      style={isMobile ? { pointerEvents: 'none' } : undefined}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isMobile}   // disable manual rotate on mobile (no scroll blocking)
          autoRotate={true}
          autoRotateSpeed={1}
          enableDamping={!isMobile}
          dampingFactor={0.05}
          minDistance={isMobile ? MOBILE_CAMERA_POS[2] : DESKTOP_CAMERA_POS[2]}
          maxDistance={isMobile ? MOBILE_CAMERA_POS[2] : DESKTOP_CAMERA_POS[2]}
          target={[0, 0, 0]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
