import React, { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { gsap } from 'gsap'

const PageTransition = ({ children, location }) => {
  const { theme } = useTheme()
  const containerRef = useRef(null)
  const linesRef = useRef([])
  const contentRef = useRef(null)

  useEffect(() => {
    const lines = linesRef.current
    const container = containerRef.current
    const content = contentRef.current

    if (!container || lines.length === 0 || !content) return

    // Get theme colors
    const bgColor = theme === 'dark' ? '#000000' : '#fef2f2' // black or red-50

    // Reset all lines to initial state (off-screen at top)
    lines.forEach((line) => {
      if (line) {
        gsap.set(line, {
          y: '-100%',
          backgroundColor: bgColor,
          zIndex: 9999,
        })
      }
    })

    // Set content initial opacity to 0
    gsap.set(content, {
      opacity: 0,
    })

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      // Animation sequence
      const tl = gsap.timeline()

      // Step 1: Lines slide down one by one from top to bottom to cover the screen
      // Each line covers 20% width, positioned horizontally from left to right
      lines.forEach((line, index) => {
        if (line) {
          tl.to(line, {
            y: '0%',
            duration: 0.5,
            ease: 'power3.inOut',
          }, index * 0.12) // Stagger by 0.12s - one by one
        }
      })

      // Step 2: Wait a moment (screen fully covered)
      tl.to({}, { duration: 0.3 })

      // Step 3: Lines slide up one by one from bottom to top (removed)
      lines.forEach((line, index) => {
        if (line) {
          tl.to(line, {
            y: '-100%',
            duration: 0.5,
            ease: 'power3.inOut',
          }, index * 0.12) // Stagger by 0.12s - one by one
        }
      })

      // Step 4: Fade in content after lines start removing
      tl.to(content, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4') // Start 0.4s before timeline ends
    }, 50)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [location.pathname, theme])

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* 5 Vertical Lines for animation - covering screen horizontally */}
      <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={`line-${index}-${location.pathname}`}
            ref={(el) => {
              if (el) linesRef.current[index] = el
            }}
            className="absolute"
            style={{
              width: '20%', // Each line is 20% width (5 lines = 100%)
              left: `${index * 20}%`, // Position each line at 0%, 20%, 40%, 60%, 80%
              height: '100vh', // Full viewport height
              top: 0,
              backgroundColor: theme === 'dark' ? '#000000' : '#fef2f2',
            }}
          />
        ))}
      </div>

      {/* Page content */}
      <div 
        ref={contentRef}
        className="relative z-0"
        style={{ opacity: 0 }}
      >
        {children}
      </div>
    </div>
  )
}

export default PageTransition
