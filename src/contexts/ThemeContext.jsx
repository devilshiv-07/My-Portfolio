import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(undefined)

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
    
    // Force a reflow to ensure styles are recalculated
    void root.offsetHeight
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
    
    // Debug log
    console.log('Theme updated to:', theme)
    console.log('HTML classes:', root.className)
    console.log('Has dark class?', root.classList.contains('dark'))
  }, [theme])

  // Step 3: Toggle function that updates state
  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
      console.log('toggleTheme: Changing theme from', prevTheme, 'to', newTheme)
      return newTheme
    })
  }, []) // Empty deps - we use functional update so we don't need theme

  // Step 4: Context value - create new object when theme or toggleTheme changes
  const value = React.useMemo(() => ({
    theme,
    toggleTheme
  }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
