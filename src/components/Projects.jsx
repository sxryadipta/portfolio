import { projects } from '../data/projects'

const statusColor = {
  Deployed: 'bg-green-500/20 text-green-400',
  'On Development': 'bg-yellow-500/20 text-yellow-400',
  Contributor: 'bg-blue-500/20 text-blue-400',
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <h3 className="text-center text-gray-400 mb-2">My work</h3>
      <h2 className="text-center text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="border border-gray-700 rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">{p.title}</h4>
              <span className={`text-xs px-2 py-1 rounded-full ${statusColor[p.status]}`}>{p.status}</span>
            </div>
            <div className="flex gap-4 text-sm text-emerald-400">
              <a href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}