import Link from 'next/link'
import Card from '@/components/Card'
import { Calendar, Tag } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      title: 'Why I Started NeuroState Lab',
      excerpt: 'The story behind building a personal lab for computational neuroscience and what I hope to achieve. From witnessing misdiagnoses to deciding to learn the field deeply.',
      date: '2024-01-15',
      tags: ['LearningLog', 'Mission'],
      slug: 'why-i-started-neurostatelab',
    },
    {
      title: 'What Are Absence Seizures, Really?',
      excerpt: 'Understanding the clinical presentation, EEG signatures, and why these seizures are so often missed in children. A deep dive into the 3 Hz spike-and-wave pattern.',
      date: '2024-01-22',
      tags: ['AbsenceLens', 'EEG', 'Epilepsy'],
      slug: 'what-are-absence-seizures',
    },
    {
      title: 'My First EEG Pipeline (And What Went Wrong)',
      excerpt: 'Lessons learned from building my first signal processing pipeline for detecting spike-and-wave patterns. Mistakes with filtering, artifacts, and overfitting.',
      date: '2024-02-03',
      tags: ['AbsenceLens', 'EEG', 'LearningLog'],
      slug: 'first-eeg-pipeline',
    },
  ]

  const allTags = ['LearningLog', 'AbsenceLens', 'EEG', 'Epilepsy', 'Mission', 'NeuroNotes']

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Brain Log
          </h1>
          <p className="text-xl text-slate-600">
            Thoughts, lessons, and progress updates from the lab. A mix of technical deep-dives, learning notes, and reflections on building ethical neurotechnology.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Tag className="w-5 h-5 text-slate-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Filter by tag:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-neural-teal hover:text-neural-teal hover:bg-neural-teal/5 transition-colors text-sm font-medium"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-xl">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-3 hover:text-neural-teal transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
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
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}