export async function renderProjects(containerId) {
  const el = document.getElementById(containerId)
  try {
    const res = await fetch('https://api.github.com/users/sxryadipta/repos?sort=updated&per_page=6')
    const repos = await res.json()
    el.innerHTML = repos.map(repo => `
      <div class="card">
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || 'No description'}</p>
        <span>⭐ ${repo.stargazers_count}</span>
      </div>
    `).join('')
  } catch {
    el.innerHTML = '<p>Failed to load projects.</p>'
  }
}