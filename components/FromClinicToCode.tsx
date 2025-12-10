export default function FromClinicToCode() {
  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" x2="12" y1="19" y2="22"></line>
        </svg>
      ),
      title: 'Listen to real problems',
      description: 'Misdiagnosed seizures, missed ICU events, med side-effects.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#9F7AEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      title: 'Model brain & behavior',
      description: 'EEG patterns, state transitions, cognitive impact.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      title: 'Build & test tools',
      description: 'Prototypes like AbsenceLens, ICU seizure detectors, med-tuning helpers.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
        </svg>
      ),
      title: 'Share openly',
      description: "Blog posts, code, and explainers on what works and what doesn't.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            From Clinic to Code
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A methodical approach to building neurotechnology that actually helps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-neural-teal/40 to-neural-violet/40 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white shadow-lg mb-4 border-2 border-slate-100 transition-all hover:scale-105 hover:shadow-xl">
                  {step.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}