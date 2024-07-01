import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Skills from "./components/Skills"
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
   <main>
<NavBar />
<Hero/>
<Skills/>
<About/>
<Portfolio/>
<Testimonials/>
<Contact/>
<Footer/>
   </main>
    </>
  )
}

export default App
