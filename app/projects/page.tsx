import Card from '@/components/Card'
import Link from 'next/link'
import { Link2 } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      id: 'absencelens',
      name: 'AbsenceLens',
      tagline: 'AI-Assisted EEG for Absence Epilepsy',
      status: 'In Progress',
      statusColor: 'bg-neural-teal text-white',
      problem: 'Many children with staring spells are misdiagnosed as inattentive or having ADHD when they may have absence seizures. Traditional EEG review is time-intensive, and subtle patterns can be missed.',
      approach: [
        'Use open EEG datasets to build pattern recognition models',
        'Detect generalized spike-and-wave patterns (especially 3 Hz)',
        'Highlight suspicious segments for neurologists to review',
        'Build explainable visualizations to show why the model flagged each segment',
      ],
      stack: ['Python', 'MNE-Python', 'NumPy/SciPy', 'scikit-learn', 'PyTorch', 'Matplotlib'],
      links: [
        { label: 'Related posts', href: '/blog?tag=AbsenceLens' },
      ],
    },
    {
      id: 'icu-seizure',
      name: 'ICU Seizure Detection',
      tagline: 'Continuous EEG Monitoring for Critical Care',
      status: 'Idea',
      statusColor: 'bg-slate-400 text-white',
      problem: 'Non-convulsive seizures in ICU patients are common but often missed because continuous EEG monitoring requires constant expert review. Delayed detection worsens outcomes.',
      approach: [
        'Detect rhythmic patterns and evolving waveforms in continuous EEG',
        'Alert clinicians to potential seizure activity in real-time',
        'Reduce false positives through multi-stage filtering',
        'Support integration with existing ICU monitoring systems',
      ],
      stack: ['Python', 'Real-time processing', 'Edge deployment', 'Clinical validation'],
      links: [],
    },
    {
      id: 'med-tuning',
      name: 'Med Tuning Assistant',
      tagline: 'Balancing Seizure Control and Cognition',
      status: 'Idea',
      statusColor: 'bg-slate-400 text-white',
      problem: 'Anti-seizure medications often have cognitive side effects. Finding the right dose that controls seizures without impairing memory, attention, or mood is challenging and requires careful tracking.',
      approach: [
        'Track seizure frequency, medication changes, and cognitive metrics over time',
        'Use simple models to suggest dosage adjustments',
        'Visualize trends to help patients and doctors make informed decisions',
        'Privacy-first, patient-controlled data',
      ],
      stack: ['React Native', 'Node.js', 'PostgreSQL', 'Time-series analysis'],
      links: [],
    },
  ]

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            A living lab of experiments in computational neuroscience and neurotechnology. Each project addresses a real clinical problem with testable technical approaches.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="scroll-mt-24">
              <Card className="hover:shadow-2xl" hover={false}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-6 border-b border-slate-200">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-slate-900 mb-2">
                      {project.name}
                    </h2>
                    <p className="text-lg text-slate-600">{project.tagline}</p>
                  </div>
                  <span className={`mt-4 sm:mt-0 inline-block px-4 py-2 rounded-full text-sm font-semibold ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">
                    Problem
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">
                    Approach
                  </h3>
                  <ul className="space-y-2">
                    {project.approach.map((item, index) => (
                      <li key={index} className="flex items-start text-slate-700">
                        <span className="text-neural-teal mr-3 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links.length > 0 && (
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap gap-4">
                      {project.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center text-neural-teal font-medium hover:text-neural-violet transition-colors"
                        >
                          <Link2 className="w-4 h-4 mr-2" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-neural-teal/5 to-neural-violet/5 border border-neural-teal/20">
          <p className="text-slate-700 text-center">
            <strong className="font-display">Note:</strong> These are research prototypes, not clinical products. All work follows ethical guidelines and respects patient privacy.
          </p>
        </div>
      </div>
    </div>
  )
}
