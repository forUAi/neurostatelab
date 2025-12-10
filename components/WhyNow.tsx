export default function WhyNow() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-neural-teal to-neural-violet rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="font-display text-2xl font-bold mb-4">
                Why Now?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>EEG datasets are now publicly available</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>ML tools can detect subtle patterns humans miss</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Clinicians are overwhelmed and need better tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>The cost of misdiagnosis is too high</span>
                </li>
              </ul>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-neural-teal/20 to-neural-violet/20 rounded-2xl -z-10" />
          </div>

          {/* Right side - Text content */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              The Technology Exists. <br />
              <span className="text-gradient">The Will Must Follow.</span>
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                We have powerful signal processing algorithms, large EEG datasets, and ML models 
                that can detect patterns in milliseconds. What's missing is the bridge between 
                these capabilities and real clinical workflows.
              </p>
              <p>
                <strong>NeuroState Lab exists to build that bridge.</strong> Not through hype 
                or shortcuts, but through careful research, rigorous testing, and collaboration 
                with the clinicians who understand these problems intimately.
              </p>
              <p className="text-neural-teal font-semibold">
                This isn't about replacing doctors — it's about giving them better tools so they 
                can focus on what they do best: caring for patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}