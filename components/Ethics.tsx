import Button from './Button'

export default function Ethics() {
  return (
    <section className="py-20 bg-gradient-to-br from-ink via-ink-light to-slate-900 text-white relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neural-teal/5 to-transparent rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-neural-teal/20 mb-6 border-2 border-neural-teal/30">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-neural-teal">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Mission & Values
          </h2>
          <p className="text-xl text-slate-300">
            Building technology that serves people, not exploits them.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-dark rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-xl bg-neural-teal/20 mr-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-neural-teal">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold">Building for:</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start border-b border-white/5 pb-4">
                <span className="w-2 h-2 rounded-full bg-neural-teal mr-4 mt-2 flex-shrink-0"></span>
                <span className="text-lg">Clinicians trying to understand patients better</span>
              </li>
              <li className="flex items-start border-b border-white/5 pb-4">
                <span className="w-2 h-2 rounded-full bg-neural-teal mr-4 mt-2 flex-shrink-0"></span>
                <span className="text-lg">Health-focused products that respect user well-being</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-neural-teal mr-4 mt-2 flex-shrink-0"></span>
                <span className="text-lg">People suffering from epilepsy, depression, addiction, burnout</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/about" variant="ghost">
            Read my full mission
          </Button>
        </div>
      </div>
    </section>
  )
}