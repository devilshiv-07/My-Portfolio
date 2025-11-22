import React from 'react'
import AboutImage from '../assets/About.jpg'
import { aboutContent } from '../constants/about'

const About = () => {
  return (
    <section className="min-h-screen lg:h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-24 lg:pb-8 bg-red-50 dark:bg-black transition-colors duration-300 overflow-y-auto lg:overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto flex flex-col h-full">
        {/* Content Grid: 1/3 (heading + image), 2/3 (text) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-10 items-center flex-1 min-h-0">
          {/* Left Side - Heading + Square Image (1/3) */}
          <div className="flex flex-col justify-start lg:col-span-1">
            {/* Heading Above Image */}
            <div className="text-left mb-4 sm:mb-6 md:mb-8 lg:mb-6 flex items-center justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight">
                About Me
              </h1>
            </div>
            
            {/* Square Image Below Heading */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group w-full max-w-sm lg:max-w-full">
                {/* Square image with rounded-xl corners */}
                <div className="w-full aspect-square rounded-xl overflow-hidden border-4 border-red-600 dark:border-red-500 shadow-xl dark:shadow-red-900/20 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                  <img 
                    src={AboutImage} 
                    alt="Shivank Tripathi" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-red-600 dark:bg-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content (2/3) - Aligned aside to heading and image */}
          <div className="text-left lg:col-span-2 h-full flex flex-col lg:justify-center relative overflow-hidden">
            {/* Circular red fog effect behind text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="about-fog-effect"></div>
            </div>
            
            {/* Text Content */}
            <div className="relative z-10 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-5 xl:space-y-6">
              
              {/* Highlighted Quote */}
              <div className="bg-red-600/10 dark:bg-red-500/10 border-l-4 border-red-600 dark:border-red-500 pl-4 sm:pl-5 md:pl-6 lg:pl-5 xl:pl-6 py-3 sm:py-4 rounded-r-lg">
                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg italic text-red-700 dark:text-red-400 font-medium">
                  "{aboutContent.quote}"
                </p>
              </div>
              
              {/* Main Description - Exactly 4 lines */}
              <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed text-black dark:text-slate-300">
                {aboutContent.description}
              </p>

              <div className='w-full h-px bg-red-500 mx-2 rounded-xl'></div>
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 pt-2">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-semibold text-red-600 dark:text-red-500">Education: </span>
                    <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-black dark:text-slate-300">{aboutContent.details.education}</span>
                  </div>
                  <div>
                    <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-semibold text-red-600 dark:text-red-500">Age: </span>
                    <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-black dark:text-slate-300">{aboutContent.details.age}</span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-semibold text-red-600 dark:text-red-500">Location: </span>
                    <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-black dark:text-slate-300">{aboutContent.details.location}</span>
                  </div>
                  <div>
                    <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-semibold text-red-600 dark:text-red-500">Interests: </span>
                    <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-black dark:text-slate-300">{aboutContent.details.interests}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
