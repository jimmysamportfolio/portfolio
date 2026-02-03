'use client'

import { HOBBIES } from '@/lib/constants'
import * as Icons from 'lucide-react'

export function HobbiesPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
          Hobbies & Interests
        </h1>
        <p className="text-xl text-muted-foreground">
          What I do beyond the screen
        </p>
      </div>

      {/* Hobbies grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {HOBBIES.map((hobby, index) => {
          // Dynamically get the icon component
          const IconComponent = Icons[hobby.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>

          return (
            <div
              key={index}
              className="group relative bg-muted/30 border border-border hover:border-accent rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />

              {/* Content */}
              <div className="relative flex flex-col items-center gap-3 text-center">
                {IconComponent && (
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                )}
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                  {hobby.name}
                </h3>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer quote */}
      <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-accent/20 rounded-xl">
        <p className="text-center text-foreground/90 italic">
          "Life is about balance - coding fuels my mind, hobbies fuel my soul."
        </p>
      </div>
    </div>
  )
}
