import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { skillsData } from '../constants/skills'

const Skills = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const categoryRefs = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const title = titleRef.current
    const categories = categoryRefs.current

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
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-24 lg:pb-8 bg-red-50 dark:bg-black transition-colors duration-300 overflow-y-auto">
      <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight mb-2">
            Skills
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black dark:text-slate-300">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-8">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.category}
              ref={(el) => {
                if (el) categoryRefs.current[categoryIndex] = el
              }}
              className="w-full"
            >
              {/* Category Title */}
              <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-6">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold bg-linear-to-r ${category.gradientColors.light} dark:bg-linear-to-r ${category.gradientColors.dark} bg-clip-text text-transparent`}>
                  {category.category}
                </h2>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 lg:gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  
                  return (
                    <div
                      key={skill.name}
                      className="group relative"
                      style={{
                        animationDelay: `${(categoryIndex * 0.1 + skillIndex * 0.05)}s`
                      }}
                    >
                      {/* Skill Card */}
                      <div className="relative bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-5 md:p-6 lg:p-5 shadow-lg dark:shadow-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 cursor-pointer">
                        {/* Glow effect on hover */}
                        <div 
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
                          style={{ backgroundColor: skill.color }}
                        ></div>

                        {/* Icon */}
                        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3">
                          {IconComponent ? (
                            <IconComponent 
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
                              style={{ color: skill.color }}
                            />
                          ) : (
                            <div 
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 flex items-center justify-center font-bold text-xs sm:text-sm md:text-base lg:text-sm rounded transition-transform duration-300 group-hover:scale-125"
                              style={{ 
                                backgroundColor: skill.color,
                                color: '#FFFFFF'
                              }}
                            >
                              {skill.customIcon || skill.name.charAt(0)}
                            </div>
                          )}
                          
                          {/* Skill Name */}
                          <span className="text-xs sm:text-sm md:text-base lg:text-sm font-medium text-black dark:text-slate-300 text-center group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>

                        {/* Hover border effect */}
                        <div 
                          className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ borderColor: skill.color }}
                        ></div>
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

export default Skills

