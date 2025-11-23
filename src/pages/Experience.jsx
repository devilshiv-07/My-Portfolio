import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { experiencesData } from '../constants/experience'
import { FaMapMarkerAlt, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa'

const Experience = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const title = titleRef.current
    const cards = cardRefs.current

    if (!container || !title) return

    // Animate title
    gsap.fromTo(
      title,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    )

    // Animate cards with stagger
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          stagger: 0.15,
          ease: 'power2.out',
        }
      )
    }
  }, [])

  const handleViewDetails = (experienceId) => {
    navigate(`/experience/${experienceId}`)
  }

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-24 lg:pb-8 bg-red-50 dark:bg-black transition-colors duration-300 overflow-y-auto">
      <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-10 lg:mt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight mb-2">
            Experience
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black dark:text-slate-300">
            My professional journey and internships
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-8">
          {experiencesData.map((experience, index) => (
            <div
              key={experience.id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg dark:shadow-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-red-500/10 transition-all duration-300 pointer-events-none"></div>

              {/* Card Content */}
              <div className="relative z-10 p-6 sm:p-7 md:p-8">
                {/* Company Logo */}
                <div className="mb-4 sm:mb-5 flex items-center justify-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-white dark:bg-slate-800 p-2 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Company Name & Role */}
                <div className="text-center mb-4 sm:mb-5">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-black dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">
                    {experience.company}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-lg text-red-600 dark:text-red-400 font-semibold mb-2">
                    {experience.role}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-medium">
                    {experience.type}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                  <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-black dark:text-slate-300">
                    <FaCalendarAlt className="text-red-600 dark:text-red-500" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-black dark:text-slate-300">
                    <FaMapMarkerAlt className="text-red-600 dark:text-red-500" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-red-600 dark:text-red-400 font-medium">
                    <FaLaptopCode className="text-red-600 dark:text-red-500" />
                    <span>Remote</span>
                  </div>
                </div>

                {/* Brief Description */}
                <p className="text-xs sm:text-sm md:text-base lg:text-sm text-black dark:text-slate-300 line-clamp-3 mb-4 text-center leading-relaxed">
                  {experience.brief}
                </p>

                {/* Full Details Button - Appears on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleViewDetails(experience.id)
                    }}
                    className="w-full px-6 py-3 bg-red-600 dark:bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 dark:hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Full Details
                  </button>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

