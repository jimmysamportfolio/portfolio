'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { BLACK_HOLE_POSITION } from '@/lib/constants'

export function BlackHole() {
  const accretionDiskRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    // Rotate accretion disk
    if (accretionDiskRef.current) {
      accretionDiskRef.current.rotation.z += 0.005
    }

    // Pulse glow effect
    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.9
      glowRef.current.scale.setScalar(pulse)
    }

    // Slow rotation of core
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.002
    }
  })

  return (
    <group position={[BLACK_HOLE_POSITION.x, BLACK_HOLE_POSITION.y, BLACK_HOLE_POSITION.z]}>
      {/* Central black sphere (event horizon) */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#1a0033"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={1}
        />
      </mesh>

      {/* Accretion disk */}
      <mesh ref={accretionDiskRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2, 0.4, 16, 64]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#6366f1"
          emissiveIntensity={1.5}
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Outer glow ring */}
      <mesh ref={glowRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.5, 0.2, 16, 64]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#8b5cf6"
          emissiveIntensity={2}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Point light to illuminate nearby objects */}
      <pointLight
        position={[0, 0, 0]}
        intensity={1.5}
        color="#8b5cf6"
        distance={15}
      />
    </group>
  )
}
