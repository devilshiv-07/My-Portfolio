import React from 'react'
import AboutImage from '../assets/About.jpg'

const About = () => {
  return (
    <section className="min-h-screen lg:h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-24 lg:pb-8 bg-red-50 dark:bg-black transition-colors duration-300 overflow-y-auto lg:overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto flex flex-col h-full">
        {/* Content Grid: 1/3 (heading + image), 2/3 (text) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-10 items-start flex-1 min-h-0 ">
          {/* Left Side - Heading + Square Image (1/3) */}
          <div className="flex flex-col justify-start lg:col-span-1">
            {/* Heading Above Image */}
            <div className="text-center lg:text-left mb-4 sm:mb-6 md:mb-8 lg:mb-6 lg:mt-15">
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
          <div className="text-center lg:text-left lg:col-span-2 h-full flex flex-col lg:justify-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-4 xl:space-y-5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed text-black dark:text-slate-300 w-full pr-2 lg:pr-4">
              <p>
                I'm a passionate and self-driven creator who believes in building meaningful experiences through thoughtful design, clear problem-solving, and continuous learning. My journey has been shaped by curiosity — the kind that pushes me to explore new ideas, experiment with creativity, and improve a little every single day.
              </p>
              
              <p>
                I enjoy turning concepts into real, functional outcomes, whether it's through technology, design, content creation, or structured strategy. Over time, I've developed a strong sense of ownership in my work, valuing quality, precision, and authenticity in everything I create.
              </p>
              
              <p>
                I'm constantly evolving — learning new tools, refining my skills, and taking on projects that challenge me to grow. For me, every project is an opportunity to blend creativity with logic and deliver something that genuinely adds value.
              </p>
              
              <p>
                When I'm not working, I love exploring new inspirations, observing details around me, and finding smarter ways to approach everyday problems. I believe in keeping things simple, staying humble, and letting the work speak for itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

