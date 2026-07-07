
const services = [
  { title: 'Web Development', items: ['Single Page Applications (SPAs)', 'Landing pages and business websites', 'Portfolio websites'] },
  { title: 'Mobile Development', items: ['Mobile-friendly web apps', 'React Native mobile apps'] },
  { title: 'UI/UX Design & Prototyping', items: ['UI design with Figma & Canva', 'UX research & improvements', 'Prototyping for websites & mobile apps'] },
]

export default function WhatIDo() {
  return (
    <section className="py-20 px-4">
      <h3 className="text-center text-gray-400 mb-2">What I do?</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="border border-gray-700 rounded-xl p-6">
            <h4 className="font-semibold mb-3">{s.title}</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              {s.items.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}