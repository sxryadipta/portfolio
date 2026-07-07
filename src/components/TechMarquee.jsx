import { techStack } from '../data/techStack'

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack] 

  return (
    <div className="overflow-hidden w-full mt-10">
      <div className="flex gap-8 w-max animate-marquee">
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0">
            <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
            <span className="text-sm text-gray-400 whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}