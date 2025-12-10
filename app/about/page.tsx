import Card from '@/components/Card'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            About NeuroState Lab
          </h1>
          <p className="text-xl text-slate-600">
            A personal research lab by Vishal Chandupatla exploring computational neuroscience and neurotechnology with a focus on real clinical problems and ethical boundaries.
          </p>
        </div>

        {/* Who I Am */}
        {/* Who I Am */}
{/* Who I Am */}
<Card className="mb-8">
  <div className="flex items-start mb-4">
    <div className="p-3 rounded-xl bg-neural-teal/10 mr-4">
      <svg className="w-6 h-6 text-neural-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
    <h2 className="font-display text-3xl font-bold text-slate-900">
      About
    </h2>
  </div>
  <div className="space-y-4 text-slate-700 leading-relaxed">
    <p>
      I'm <strong>Vishal Chandupatla</strong> , an engineer, builder, and researcher working at the intersection of AI/ML, computational neuroscience, product engineering, and human well-being.
    </p>
    <p>
      My background spans full-stack systems, machine learning pipelines, mobile app development, data engineering, and applied AI. I've shipped products used by real people, designed AI-driven systems end-to-end, and worked deeply with complex engineering stacks across consumer and enterprise environments.
    </p>
    <p>
      I'm also the founder of <strong>MACRA</strong>, a personalized meal-planning and fresh-grocery platform. I designed and built the entire mobile experience, backend systems, and personalization engines. That work taught me how to translate messy human behavior into clean product logic, how to ship at speed, and how to balance machine intelligence with real-world usability.
    </p>
    <p>
      Now, with <strong>NeuroState Lab</strong>, I'm taking those same skills , systems thinking, ML engineering, product intuition , and applying them to computational neuroscience. Specifically, I'm building <strong>AbsenceLens</strong>, an AI-assisted EEG analysis tool for detecting absence epilepsy in children. This project combines signal processing, deep learning, and clinical validation to help neurologists catch patterns that are often missed.
    </p>
    <p>
      NeuroState Lab isn't my day job. It's a long-term personal commitment to learning neuroscience deeply, building tools that might actually help people, and doing it all openly. No hype, no shortcuts , just rigorous work at the intersection of AI and brain health.
    </p>
  </div>
</Card>

        {/* What NeuroState Lab Is */}
        <Card className="mb-8">
          <div className="flex items-start mb-4">
            <div className="p-3 rounded-xl bg-neural-violet/10 mr-4">
              <svg className="w-6 h-6 text-neural-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="12" y1="2" x2="12" y2="9"></line>
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              What NeuroState Lab Is
            </h2>
          </div>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              NeuroState Lab is my <strong>personal research lab</strong>, not a formal institution. It is my space to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-neural-teal mr-3 mt-1">→</span>
                <span><strong>Learn computational neuroscience deeply</strong>,signal processing, EEG analysis, brain state modeling, and the clinical context that makes all of this meaningful.</span>
              </li>
              <li className="flex items-start">
                <span className="text-neural-teal mr-3 mt-1">→</span>
                <span><strong>Build practical prototypes</strong>,tools that could help clinicians, patients, and health-focused product teams, not just academic papers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-neural-teal mr-3 mt-1">→</span>
                <span><strong>Stay ethical</strong>,never build surveillance tech, mental state scoring for hiring/insurance, or engagement optimization that exploits people.</span>
              </li>
            </ul>
            <p>
              My focus areas are:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="text-neural-violet mr-3">•</span>
                <span><strong>EEG, epilepsy, and ICU brain monitoring</strong>,helping neurologists catch patterns they might miss</span>
              </li>
              <li className="flex items-start">
                <span className="text-neural-violet mr-3">•</span>
                <span><strong>Mental health and brain states</strong>,using brain and behavior models to support healthier routines</span>
              </li>
              <li className="flex items-start">
                <span className="text-neural-violet mr-3">•</span>
                <span><strong>Healthy, ethical product integration</strong>,helping product teams respect users' mental well-being</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Mission & Ethics */}
        <Card className="mb-8">
          <div className="flex items-start mb-4">
            <div className="p-3 rounded-xl bg-neural-cyan/10 mr-4">
              <svg className="w-6 h-6 text-neural-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Mission & Ethics
            </h2>
          </div>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-3">
                What I aim to improve:
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Misdiagnosis and delayed treatment (like absence epilepsy in kids)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Missed events in ICU brain monitoring (non-convulsive seizures)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Suffering from mental health conditions and addiction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Products that unintentionally harm users through dark patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Long-Term Vision */}
        <Card className="mb-8">
          <div className="flex items-start mb-4">
            <div className="p-3 rounded-xl bg-purple-100 mr-4">
              <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Long-Term Vision
            </h2>
          </div>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Over the next several years, I want to build a body of work that includes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-neural-teal mr-3 mt-1">→</span>
                <span><strong>Open tools</strong> that clinicians and researchers can actually use</span>
              </li>
              <li className="flex items-start">
                <span className="text-neural-teal mr-3 mt-1">→</span>
                <span><strong>Practical papers and writeups</strong> that explain what works and what does not</span>
              </li>
              <li className="flex items-start">
                <span className="text-neural-teal mr-3 mt-1">→</span>
                <span><strong>Collaborations with clinicians</strong> to validate tools in real settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-neural-teal mr-3 mt-1">→</span>
                <span><strong>Partnerships with product builders</strong> who want to create brain-aware, ethical products</span>
              </li>
            </ul>
            <p>
              This is a marathon, not a sprint. I am committed to doing this right, which means learning deeply, testing rigorously, and always putting people first.
            </p>
          </div>
        </Card>

        {/* Contact */}
        <Card>
          <div className="flex items-start mb-4">
            <div className="p-3 rounded-xl bg-neural-teal/10 mr-4">
              <svg className="w-6 h-6 text-neural-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Connect with Vishal
            </h2>
          </div>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              If you are a neurologist, therapist, researcher, or product builder interested in brain-aware, human-respectful technology, I would love to hear from you.
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:hello@neurostatelab.com" className="text-neural-teal hover:text-neural-violet font-semibold transition-colors">hello@neurostatelab.com</a>
            </p>
            <p>
              <strong>GitHub:</strong> <a href="https://github.com/forUAi" target="_blank" rel="noopener noreferrer" className="text-neural-teal hover:text-neural-violet font-semibold transition-colors">github.com/forUAi</a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}