import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-red-50 dark:bg-black transition-colors duration-300">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App