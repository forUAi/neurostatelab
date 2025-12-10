import Card from './Card'

export default function Exploring() {
  const areas = [
    {
      title: 'Brain Signals & States',
      description: 'EEG, seizure patterns, ICU brain monitoring, and how different brain states show up in data.',
      gradient: 'from-neural-teal to-neural-cyan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      title: 'Clinical Neurotech',
      description: 'Working on tools that fit into real neurology workflows — not science fiction, but EEG labs, pediatric epilepsy, ICU, and surgical planning.',
      gradient: 'from-neural-violet to-purple-500',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
        </svg>
      ),
    },
    {
      title: 'Mental Health & Behavior',
      description: 'Long-term, using brain & behavior models to support healthier routines, reduce depression and addiction, and help health-focused products respect the mind.',
      gradient: 'from-pink-500 to-neural-violet',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What I'm Exploring
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Three interconnected areas where computational neuroscience meets real clinical need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Card key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${area.gradient} shadow-lg`}>
                  {area.icon}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {area.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}