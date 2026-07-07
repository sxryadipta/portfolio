import soundalike from '../assets/images/soundalike.png'
import devlog from '../assets/images/devlog.png'
import queryforge from '../assets/images/queryforge.png'
import chess from '../assets/images/chess.png'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

const projects = [
  { title: 'Soundalike', image: soundalike, link: 'https://github.com/sxryadipta/soundalike', preview: 'https://your-preview-url.vercel.app', status: 'On Development' },
  { title: 'Devlog', image: devlog, link: 'https://github.com/sxryadipta/devlog', preview: 'https://your-preview-url.vercel.app', status: 'On Development' },
  { title: 'Queryforge', image: queryforge, link: 'https://github.com/sxryadipta/queryforge', preview: 'https://svgl.app', status: 'On Development' },
  { title: 'Chess-Readme-Stats', image: chess, link: 'https://github.com/sxryadipta/chess-readme-stats', preview: 'https://chess-readme-stats.vercel.app', status: 'Deployed' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-t border-white-icon-tr text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-sec mb-2 shiny-sec">My work</h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-8">Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <a href={project.preview} target="_blank" rel="noopener noreferrer" className="block">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center px-3">
                  <div className="flex-grow">
                    <h4 className="text-2xl font-semibold">{project.title}</h4>
                    <span className="py-1 text-sm text-white-icon">{project.status}</span>
                  </div>
                  <div className="flex gap-2 ml-auto">
                    <a
                      target="_blank" rel="noreferrer" href={project.link} aria-label="GitHub"
                      className="size-14 flex justify-center items-center text-white-icon hover:text-white transition duration-300 border border-white-icon-tr p-3 rounded-xl bg-[#1414149c] hover:bg-white-icon-tr"
                    >
                      <FaGithub className="size-7" />
                    </a>
                    <a
                      target="_blank" rel="noreferrer" href={project.preview} aria-label="Preview"
                      className="size-14 flex justify-center items-center text-white-icon hover:text-white transition duration-300 border border-white-icon-tr p-3 rounded-xl bg-[#1414149c] hover:bg-white-icon-tr"
                    >
                      <HiOutlineExternalLink className="size-7" />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <a
          target="_blank" rel="noreferrer" href="https://github.com/sxryadipta?tab=repositories"
          className="w-full flex items-center justify-center gap-2 mt-9 text-white-icon hover:text-white transition duration-300 border border-white-icon-tr p-3 rounded-full bg-[#1414149c] hover:bg-white-icon-tr hover:scale-105"
        >
          <span className="md:text-lg text-md">More projects on</span>
          <FaGithub className="size-6" />
        </a>
      </div>
    </section>
  )
}