import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Studio ambient lighting */}
      <ambientLight intensity={0.8} color="#ffffff" />
      
      {/* Key light - main dramatic lighting */}
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
      
      {/* Fill light - soft side lighting */}
      <pointLight 
        position={[-8, 8, 8]} 
        intensity={6} 
        color="#ffffff"
        distance={50}
        decay={2}
      />
      
      {/* Rim light - dramatic edge lighting */}
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
      
      {/* Top accent light */}
      <pointLight 
        position={[0, 15, 0]} 
        intensity={5} 
        color="#ffffff"
        distance={30}
        decay={2}
      />
      
      {/* Bottom accent light */}
      <pointLight 
        position={[0, -8, 0]} 
        intensity={3} 
        color="#ffffff"
        distance={30}
        decay={2}
      />
      
      {/* Side accent lights for full illumination */}
      <pointLight 
        position={[12, 5, 0]} 
        intensity={4} 
        color="#ffffff"
        distance={40}
        decay={2}
      />
      
      <pointLight 
        position={[-12, 5, 0]} 
        intensity={4} 
        color="#ffffff"
        distance={40}
        decay={2}
      />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.002 : 0.0018}
        position={isMobile ? [0, -3.5, 0] : [0, -3.9, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, isMobile ? 1 : 1.5]}
      camera={{ position: [0, 0, 5], fov: isMobile ? 30 : 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: false }}
      style={isMobile ? { pointerEvents: 'none' } : undefined}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isMobile}
          autoRotate={true}
          autoRotateSpeed={1}
          enableDamping={!isMobile}
          dampingFactor={0.05}
          minDistance={5}
          maxDistance={5}
          target={[0, 0, 0]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;