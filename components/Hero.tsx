'use client'

import Button from './Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ink via-ink-light to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neural-teal rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neural-violet rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Neural network background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connecting lines */}
          <line x1="100" y1="100" x2="300" y2="200" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
          <line x1="300" y1="200" x2="500" y2="150" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
          <line x1="500" y1="150" x2="700" y2="250" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
          <line x1="700" y1="250" x2="900" y2="200" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
          <line x1="200" y1="400" x2="400" y2="500" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
          <line x1="400" y1="500" x2="600" y2="450" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
          <line x1="600" y1="450" x2="800" y2="550" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3"/>
          <line x1="100" y1="100" x2="200" y2="400" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2"/>
          <line x1="300" y1="200" x2="400" y2="500" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2"/>
          <line x1="500" y1="150" x2="600" y2="450" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2"/>
          
          {/* Animated nodes */}
          <circle cx="100" cy="100" r="4" fill="#4FD1C5" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="300" cy="200" r="4" fill="#4FD1C5" opacity="0.6">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="500" cy="150" r="4" fill="#9F7AEA" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="250" r="4" fill="#9F7AEA" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="900" cy="200" r="4" fill="#22D3EE" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="200" cy="400" r="4" fill="#4FD1C5" opacity="0.6">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="400" cy="500" r="4" fill="#22D3EE" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="600" cy="450" r="4" fill="#9F7AEA" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="800" cy="550" r="4" fill="#4FD1C5" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.7s" repeatCount="indefinite"/>
          </circle>
          
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4FD1C5"/>
              <stop offset="100%" stopColor="#9F7AEA"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-up">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Brain States,{' '}
            <span className="text-gradient">Real Care</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Built by <strong className="text-white">Vishal Chandupatla</strong>. NeuroState Lab is my personal research space exploring computational neuroscience and neurotechnology, from EEG and seizures to brain-aware tools that support mental health and better products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href="/blog">
              Read the journey
            </Button>
            <Button href="/projects" variant="ghost">
              View current project
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-neural-teal/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-neural-teal animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}