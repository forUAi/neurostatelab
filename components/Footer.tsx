import Link from 'next/link'
import { Mail, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neural-teal to-neural-violet flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-display font-bold text-lg text-white">
                NeuroState Lab
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-2">
              Exploring computational neuroscience and neurotechnology to help real patients.
            </p>
            <p className="text-sm text-slate-500">
              By <strong className="text-slate-300">Vishal Chandupatla</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-neural-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-neural-teal transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-neural-teal transition-colors">
                  Brain Log
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neural-teal transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Connect</h3>
            <p className="text-sm text-slate-400 mb-4">
              Interested in brain-aware, ethical tech? Let's talk.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@neurostatelab.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-neural-teal/20 hover:text-neural-teal transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/forUAi"
                className="p-2 rounded-lg bg-slate-800 hover:bg-neural-teal/20 hover:text-neural-teal transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-neural-teal/20 hover:text-neural-teal transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} NeuroState Lab by <strong className="text-slate-300">Vishal Chandupatla</strong></p>
          <p className="mt-2">AI/ML Engineer | Entrepreneur | Computational Neuroscience Researcher</p>
        </div>
      </div>
    </footer>
  )
}
