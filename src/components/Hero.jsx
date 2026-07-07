import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import TechMarquee from './TechMarquee'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <p className="text-gray-400">Hi, I'm Suryadipta Ghosh</p>
      <h1 className="text-5xl md:text-7xl font-bold mt-2">Software Developer</h1>
      <p className="max-w-xl text-gray-400 mt-4">
        Transforming ideas into interactive and seamless digital experiences with cutting-edge backend development.
      </p>
      <div className="flex gap-6 mt-6 text-2xl">
        <a href="https://github.com/sxryadipta" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/sxryadipta" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:sxryadipta@gmail.com"><FaEnvelope /></a>
      </div>
      <TechMarquee />
    </section>
  )
}