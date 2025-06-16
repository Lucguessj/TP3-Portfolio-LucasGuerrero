import { StrictMode, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About/about.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   
      
 <BrowserRouter>
       <Header />
         <video autoPlay muted loop id="video-fondo">
        <source src="/Fondo.mp4" type="video/mp4" />
      </video>
      
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/aboutme" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  
   
  </StrictMode>,
) 