import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

interface IslandProps {
  isMobile: boolean;
}

interface GuraProps {
  isMobile: boolean;
}

const Island: React.FC<IslandProps> = ({ isMobile }) => {
  const island = useGLTF("./island/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.75} position={[0, 0.5, 0]} />
      <pointLight intensity={isMobile ? 0.3 : 3} position={[0, 0.5, 0]} />
      <spotLight position={[0, 1.5, 0]} castShadow intensity={1} />
      <primitive
        object={island.scene}
        scale={isMobile ? 0.75 : 1.5}
        position={isMobile ? [0, -0.5, -0] : [0, -0.5, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const Gura: React.FC<GuraProps> = ({ isMobile }) => {
  const object = useGLTF("./gura/scene.gltf");

  return (
    <mesh>
      <primitive
        object={object.scene}
        scale={isMobile ? 0.25 : 0.5}
        position={isMobile ? [-0.25, 0.16, -0.15] : [-0.5, 0.81, -0.3]}
        rotation={[0, Math.PI / 3, 0]}
      />
    </mesh>
  );
};

const IslandCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [15, 5, 7], fov: isMobile ? 35 : 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Island isMobile={isMobile} />
        <Gura isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default IslandCanvas;
