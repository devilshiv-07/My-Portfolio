import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

const ThemeContext = createContext(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Step 1: Initialize theme state from localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }
    
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      return saved
    }
    
    return 'dark'
  })

  // Step 2: Apply theme to DOM on mount and whenever theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = document.documentElement
    
    // CRITICAL: Remove dark class first, then add if needed
    // This ensures Tailwind processes the change
    root.classList.remove('dark')
    
    if (theme === 'dark') {
      root.classList.add('dark')
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  // Step 3: Toggle function that updates state
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }, []) // Empty deps - we use functional update so we don't need theme

  // Step 4: Context value - create new object when theme or toggleTheme changes
  const value = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
