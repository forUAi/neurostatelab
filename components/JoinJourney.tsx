import Button from './Button'

export default function JoinJourney() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl p-12 shadow-xl border-2 border-neural-teal/20">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Follow the Journey
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm documenting everything openly — the wins, the failures, the lessons learned. 
            If you're interested in computational neuroscience, ethical AI, or building tools 
            that actually help people, you might find this useful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/blog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              Read the Brain Log
            </Button>
            <Button href="/about" variant="ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Learn About the Mission
            </Button>
          </div>

          <div className="pt-8 border-t border-slate-200">
            <p className="text-slate-600 mb-4">
              <strong>Are you a clinician, researcher, or builder?</strong>
            </p>
            <p className="text-slate-600">
              I'd love to hear from you. Reach out at{' '}
              <a href="mailto:hello@neurostatelab.com" className="text-neural-teal font-semibold hover:text-neural-violet transition-colors">
                hello@neurostatelab.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}