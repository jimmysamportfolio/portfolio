'use client'

import { useState } from 'react'
import { SpaceScene } from '@/components/three/space-scene'
import { PanelWrapper } from '@/components/panels/panel-wrapper'
import type { SectionId } from '@/lib/constants'

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)

  const handleSectionClick = (section: SectionId) => {
    setActiveSection(section)
  }

  const handleCloseSection = () => {
    setActiveSection(null)
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      {/* 3D Space Scene */}
      <SpaceScene
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Panel Wrapper */}
      <PanelWrapper
        activeSection={activeSection}
        onClose={handleCloseSection}
      />
    </main>
  )
}
