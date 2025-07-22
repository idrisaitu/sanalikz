'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-up'
  delay?: number
  duration?: number
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  duration = 600
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration}`
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return `${baseClasses} opacity-0`
        case 'slide-up':
          return `${baseClasses} opacity-0 translate-y-8`
        case 'slide-left':
          return `${baseClasses} opacity-0 translate-x-8`
        case 'slide-right':
          return `${baseClasses} opacity-0 -translate-x-8`
        case 'scale-up':
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    switch (animation) {
      case 'fade-in':
        return `${baseClasses} opacity-100`
      case 'slide-up':
        return `${baseClasses} opacity-100 translate-y-0`
      case 'slide-left':
        return `${baseClasses} opacity-100 translate-x-0`
      case 'slide-right':
        return `${baseClasses} opacity-100 translate-x-0`
      case 'scale-up':
        return `${baseClasses} opacity-100 scale-100`
      default:
        return `${baseClasses} opacity-100`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}

export default AnimatedSection
