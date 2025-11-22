import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { projectsData } from '../constants/projects'

const Projects = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const categoryRefs = useRef([])
  const cardRefs = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const title = titleRef.current
    const categories = categoryRefs.current
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

    // Animate categories
    categories.forEach((category, index) => {
      if (category) {
        gsap.fromTo(
          category,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.2 + index * 0.1,
            ease: 'power2.out',
          }
        )
      }
    })

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
          delay: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )
    }
  }, [])

  const handleSeeDetails = (projectId) => {
    navigate(`/projects/${projectId}`)
  }

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-24 lg:pb-8 bg-red-50 dark:bg-black transition-colors duration-300 overflow-y-auto">
      <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight mb-2">
            Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black dark:text-slate-300">
            Showcasing my work and learning journey
          </p>
        </div>

        {/* Projects by Category */}
        <div className="space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-12">
          {projectsData.map((category, categoryIndex) => (
            <div
              key={category.category}
              ref={(el) => {
                if (el) categoryRefs.current[categoryIndex] = el
              }}
              className="w-full"
            >
              {/* Category Title */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold bg-linear-to-r from-red-600 via-red-500 to-red-600 dark:from-red-500 dark:via-red-400 dark:to-red-500 bg-clip-text text-transparent">
                  {category.category}
                </h2>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-6">
                {category.projects.map((project, projectIndex) => {
                  const cardIndex = categoryIndex * category.projects.length + projectIndex
                  return (
                    <div
                      key={project.id}
                      ref={(el) => {
                        if (el) cardRefs.current[cardIndex] = el
                      }}
                      className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg dark:shadow-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 sm:h-56 md:h-64 lg:h-52 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleSeeDetails(project.id)
                            }}
                            className="px-6 py-3 bg-red-600 dark:bg-red-500 text-white font-semibold rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-700 dark:hover:bg-red-600"
                          >
                            See Details
                          </button>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-4 sm:p-5 md:p-6 lg:p-5">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-base text-red-600 dark:text-red-400 font-medium mb-3">
                          {project.subHeading}
                        </p>
                        <p className="text-xs sm:text-sm md:text-base lg:text-sm text-black dark:text-slate-300 line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

