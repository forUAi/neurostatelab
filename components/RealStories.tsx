import Card from './Card'

export default function RealStories() {
  const stories = [
    {
      scenario: 'The "Daydreaming" Student',
      quote: 'Teachers kept saying she wasn\'t paying attention. We thought it was behavioral. Turns out, she was having 40+ seizures per day.',
      condition: 'Absence Epilepsy',
      outcome: 'Diagnosed after 18 months',
      gradient: 'from-neural-teal/10 to-neural-cyan/10',
      accentColor: 'border-neural-teal',
    },
    {
      scenario: 'The ICU Mystery',
      quote: 'Patient wasn\'t waking up post-surgery. Continuous EEG revealed non-convulsive status epilepticus — invisible seizures causing the unresponsiveness.',
      condition: 'Non-Convulsive Seizures',
      outcome: 'Caught only after 72 hours of monitoring',
      gradient: 'from-neural-violet/10 to-purple-500/10',
      accentColor: 'border-neural-violet',
    },
    {
      scenario: 'The Medication Struggle',
      quote: 'The seizures stopped, but I couldn\'t think straight. Felt like living in a fog. Had to choose between seizure control and being able to work.',
      condition: 'Cognitive Side Effects',
      outcome: 'Took 3 med adjustments over 8 months',
      gradient: 'from-pink-500/10 to-neural-violet/10',
      accentColor: 'border-pink-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Real Scenarios, Real Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These are the stories that drive this work — real patients and families navigating complex neurological challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} className={`bg-gradient-to-br ${story.gradient} rounded-2xl p-6 border-l-4 ${story.accentColor} hover:shadow-lg transition-shadow`}>
              <div className="mb-4">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                  {story.scenario}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-white/80 text-xs font-semibold text-slate-700 mb-3">
                  {story.condition}
                </div>
              </div>
              
              <blockquote className="mb-4 relative">
                <div className="absolute -left-2 -top-2 text-6xl text-neural-teal/20 font-serif leading-none">"</div>
                <p className="text-slate-700 italic leading-relaxed pl-4">
                  {story.quote}
                </p>
              </blockquote>
              
              <div className="pt-3 border-t border-slate-300/50">
                <p className="text-sm font-semibold text-slate-600">
                  Outcome: <span className="text-slate-800">{story.outcome}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 max-w-3xl mx-auto">
            <strong>These delays are preventable.</strong> With better tools to detect patterns earlier, 
            we can help clinicians catch these conditions faster and get patients the right treatment sooner.
          </p>
        </div>
      </div>
    </section>
  )
}