import Card from './Card'
import Button from './Button'

export default function CurrentFocus() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-neural-teal/10 text-neural-teal font-semibold text-sm mb-4">
            Active Project
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Current Focus: <span className="text-gradient">AbsenceLens</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            An AI-assisted EEG pre-screening tool for children with possible absence epilepsy — kids who seem distracted or daydreaming but may actually be having brief seizures.
          </p>
          
          {/* Progress indicator */}
          <div className="max-w-md mx-auto mt-6">
            <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
              <span>Progress</span>
              <span className="font-semibold">Phase 2: Model Development</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: '45%',
                  background: 'linear-gradient(to right, #4FD1C5, #22D3EE)'
                }}
              >
                <div className="w-full h-full animate-pulse" style={{ background: 'rgba(255, 255, 255, 0.3)' }} />
              </div>
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>Research</span>
              <span>Building</span>
              <span>Testing</span>
              <span>Deploy</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-neural-teal/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-neural-teal">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="12" y1="2" x2="12" y2="9"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">
                  Problem
                </h3>
                <p className="text-slate-600">
                  Many kids with absence seizures are mislabeled as lazy or having ADHD, delaying proper treatment.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-neural-violet/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-neural-violet">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">
                  Goal
                </h3>
                <p className="text-slate-600">
                  Help neurologists quickly spot typical absence patterns (3 Hz spike-and-wave) in EEG recordings.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-neural-cyan/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-neural-cyan">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">
                  Tech
                </h3>
                <p className="text-slate-600">
                  Python, MNE, signal processing, ML classifiers, interpretability.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button href="/projects#absencelens">
            View project details
          </Button>
        </div>
      </div>
    </section>
  )
}