import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { experiencesData } from '../constants/experience'
import { FaMapMarkerAlt, FaCalendarAlt, FaLaptopCode, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'

const ExperienceDetail = () => {
  const { experienceId } = useParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  // Find the experience
  const experience = experiencesData.find(exp => exp.id === experienceId)

  useEffect(() => {
    // Scroll to top instantly when component mounts or experienceId changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [experienceId])

  useEffect(() => {
    if (!experience) {
      navigate('/experience')
      return
    }

    const container = containerRef.current
    const content = contentRef.current

    if (!container || !content) return

    // Animate content entrance
    gsap.fromTo(
      content,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    )
  }, [experience, navigate])

  if (!experience) {
    return null
  }

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-24 lg:pb-8 bg-red-50 dark:bg-black transition-colors duration-300 overflow-y-auto">
      <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-6xl mx-auto">
        <div ref={contentRef} className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Back Button */}
          <button
            onClick={() => navigate('/experience')}
            className="flex items-center space-x-2 text-black dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200 mb-4 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Experience</span>
          </button>

          {/* Header Section */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-white dark:bg-slate-800 p-4 shadow-lg border-2 border-red-600 dark:border-red-500">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} Logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Company Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight mb-2">
                  {experience.company}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-red-600 dark:text-red-400 font-semibold mb-4">
                  {experience.role}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg font-medium text-sm sm:text-base">
                    <span>{experience.type}</span>
                  </span>
                  <span className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-sm sm:text-base">
                    <FaLaptopCode />
                    <span>Remote</span>
                  </span>
                </div>
                <div className="space-y-2 text-sm sm:text-base text-black dark:text-slate-300">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <FaCalendarAlt className="text-red-600 dark:text-red-500" />
                    <span>{experience.period} · {experience.duration}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <FaMapMarkerAlt className="text-red-600 dark:text-red-500" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                {experience.liveLink && (
                  <div className="mt-4">
                    <a
                      href={experience.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span className="font-medium">Visit Live Site</span>
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          {experience.description && (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black dark:text-white mb-4">
                Overview
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-base text-black dark:text-slate-300 leading-relaxed">
                {experience.description}
              </p>
            </div>
          )}

          {/* Projects Section (for Agility AI) */}
          {experience.projects && experience.projects.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black dark:text-white mb-6">
                Projects
              </h2>
              <div className="space-y-6">
                {experience.projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-500 mb-1">
                          {project.name}
                        </h3>
                        <p className="text-sm sm:text-base text-black dark:text-slate-300">
                          {project.description}
                        </p>
                      </div>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors duration-200 text-sm"
                        >
                          <span>Visit</span>
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <ul className="space-y-2 mt-4">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <FaCheckCircle className="w-5 h-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-black dark:text-slate-300">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black dark:text-white mb-6">
              Key Responsibilities
            </h2>
            <ul className="space-y-4">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-base sm:text-lg text-black dark:text-slate-300 leading-relaxed flex-1">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black dark:text-white mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {experience.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg font-medium text-sm sm:text-base border border-red-200 dark:border-red-800 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black dark:text-white mb-6">
                Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experience.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300"
                  >
                    <FaCheckCircle className="w-5 h-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-black dark:text-slate-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ExperienceDetail


