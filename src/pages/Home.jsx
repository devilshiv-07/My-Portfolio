import React from 'react'
import CoverPhoto from '../assets/cover.JPG'

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-0 lg:pb-0 lg:h-screen bg-red-50 dark:bg-black transition-colors duration-300 overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-black dark:text-slate-300 font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-4">
              Hello, I'm
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight mb-2 sm:mb-3 md:mb-4 lg:mb-4">
              SHIVANK TRIPATHI
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-black dark:text-slate-300 mb-4 sm:mb-5 md:mb-6 lg:mb-5">
              Full-Stack Developer
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-base leading-relaxed px-2 sm:px-4 md:px-6 lg:px-0 text-black dark:text-slate-400">
              Specializing in frontend development with expertise in creating modern, 
              responsive, and user-friendly web applications. Passionate about building 
              scalable solutions and delivering exceptional user experiences.
            </p>
            
            <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-4 flex justify-center lg:justify-start">
              <button className="px-10 py-4 sm:px-12 sm:py-5 md:px-14 md:py-6 lg:px-8 lg:py-3 bg-red-600 dark:bg-red-500 text-white text-lg sm:text-xl md:text-2xl lg:text-base font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:bg-red-700 dark:hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
                Let's Start Chat
              </button>
            </div>
          </div>

          {/* Right Side - Cover Photo - Circular with Glowing Red Border */}
          <div className="flex justify-center lg:justify-start lg:ml-36 lg:mt-8 mt-8 sm:mt-12 md:mt-16 lg:mt-8">
            <div className="relative group">
              {/* Glowing shadow effect */}
              <div className="absolute inset-0 rounded-full blur-2xl bg-red-600 dark:bg-red-500 opacity-50 group-hover:opacity-70 transition-opacity duration-300 scale-110"></div>
              
              {/* Outer border circle */}
              <div className="relative rounded-full p-1 bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-600 shadow-[0_0_30px_rgba(220,38,38,0.6)] dark:shadow-[0_0_30px_rgba(239,68,68,0.6)] group-hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] dark:group-hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all duration-[800ms] group-hover:scale-110">
                {/* Image circle */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-red-600 dark:border-red-500 transition-transform duration-[800ms] group-hover:scale-110">
                  <img 
                    src={CoverPhoto} 
                    alt="Shivank Tripathi" 
                    className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
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

