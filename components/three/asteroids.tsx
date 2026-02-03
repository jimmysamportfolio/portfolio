'use client'

import { Asteroid } from './asteroid'
import { ASTEROIDS, type SectionId } from '@/lib/constants'

interface AsteroidsProps {
  activeSection: SectionId | null
  onSectionClick: (section: SectionId) => void
}

export function Asteroids({ activeSection, onSectionClick }: AsteroidsProps) {
  return (
    <group>
      {ASTEROIDS.map((config) => (
        <Asteroid
          key={config.id}
          config={config}
          isActive={activeSection === config.id}
          onClick={() => onSectionClick(config.id)}
        />
      ))}
    </group>
  )
}
