"use client";

import { FC, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const RotatingCube: FC = () => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#2f74c0" />
    </mesh>
  );
};

const Scene: FC = () => {
  return (
    <Canvas style={{ background: 'black' }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <RotatingCube />
    </Canvas>
  );
};

const UsersPage: FC = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Scene />
      <div class="sketchfab-embed-wrapper"> <iframe title="Old Computer" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/40ce7593655b454ba576033afb08d925/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/old-computer-40ce7593655b454ba576033afb08d925?utm_medium=embed&utm_campaign=share-popup&utm_content=40ce7593655b454ba576033afb08d925" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Old Computer </a> by <a href="https://sketchfab.com/Jaton24?utm_medium=embed&utm_campaign=share-popup&utm_content=40ce7593655b454ba576033afb08d925" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Jaton24 </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=40ce7593655b454ba576033afb08d925" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
    </div>
  );
};

export default UsersPage;