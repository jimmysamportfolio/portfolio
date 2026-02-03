'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import type { AsteroidConfig } from '@/lib/constants'

interface AsteroidProps {
  config: AsteroidConfig
  isActive: boolean
  onClick: () => void
}

export function Asteroid({ config, isActive, onClick }: AsteroidProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current && !isActive) {
      // Floating animation
      const time = state.clock.elapsedTime
      const floatOffset = Math.sin(time * 0.5 + config.position[0]) * 0.15
      meshRef.current.position.y = config.position[1] + floatOffset

      // Rotation
      meshRef.current.rotation.x += config.rotationSpeed * 0.01
      meshRef.current.rotation.y += config.rotationSpeed * 0.01
    }
  })

  // Change cursor on hover
  const handlePointerOver = () => {
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    setHovered(false)
    document.body.style.cursor = 'auto'
  }

  return (
    <group
      position={[config.position[0], config.position[1], config.position[2]]}
      onClick={onClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {/* Asteroid mesh */}
      <mesh ref={meshRef} scale={config.scale}>
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={config.color}
          emissive={config.color}
          emissiveIntensity={hovered ? 0.6 : 0.2}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Label (visible on hover or when active) */}
      {(hovered || isActive) && (
        <Text
          position={[0, config.scale + 0.8, 0]}
          fontSize={0.3}
          color="#fafafa"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {config.label}
        </Text>
      )}

      {/* Glow effect on hover */}
      {hovered && (
        <mesh scale={config.scale * 1.3}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshBasicMaterial
            color={config.color}
            transparent
            opacity={0.2}
            side={THREE.BackSide}
          />
        </mesh>
      )}
    </group>
  )
}
