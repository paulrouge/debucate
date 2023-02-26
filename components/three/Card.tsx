'use client';
import React, { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, RoundedBox } from '@react-three/drei'
import { useSpring, animated} from '@react-spring/three'


function Box() {    // const mesh = useRef<THREE.Mesh>(null!)
    // const [angle, setAngle] = useSpring(() => ({ angle: 3 }));



    return (
        <mesh rotation={[90,10,0]}>
        <boxGeometry args={[1, 2, 0.1]}/>
        <meshStandardMaterial
            attach="material"
            color="blue"
            transparent
            roughness={0.1}
            metalness={0.1}
        />
        <Html>
            <h1>Test</h1>
        </Html>
        </mesh>
    )
}

type KeyLightProps = {
    brightness: number;
    color: string;
};

// Lights
function KeyLight({ brightness, color } : KeyLightProps) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0] as any}
        // penumbra={1}
        castShadow
      />
    );
  }
  function FillLight({ brightness, color }: KeyLightProps) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0] as any}
        // penumbra={2}
        castShadow
      />
    );
  }
  
  function RimLight({ brightness, color }: KeyLightProps) {
    return (
      <rectAreaLight
        width={2}
        height={2}
        intensity={brightness}
        color={color}
        position={[1, 4, -2]}
        rotation={[0, 180, 0]}
        castShadow
      />
    );
  }

export default function Card() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
        <ambientLight intensity={4} />
        <pointLight position={[10, 10, 5]} intensity={1}/>
        <pointLight position={[-10, -10, -10]} />
        <KeyLight brightness={66} color={"#f0c999"} />
        <FillLight brightness={26} color={"#bdefff"} />
        <RimLight brightness={154} color={"#fff"} />
        <Box/>
        <OrbitControls
        enableRotate={true}
        enablePan={false}
        enableZoom={false}
        // minPolarAngle={Math.PI / 20} // 10 degrees in radians
        // maxPolarAngle={Math.PI / 20}
        />
    </Canvas>
  )
}
