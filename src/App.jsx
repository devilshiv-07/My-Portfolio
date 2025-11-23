import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import Loading from './components/Loading'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Experience from './pages/Experience'
import ExperienceDetail from './pages/ExperienceDetail'

const AppContent = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="min-h-screen bg-red-50 dark:bg-black transition-colors duration-300">
          <Header />
          <PageTransition key={location.pathname} location={location}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/experience/:experienceId" element={<ExperienceDetail />} />
            </Routes>
          </PageTransition>
        </div>
      )}
    </>
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