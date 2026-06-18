export function renderSkills() {
  const skills = ['Node.js', 'JavaScript', 'PostgreSQL', 'Docker', 'REST APIs']
  return `
    <section id="skills">
      <h2>Skills</h2>
      <ul>${skills.map(s => `<li>${s}</li>`).join('')}</ul>
    </section>
  `
}