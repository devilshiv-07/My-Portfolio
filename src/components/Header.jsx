import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { gsap } from 'gsap'
import Logo from '../assets/Logo.png'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const navRef = useRef(null)
  const sidebarRef = useRef(null)
  const overlayRef = useRef(null)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    // Animate header entrance
    gsap.fromTo(
      headerRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    )

    // Animate nav links on desktop
    if (navRef.current) {
      gsap.fromTo(
        navRef.current.children || [],
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )
    }
  }, [])

  // Initialize sidebar position off-screen
  useEffect(() => {
    if (sidebarRef.current) {
      gsap.set(sidebarRef.current, { x: '100%' })
    }
  }, [])

  // Handle sidebar animation
  useEffect(() => {
    if (sidebarRef.current) {
      if (mobileMenuOpen) {
        // Open sidebar - slide in from right
        gsap.to(sidebarRef.current, {
          x: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
      } else {
        // Close sidebar - slide out to right
        gsap.to(sidebarRef.current, {
          x: '100%',
          duration: 0.4,
          ease: 'power2.in',
        })
      }
    }
    
    if (overlayRef.current) {
      if (mobileMenuOpen) {
        // Fade in overlay
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      } else {
        // Fade out overlay
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        })
      }
    }
  }, [mobileMenuOpen])

  const handleCloseSidebar = () => {
    setMobileMenuOpen(false)
  }

  const handleNavClick = (e, path) => {
    e.preventDefault()
    // Navigate to the new route
    if (location.pathname !== path) {
      navigate(path)
    }
    setMobileMenuOpen(false)
  }

  const handleOverlayClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-red-50/80 dark:bg-black/80 border-b border-red-600/20 dark:border-red-500/20 rounded-b-2xl shadow-lg dark:shadow-red-900/20 transition-all duration-300"
        style={{
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Always visible */}
            <div className="flex items-center space-x-3">
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-16 h-16 object-contain"
              />
              {/* Name and role - hidden on mobile/tablet, visible on desktop */}
              <div className="hidden lg:block">
                <h1 className="text-lg font-bold text-black dark:text-white">
                  SHIVANK TRIPATHI
                </h1>
                <p className="text-xs text-black dark:text-slate-300">
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>

            {/* Navigation Links - Desktop Only */}
            <nav ref={navRef} className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`text-black dark:text-white hover:text-red-600 dark:hover:text-red-500 font-medium transition-colors duration-200 relative group ${
                    location.pathname === link.path ? 'text-red-600 dark:text-red-500' : ''
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 dark:bg-red-500 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Right Side - Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button - Desktop Only */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleTheme()
                }}
                className="hidden lg:flex p-2 rounded-lg bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-slate-200/80 dark:hover:bg-slate-800/80 text-black dark:text-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Toggle theme"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {theme === 'dark' ? (
                  <svg key="sun-icon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg key="moon-icon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile/Tablet Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-slate-200/80 dark:hover:bg-slate-800/80 text-black dark:text-white transition-all duration-200"
                aria-label="Toggle menu"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar - Mobile/Tablet - Hidden by default */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-full sm:max-w-sm bg-red-50/98 dark:bg-black/95 z-50 lg:hidden shadow-2xl backdrop-blur-[12px]"
        style={{
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        }}
      >
        <div className="flex flex-col h-full p-6">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-red-600/20 dark:border-red-500/20">
            <div className="flex items-center space-x-3">
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-14 h-14 object-contain"
              />
              <div>
                <h1 className="text-base font-bold text-black dark:text-white">
                  SHIVANK TRIPATHI
                </h1>
                <p className="text-xs text-black dark:text-slate-300">
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseSidebar}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-black dark:text-white transition-colors z-10"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`block px-4 py-3 text-lg rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-red-600 dark:text-red-500 bg-slate-100/50 dark:bg-slate-900/50'
                    : 'text-black dark:text-white hover:text-red-600 dark:hover:text-red-500 hover:bg-slate-100/50 dark:hover:bg-slate-900/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle in Sidebar */}
          <div className="pt-6 border-t border-red-600/20 dark:border-red-500/20">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                toggleTheme()
              }}
              className="w-full flex items-center justify-center p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-slate-200/80 dark:hover:bg-slate-800/80 text-black dark:text-white transition-all duration-200 shadow-md"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <svg key="sun-icon-mobile" className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg key="moon-icon-mobile" className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

