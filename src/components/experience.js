export function renderExperience(containerId){
  const experiences = [
  {
    timeline: 'January 2026 — May 2026',
    position: 'Research Intern',
    place: 'CSIR-CSIO, Chandigarh',
    description: 'Collaborated with stakeholders to document requirements, define project scope, and implement solutions across various university applications.',
    skills: ['Machine Learning', 'Random Forest', 'XGBoost', 'LOOCV', 'SHAP', 'Google Colab', 'Git'],
  },
  {
    timeline: 'October 2025 — November 2025',
    position: 'Industrial Trainee',
    place: 'Semi-Conductor Laboratory (SCL), Mohali',
    description: 'Studied and demonstrated a deep technical understanding of end-to-end semiconductor manufacturing process. This included packaging, testing and quality assurance, and processes like wafer preparation, photolithography, etching, doping, and metallization.',
    skills: [
      "Semiconductor Packaging",
      "IC Testing & Characterization",
      "Quality Assurance (QA) & Reliability",
      "Semiconductor Fabrication Workflow",
      "Cleanroom Protocol & Safety",
      "Yield Enhancement & Inspection"
    ]
  },
  ]
  const el = document.getElementById(containerId)
  el.innerHTML = experiences.map(job => `
    <div class="exp-card">
      <div class="exp-header">
        <div class="exp-timeline">${job.timeline}</div>
        <div class="exp-position">${job.position}</div>
        <div class="exp-place">${job.place}</div>
      </div>
      <div class="exp-desc">${job.description}</div>
      <div class="exp-skills">
        ${job.skills.map(s => `<span class="exp-skill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('')
}


