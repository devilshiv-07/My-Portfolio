import React from 'react'
import CoverPhoto from '../assets/cover.JPG'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-0 lg:pb-0 lg:h-screen bg-red-50 dark:bg-black transition-colors duration-300 overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left lg:ml-12 lg:mt-6">
            <p className="text-lg sm:text-xl md:text-2xl text-black dark:text-slate-300 font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-4">
              Hello, I'm
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight mb-2 sm:mb-3 md:mb-4 lg:mb-4">
              SHIVANK TRIPATHI
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-black dark:text-slate-300 mb-3 sm:mb-4 md:mb-5 lg:mb-4">
              Full-Stack Developer
            </h2>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-5">
              <a
                href="https://www.instagram.com/shivank618/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-125"
                aria-label="Instagram"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-red-600 dark:bg-red-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 scale-150"></div>
                {/* Icon */}
                <FaInstagram className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-slate-300 transition-all duration-300" />
              </a>
              <a
                href="https://github.com/devilshiv-07"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-125"
                aria-label="GitHub"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-red-600 dark:bg-red-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 scale-150"></div>
                {/* Icon */}
                <FaGithub className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-slate-300 transition-all duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/shivanktripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-125"
                aria-label="LinkedIn"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-red-600 dark:bg-red-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 scale-150"></div>
                {/* Icon */}
                <FaLinkedin className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-slate-300 transition-all duration-300" />
              </a>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-base leading-relaxed px-2 sm:px-4 md:px-6 lg:px-0 text-black dark:text-slate-400">
              Specializing in frontend development with expertise in creating modern, 
              responsive, and user-friendly web applications. Passionate about building 
              scalable solutions and delivering exceptional user experiences.
            </p>
            
            <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-4 flex justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1_JSUggUyCK7SXynLDrZLSvNJ3Niu16ju/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-10 py-4 sm:px-12 sm:py-5 md:px-14 md:py-6 lg:px-8 lg:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 resume-button"
              >
                {/* Button text with wave effect inside */}
                <span className="relative z-10 resume-button-text">
                  Download Resume
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Cover Photo - Circular with Glowing Red Border */}
          <div className="flex justify-center lg:justify-start lg:ml-36 lg:mt-16 mt-8 sm:mt-12 md:mt-16">
            <div className="relative group">
              {/* Glowing shadow effect */}
              <div className="absolute inset-0 rounded-full blur-2xl bg-red-600 dark:bg-red-500 opacity-50 group-hover:opacity-70 transition-opacity duration-300 scale-110"></div>
              
              {/* Outer border circle */}
              <div className="relative rounded-full p-1 bg-linear-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-600 shadow-[0_0_30px_rgba(220,38,38,0.6)] dark:shadow-[0_0_30px_rgba(239,68,68,0.6)] group-hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] dark:group-hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all duration-800 group-hover:scale-110">
                {/* Image circle */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-red-600 dark:border-red-500 transition-transform duration-800 group-hover:scale-110">
                  <img 
                    src={CoverPhoto} 
                    alt="Shivank Tripathi" 
                    className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

