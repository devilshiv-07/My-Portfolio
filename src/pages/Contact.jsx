import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt,
  FaPaperPlane
} from 'react-icons/fa'

const Contact = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const emailFormRef = useRef(null)
  const whatsappFormRef = useRef(null)
  const contactInfoRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [whatsappMessage, setWhatsappMessage] = useState('')

  useEffect(() => {
    const container = containerRef.current
    const title = titleRef.current
    const emailForm = emailFormRef.current
    const whatsappForm = whatsappFormRef.current
    const contactInfo = contactInfoRef.current

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

    // Animate email form
    if (emailForm) {
      gsap.fromTo(
        emailForm,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        }
      )
    }

    // Animate whatsapp form
    if (whatsappForm) {
      gsap.fromTo(
        whatsappForm,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
        }
      )
    }

    // Animate contact info
    if (contactInfo) {
      gsap.fromTo(
        contactInfo,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
        }
      )
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    
    // Create mailto link with pre-filled content
    const mailtoLink = `mailto:er.shivank07@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    window.location.href = mailtoLink
  }

  const handleWhatsAppClick = () => {
    const message = whatsappMessage || 'Hello! I would like to connect with you.'
    const whatsappLink = `https://wa.me/9153953678?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, '_blank')
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'er.shivank07@gmail.com',
      link: 'mailto:er.shivank07@gmail.com',
      color: 'text-red-600 dark:text-red-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9153953678',
      link: 'tel:+919153953678',
      color: 'text-red-600 dark:text-red-500'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+91 9153953678',
      link: 'https://wa.me/9153953678',
      color: 'text-green-600 dark:text-green-500'
    }
  ]


  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-24 lg:pb-8 bg-red-50 dark:bg-black transition-colors duration-300 overflow-y-auto">
      <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-8 lg:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-red-600 dark:text-red-500 leading-tight tracking-tight mb-2">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-black dark:text-slate-300">
            Let's connect and build something amazing together
          </p>
        </div>

        {/* Main Content - 2 Column Layout on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-6">
          {/* Left Column - Email Form */}
          <div ref={emailFormRef} className="bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 lg:p-6 shadow-lg border border-slate-200 dark:border-slate-700 lg:h-full lg:flex lg:flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-5 flex items-center space-x-2">
              <FaEnvelope className="text-red-600 dark:text-red-500 w-5 h-5" />
              <span>Send Email</span>
            </h2>
            <form onSubmit={handleEmailSubmit} className="space-y-4 lg:flex-1 lg:flex lg:flex-col">
              <div className="lg:flex-1 lg:flex lg:flex-col lg:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-black dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-black dark:text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-black dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 transition-all duration-200"
                    placeholder="Subject (optional)"
                  />
                </div>
                <div className="lg:flex-1 lg:flex lg:flex-col">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-black dark:text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 transition-all duration-200 resize-none lg:flex-1 lg:min-h-[120px]"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-5 py-2.5 bg-red-600 dark:bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 lg:mt-auto"
              >
                <FaPaperPlane className="w-4 h-4" />
                <span>Send Email</span>
              </button>
            </form>
          </div>

          {/* Right Column - WhatsApp Form and Contact Info Stacked */}
          <div className="space-y-5 lg:space-y-6">
            {/* WhatsApp Message */}
            <div ref={whatsappFormRef} className="bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 lg:p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-5 flex items-center space-x-2">
                <FaWhatsapp className="text-green-600 dark:text-green-500 w-5 h-5" />
                <span>Send WhatsApp Message</span>
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="whatsapp-message" className="block text-xs sm:text-sm font-medium text-black dark:text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="whatsapp-message"
                    value={whatsappMessage}
                    onChange={(e) => setWhatsappMessage(e.target.value)}
                    rows="3"
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 transition-all duration-200 resize-none"
                    placeholder="Type your message here (or leave blank for default message)..."
                  />
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full px-5 py-2.5 bg-green-600 dark:bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div ref={contactInfoRef} className="bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-5 flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-600 dark:text-red-500 w-5 h-5" />
                <span>Contact Information</span>
              </h2>
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="group flex items-center space-x-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-red-600 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all duration-300"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300 truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

