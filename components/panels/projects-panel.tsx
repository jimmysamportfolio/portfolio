'use client'

import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'

export function ProjectsPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          Featured work and side projects
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 md:gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group bg-muted/30 border border-border hover:border-accent rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-accent/10"
          >
            {/* Project header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-foreground/80 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-muted-foreground text-sm pt-4">
        More projects available on{' '}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
      </p>
    </div>
  )
}
