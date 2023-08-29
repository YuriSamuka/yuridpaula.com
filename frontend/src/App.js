import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
import Resume from './components/Resume'
import Footer from './components/Footer'
import { Element, scroller } from 'react-scroll'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    const sectionName = location.hash.substr(1)
    if (sectionName) {
      scrollToSection(sectionName)
    }
  }, [location.hash])

  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName)
    scroller.scrollTo(sectionName, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -70,
    })
    if (sectionName !== activeSection) {
      window.history.pushState({}, '', `#${sectionName}`)
    }
  }

  return (
    <main>
      <Navigation active={activeSection} scrollToSection={scrollToSection} />
      <Element name="home">
        <Home />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </main>
  )
}


export default App