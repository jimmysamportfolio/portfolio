'use client'

import { Award, Users, Calendar } from 'lucide-react'
import { ACHIEVEMENTS } from '@/lib/constants'

export function AchievementsPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
          Achievements
        </h1>
        <p className="text-xl text-muted-foreground">
          Leadership roles and recognitions
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {ACHIEVEMENTS.map((achievement, index) => (
          <div
            key={index}
            className="relative pl-8 pb-8 border-l-2 border-accent/30 last:pb-0 group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-background group-hover:scale-125 transition-transform" />

            {/* Content card */}
            <div className="bg-muted/30 border border-border hover:border-accent rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-accent/10">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {achievement.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-mono">{achievement.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {achievement.description}
              </p>

              {/* Impact badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg w-fit">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">
                  {achievement.impact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 p-4 bg-accent/5 border border-accent/20 rounded-xl">
        <Award className="w-6 h-6 text-accent flex-shrink-0" />
        <p className="text-sm text-foreground/80">
          Continuously seeking new opportunities to make an impact in the tech community
        </p>
      </div>
    </div>
  )
}
