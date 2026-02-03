'use client'

import { Github, Linkedin, Twitter, Mail, Send, ArrowRight } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

export function ContactPanel() {
  const contactMethods = [
    {
      name: 'GitHub',
      icon: Github,
      href: SOCIAL_LINKS.github,
      description: 'Check out my code and projects',
      color: 'hover:bg-purple-500/10 hover:border-purple-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: SOCIAL_LINKS.linkedin,
      description: 'Connect professionally',
      color: 'hover:bg-blue-500/10 hover:border-blue-500',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: SOCIAL_LINKS.twitter,
      description: 'Follow my tech journey',
      color: 'hover:bg-sky-500/10 hover:border-sky-500',
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${SOCIAL_LINKS.email}`,
      description: 'Drop me a message',
      color: 'hover:bg-accent/10 hover:border-accent',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p className="text-xl text-muted-foreground">
          Always open to new opportunities and collaborations
        </p>
      </div>

      {/* Contact methods */}
      <div className="grid md:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon

          return (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={method.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={`group relative bg-muted/30 border border-border rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${method.color}`}
            >
              {/* Icon */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">
                    {method.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>

                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          )
        })}
      </div>

      {/* Quick email section */}
      <div className="bg-gradient-to-br from-accent/20 to-accent-secondary/20 border border-accent/30 rounded-xl p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent rounded-lg">
            <Send className="w-6 h-6 text-background" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Quick Email</h3>
            <p className="text-foreground/80 mb-4">
              Got a project idea or just want to chat? Send me an email at:
            </p>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary font-mono text-lg transition-colors"
            >
              {SOCIAL_LINKS.email}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-center text-sm text-muted-foreground">
        I typically respond within 24-48 hours
      </p>
    </div>
  )
}
