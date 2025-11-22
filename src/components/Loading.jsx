import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const Loading = ({ onComplete }) => {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const textRef = useRef(null)
  const progressBarRef = useRef(null)
  const progressTextRef = useRef(null)
  const particlesRef = useRef([])
  const ringsRef = useRef([])
  const svgPathRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const logo = logoRef.current
    const text = textRef.current
    const progressBar = progressBarRef.current
    const progressText = progressTextRef.current
    const particles = particlesRef.current
    const rings = ringsRef.current
    const svgPath = svgPathRef.current

    if (!container || !logo || !text || !progressBar || !svgPath) return

    // Create master timeline
    const masterTL = gsap.timeline()

    // Set initial states
    gsap.set(container, { opacity: 0 })
    gsap.set(logo, { scale: 0, rotation: -180, opacity: 0 })
    gsap.set(text, { y: 30, opacity: 0, scale: 0.8 })
    gsap.set(progressBar, { opacity: 0, y: 20 })
    gsap.set(progressText, { opacity: 0, scale: 0 })
    gsap.set(particles, { scale: 0, opacity: 0 })
    gsap.set(rings, { scale: 0, opacity: 0, rotation: 0 })
    // Set initial width to 0
    gsap.set(svgPath, { 
      attr: { width: 0 }
    })

    // Fade in container
    masterTL.to(container, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    })

    // Animate rings (concentric circles) - appear first
    rings.forEach((ring, index) => {
      masterTL.to(ring, {
        scale: 1,
        opacity: 0.25 - index * 0.05,
        rotation: 360,
        duration: 1.2 + index * 0.15,
        ease: 'power2.out'
      }, index * 0.08)
    })

    // Logo entrance with bounce and rotation
    masterTL.to(logo, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'back.out(2)'
    }, '-=0.5')

    // Particles appear
    masterTL.to(particles, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: 'power2.out'
    }, '-=0.6')

    // Text animation
    masterTL.to(text, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')

    // Progress bar container appears
    masterTL.to(progressBar, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')

    masterTL.to(progressText, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(1.7)'
    }, '-=0.2')

    // Start progress bar animation after it appears
    masterTL.add(() => {
      progressTL.play()
    }, '-=0.1')

    // Continuous animations (start immediately after initial animations)
    // Rotate logo continuously
    gsap.to(logo, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: 'none'
    })

    // Pulse logo
    gsap.to(logo, {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    })

    // Animate rings rotation
    rings.forEach((ring, index) => {
      gsap.to(ring, {
        rotation: `+=${360 * (index % 2 === 0 ? 1 : -1)}`,
        duration: 12 + index * 2,
        repeat: -1,
        ease: 'none'
      })
    })

    // Animate particles
    particles.forEach((particle) => {
      gsap.to(particle, {
        x: `+=${(Math.random() - 0.5) * 150}`,
        y: `+=${(Math.random() - 0.5) * 150}`,
        rotation: 360,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    })

    // SVG Linear Progress Bar Animation (0 to 100%)
    const progressDuration = 3 // Total duration for progress bar

    // Animate SVG rect width from 0 to 400
    const progressTL = gsap.timeline({
      paused: true, // Start paused, will be played by masterTL
      onUpdate: function() {
        // Calculate progress percentage with intermediate values (0, 1, 2, ... 100)
        const rawProgress = this.progress()
        const progressValue = Math.min(100, Math.floor(rawProgress * 100))
        setProgress(progressValue)
      },
      onComplete: () => {
        // Ensure we're at 100%
        setProgress(100)

        // Complete animation sequence - exit
        const exitTL = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete()
          }
        })

        // Scale up and fade out elements in sequence
        exitTL.to([logo, text], {
          scale: 1.3,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.in'
        }, 0)

        exitTL.to(progressBar, {
          scale: 1.1,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        }, '-=0.3')

        exitTL.to(progressText, {
          scale: 1.5,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        }, '-=0.4')

        exitTL.to(particles, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: 'power2.in'
        }, '-=0.3')

        exitTL.to(rings, {
          scale: 1.5,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.in'
        }, '-=0.4')

        exitTL.to(container, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        }, '-=0.2')
      }
    })

    // Animate SVG rect width from 0 to 400 (which represents 0% to 100%)
    progressTL.to(svgPath, {
      attr: { width: 400 },
      duration: progressDuration,
      ease: 'power1.inOut'
    })

    return () => {
      masterTL.kill()
      progressTL.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) ringsRef.current[i] = el
            }}
            className="absolute rounded-full border-2 border-red-600"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo/Icon with sophisticated design */}
        <div
          ref={logoRef}
          className="mb-8 relative"
        >
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Outer animated ring */}
            <circle
              cx="70"
              cy="70"
              r="65"
              stroke="url(#gradient1)"
              strokeWidth="4"
              fill="none"
            />
            
            {/* Middle ring */}
            <circle
              cx="70"
              cy="70"
              r="50"
              stroke="url(#gradient2)"
              strokeWidth="3"
              fill="none"
              opacity="0.8"
            />
            
            {/* Inner circle with gradient */}
            <circle
              cx="70"
              cy="70"
              r="35"
              fill="url(#gradient3)"
              opacity="0.9"
            />
            
            {/* Center accent */}
            <circle
              cx="70"
              cy="70"
              r="20"
              fill="#dc2626"
              opacity="1"
            />
            
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <radialGradient id="gradient3" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0.8" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Loading Text */}
        <div
          ref={textRef}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent mb-4 tracking-wider">
            SHIVANK TRIPATHI
          </h2>
          <p className="text-lg md:text-xl text-red-400 font-light tracking-wide">
            Full-Stack Developer
          </p>
        </div>

        {/* SVG Linear Progress Bar */}
        <div
          ref={progressBarRef}
          className="w-80 md:w-96 mb-4"
        >
          <svg
            width="100%"
            height="8"
            viewBox="0 0 400 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-full"
          >
            {/* Background track */}
            <rect
              x="0"
              y="0"
              width="400"
              height="8"
              rx="4"
              fill="#1a1a1a"
              opacity="0.5"
            />
            
            {/* Animated progress path */}
            <rect
              ref={svgPathRef}
              x="0"
              y="0"
              width="0"
              height="8"
              rx="4"
              fill="url(#progressGradient)"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(220, 38, 38, 0.8))',
              }}
            />
            
            {/* Gradient for progress bar */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Progress Text */}
        <div
          ref={progressTextRef}
          className="text-red-500 text-lg font-bold tracking-wider"
        >
          {progress}%
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) particlesRef.current[i] = el
            }}
            className="absolute rounded-full"
            style={{
              width: `${4 + Math.random() * 4}px`,
              height: `${4 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#dc2626',
              opacity: 0.6,
              boxShadow: '0 0 6px rgba(220, 38, 38, 0.8)'
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Loading
