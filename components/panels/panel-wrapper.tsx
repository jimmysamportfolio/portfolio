'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { SectionId } from '@/lib/constants'
import { AboutPanel } from './about-panel'
import { ProjectsPanel } from './projects-panel'
import { AchievementsPanel } from './achievements-panel'
import { HobbiesPanel } from './hobbies-panel'
import { ContactPanel } from './contact-panel'
import { X } from 'lucide-react'

interface PanelWrapperProps {
  activeSection: SectionId | null
  onClose: () => void
}

export function PanelWrapper({ activeSection, onClose }: PanelWrapperProps) {
  const renderPanel = () => {
    switch (activeSection) {
      case 'about':
        return <AboutPanel />
      case 'projects':
        return <ProjectsPanel />
      case 'achievements':
        return <AchievementsPanel />
      case 'hobbies':
        return <HobbiesPanel />
      case 'contact':
        return <ContactPanel />
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {activeSection && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.4
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90vw] max-w-4xl max-h-[85vh] overflow-hidden"
          >
            {/* Panel container */}
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-30 p-2 bg-muted/50 hover:bg-muted rounded-full transition-colors group"
                aria-label="Close panel"
              >
                <X className="w-5 h-5 text-foreground group-hover:text-accent" />
              </button>

              {/* Scrollable content */}
              <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="p-8 md:p-12"
                >
                  {renderPanel()}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
