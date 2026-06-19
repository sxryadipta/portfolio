export async function renderProjects(containerId) {
  const el = document.getElementById(containerId)
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: `{
        user(login: "sxryadipta") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                primaryLanguage { name }
                repositoryTopics(first: 5) {
                  nodes { topic { name } }
                }
              }
            }
          }
        }
      }`})
    })

    const { data } = await res.json()
    const repos = data.user.pinnedItems.nodes

    el.innerHTML = repos.map(repo => {
      const topics = repo.repositoryTopics.nodes.map(n => n.topic.name)
      const skills = repo.primaryLanguage
        ? [repo.primaryLanguage.name, ...topics]
        : topics

      return `
        <div class="card">
          <div class="card-body">
            <div class="card-header">
              <div class="card-title">${repo.name}</div>
              ${repo.primaryLanguage ? `<div class="card-type">${repo.primaryLanguage.name}</div>` : ''}
            </div>
            <div class="card-desc">${repo.description || 'No description'}</div>
            <div class="card-links">
              <a class="card-link primary" href="${repo.url}" target="_blank">↗ View Repo</a>
            </div>
            <div class="card-meta">
              ${skills.map(s => `<span>${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `
    }).join('')
  } catch {
    el.innerHTML = '<p>Failed to load projects.</p>'
  }
}