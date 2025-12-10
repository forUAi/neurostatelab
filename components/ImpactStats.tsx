'use client'

import { useEffect, useState, useRef } from 'react'

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      value: '1 in 10',
      label: 'Children with absence epilepsy are initially misdiagnosed',
      color: 'from-neural-teal to-neural-cyan',
    },
    {
      value: '20%',
      label: 'Of ICU patients have non-convulsive seizures that go undetected',
      color: 'from-neural-violet to-purple-500',
    },
    {
      value: '2+ years',
      label: 'Average delay in proper diagnosis for absence epilepsy',
      color: 'from-pink-500 to-neural-violet',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-ink-light to-ink text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #4FD1C5 0px, #4FD1C5 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #4FD1C5 0px, #4FD1C5 1px, transparent 1px, transparent 40px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            The Problem is <span className="text-gradient">Real & Urgent</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            These aren't just statistics — they're real patients facing delays, misdiagnosis, and unnecessary suffering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: isVisible ? `fadeUp 0.6s ease-out ${index * 0.2}s both` : 'none'
              }}
            >
              <div className="glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl`} />
                
                <div className="relative z-10">
                  <div className={`text-5xl sm:text-6xl font-display font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4`}>
                    {stat.value}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 italic">
            Sources: Epilepsia, JAMA Neurology, Pediatric Neurology research literature
          </p>
        </div>
      </div>
    </section>
  )
}