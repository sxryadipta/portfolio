import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}