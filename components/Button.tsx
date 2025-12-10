import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'ghost'
  children: ReactNode
  className?: string
}

export default function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200'
  
  const variants = {
    primary: 'bg-gradient-to-r from-neural-teal to-neural-cyan text-white hover:shadow-lg hover:scale-105 hover:glow-teal',
    ghost: 'border-2 border-neural-teal text-neural-teal hover:bg-neural-teal hover:text-white',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button className={styles}>
      {children}
    </button>
  )
}
