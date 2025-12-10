import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'

// This is required for static export
export function generateStaticParams() {
  return [
    { slug: 'why-i-started-neurostatelab' },
    { slug: 'what-are-absence-seizures' },
    { slug: 'first-eeg-pipeline' },
  ]
}

export default function BlogPostPage() {
  const post = {
    title: 'Why I Started NeuroState Lab',
    date: '2024-01-15',
    tags: ['LearningLog', 'Mission'],
    content: `I've always been fascinated by the brain — not in an abstract "consciousness is mysterious" way, but in a practical "how do we actually help people suffering from brain disorders" way.

## The Spark

A few years ago, I encountered a case that stuck with me. A 9-year-old boy kept getting in trouble at school for "spacing out" during class. Teachers thought she was distracted or defiant. Her parents were told she might have ADHD.

But it turned out she had absence epilepsy brief seizures that looked like daydreaming but were actually electrical storms in her brain. Each "staring spell" was a seizure, happening dozens of times per day, disrupting her ability to learn and making everyone around her misinterpret her behavior.

By the time she was properly diagnosed, she had lost nearly two years of normal schooling and had internalized the message that she was "lazy" or "not trying hard enough."

## The Pattern

As I learned more about epilepsy, ICU brain monitoring, and neuropsychiatric conditions, I saw this pattern repeat. The brain gives off clear patterns through EEG, behavior, and response to medications, but these signals are often missed because monitoring is expensive, expertise is scarce, or the patterns are subtle. This leads to misdiagnosis, delayed treatment, and unnecessary suffering.

This is not a technology problem in the sense that we lack EEG machines or imaging. It is a human-scale problem: we need better tools to help clinicians spot patterns, track changes, and make decisions with incomplete information.

## Why NeuroState Lab

I wanted a space to learn computational neuroscience deeply, build practical prototypes, and stay ethical. The name reflects the focus: understanding different brain states and building tools that respect and support people in those states.

## What Is Next

I am starting with AbsenceLens, an AI-assisted EEG tool for pre-screening absence epilepsy. Over time, I want to expand to ICU seizure detection, medication tuning, and eventually mental health tools.

This is a long-term project. I am not rushing to launch a startup or claim to revolutionize anything. I am here to learn, build, and help where I can.

If you are a neurologist, researcher, or product builder interested in this space, I would love to hear from you.`,
  }

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/blog"
          className="inline-flex items-center text-neural-teal hover:text-neural-violet font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Brain Log
        </Link>

        <header className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-neural-teal/10 text-neural-teal font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-slate max-w-none">
          <div className="text-slate-700 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-display text-2xl font-bold text-slate-900 mt-12 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                )
              }
              return null
            })}
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog"
              className="text-neural-teal hover:text-neural-violet font-medium transition-colors"
            >
              ← All posts
            </Link>
            <div className="text-slate-500 text-sm">
              Share your thoughts at hello@neurostatelab.com
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}