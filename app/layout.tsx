import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Vishal Chandupatla | NeuroState Lab - AI/ML & Computational Neuroscience',
  description: 'Vishal Chandupatla is an AI/ML engineer, entrepreneur, and computational neuroscience researcher. Co-founder of MACRA, builder of AbsenceLens for epilepsy detection. Specializing in production AI systems and ethical neurotechnology.',
  keywords: ['Vishal Chandupatla', 'AI engineer', 'machine learning', 'computational neuroscience', 'neurotechnology', 'EEG', 'epilepsy', 'AbsenceLens', 'MACRA', 'entrepreneur', 'full-stack AI'],
  authors: [{ name: 'Vishal Chandupatla' }],
  creator: 'Vishal Chandupatla',
  openGraph: {
    title: 'Vishal Chandupatla | NeuroState Lab',
    description: 'AI/ML engineer and entrepreneur building ethical neurotechnology. Co-founder of MACRA, creator of AbsenceLens for epilepsy detection.',
    url: 'https://neurostatelab.com',
    siteName: 'NeuroState Lab',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Chandupatla | NeuroState Lab',
    description: 'AI/ML engineer building ethical neurotechnology for epilepsy detection and mental health.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="author" content="Vishal Chandupatla" />
        <link rel="canonical" href="https://neurostatelab.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vishal Chandupatla",
              "url": "https://neurostatelab.com",
              "jobTitle": "AI/ML Engineer, Entrepreneur & Computational Neuroscience Researcher",
              "worksFor": {
                "@type": "Organization",
                "name": "NeuroState Lab"
              },
              "foundingDate": "2024",
              "description": "AI/ML engineer and entrepreneur specializing in production AI systems and computational neuroscience. Co-founder of MACRA, creator of AbsenceLens for epilepsy detection.",
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Computational Neuroscience",
                "EEG Signal Processing",
                "Neurotechnology",
                "Full-Stack Development",
                "Product Engineering",
                "Entrepreneurship"
              ],
              "alumniOf": "American Express",
              "founder": [
                {
                  "@type": "Organization",
                  "name": "MACRA"
                },
                {
                  "@type": "Organization",
                  "name": "NeuroState Lab"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}