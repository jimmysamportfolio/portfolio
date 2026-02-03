'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

export function AboutPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-xl text-muted-foreground">
          Student, Developer & Product Manager
        </p>
      </div>

      {/* About content */}
      <div className="space-y-4 text-foreground/90 leading-relaxed">
        <p>
          I'm a passionate student developer and product manager at UBC, focused on building
          intelligent applications that leverage AI and machine learning to solve real-world problems.
        </p>

        <p>
          Currently serving as a Product Manager at BizTech, where I lead product development
          and strategy for one of UBC's largest business and technology organizations. I specialize
          in creating AI-powered solutions, particularly in the areas of RAG (Retrieval-Augmented
          Generation) and autonomous agent systems.
        </p>

        <p>
          When I'm not coding or managing products, you'll find me exploring new technologies,
          participating in hackathons, or contributing to the tech community through various
          initiatives and events.
        </p>
      </div>

      {/* Social links */}
      <div className="pt-4">
        <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
        <div className="flex flex-wrap gap-3">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent/20 border border-border hover:border-accent rounded-lg transition-all group"
          >
            <Github className="w-5 h-5 group-hover:text-accent transition-colors" />
            <span>GitHub</span>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent/20 border border-border hover:border-accent rounded-lg transition-all group"
          >
            <Linkedin className="w-5 h-5 group-hover:text-accent transition-colors" />
            <span>LinkedIn</span>
          </a>

          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent/20 border border-border hover:border-accent rounded-lg transition-all group"
          >
            <Twitter className="w-5 h-5 group-hover:text-accent transition-colors" />
            <span>Twitter</span>
          </a>

          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent/20 border border-border hover:border-accent rounded-lg transition-all group"
          >
            <Mail className="w-5 h-5 group-hover:text-accent transition-colors" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}
