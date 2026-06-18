export async function renderArticles(containerId) {
  const el = document.getElementById(containerId)
  try {
    const res = await fetch('https://dev.to/api/articles?username=sxryadipta')
    const articles = await res.json()
    el.innerHTML = articles.slice(0, 6).map(a => `
      <div class="card">
        <h3><a href="${a.url}" target="_blank">${a.title}</a></h3>
        <p>${a.description || ''}</p>
        <span>${a.readable_publish_date}</span>
      </div>
    `).join('')
  } catch {
    el.innerHTML = '<p>Failed to load articles.</p>'
  }
}