import Link from 'next/link'
import Card from './Card'
import { ArrowRight, Calendar } from 'lucide-react'

export default function LatestPosts() {
  const posts = [
    {
      title: 'Why I Started NeuroState Lab',
      excerpt: 'The story behind building a personal lab for computational neuroscience and what I hope to achieve.',
      date: '2024-01-15',
      tags: ['LearningLog', 'Mission'],
      slug: 'why-i-started-neurostatelab',
    },
    {
      title: 'What Are Absence Seizures, Really?',
      excerpt: 'Understanding the clinical presentation, EEG signatures, and why these seizures are so often missed in children.',
      date: '2024-01-22',
      tags: ['AbsenceLens', 'EEG', 'Epilepsy'],
      slug: 'what-are-absence-seizures',
    },
    {
      title: 'My First EEG Pipeline (And What Went Wrong)',
      excerpt: 'Lessons learned from building my first signal processing pipeline for detecting spike-and-wave patterns.',
      date: '2024-02-03',
      tags: ['AbsenceLens', 'EEG', 'LearningLog'],
      slug: 'first-eeg-pipeline',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Latest from the Brain Log
          </h2>
          <p className="text-lg text-slate-600">
            Thoughts, lessons, and progress updates from the lab.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {posts.map((post) => (
            <Card key={post.slug}>
              <div className="flex items-center text-sm text-slate-500 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3 hover:text-neural-teal transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-slate-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-neural-teal/10 text-neural-teal font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-neural-teal font-medium hover:gap-2 transition-all group"
              >
                Read post
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-lg font-medium text-neural-teal hover:text-neural-violet transition-colors"
          >
            View all posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}