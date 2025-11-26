import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { projectsData } from '../constants/projects'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  // Find the project
  const project = projectsData
    .flatMap(category => category.projects)
    .find(p => p.id === projectId)

  useEffect(() => {
    // Scroll to top instantly when component mounts or projectId changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [projectId])

  useEffect(() => {
    if (!project) {
      navigate('/projects')
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
  }, [project, navigate])

  if (!project) {
    return null
  }

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-24 lg:pb-8 bg-red-50 dark:bg-black transition-colors duration-300 overflow-y-auto">
      <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-6xl mx-auto">
        <div ref={contentRef} className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Back Button */}
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center space-x-2 text-black dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200 mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Projects</span>
          </button>

          {/* Project Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          {/* Project Header */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight mb-2">
                {project.name}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-red-600 dark:text-red-400 font-medium">
                {project.subHeading}
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-base text-black dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="font-medium">View on GitHub</span>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors duration-200 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="font-medium">Live Demo</span>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black dark:text-white">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg font-medium text-sm sm:text-base border border-red-200 dark:border-red-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Full-Stack Topics Covered */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black dark:text-white">
              Full-Stack Topics Covered
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.fullStackTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  <svg className="w-5 h-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-black dark:text-slate-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black dark:text-white">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-black dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail

