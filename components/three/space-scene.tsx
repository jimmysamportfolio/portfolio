'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { StarField } from './star-field'
import { BlackHole } from './black-hole'
import { Asteroids } from './asteroids'
import { CAMERA_POSITION } from '@/lib/constants'
import type { SectionId } from '@/lib/constants'

interface SpaceSceneProps {
  activeSection: SectionId | null
  onSectionClick: (section: SectionId) => void
}

export function SpaceScene({ activeSection, onSectionClick }: SpaceSceneProps) {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{
          position: [CAMERA_POSITION.x, CAMERA_POSITION.y, CAMERA_POSITION.z],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for base visibility */}
          <ambientLight intensity={0.1} />

          {/* Point light from black hole area */}
          <pointLight
            position={[0, 0, -2]}
            intensity={2}
            color="#8b5cf6"
            distance={20}
          />

          {/* Background stars */}
          <StarField count={2000} />

          {/* Central black hole */}
          <BlackHole />

          {/* Floating asteroids */}
          <Asteroids
            activeSection={activeSection}
            onSectionClick={onSectionClick}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
