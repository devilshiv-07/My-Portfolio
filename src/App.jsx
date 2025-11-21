import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'

const AppContent = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-red-50 dark:bg-black transition-colors duration-300">
      <Header />
      <PageTransition key={location.pathname} location={location}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </PageTransition>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App