export async function renderArticles(containerId) {
  const el = document.getElementById(containerId)
  try {
    const res = await fetch('https://dev.to/api/articles?username=sxryadipta&per_page=100')
    const articles = await res.json()

    // sort by date, take top 6
    const recent = [...articles]
      .sort((a, b) => new Date(b.published_timestamp) - new Date(a.published_timestamp))
      .slice(0, 6)

    el.innerHTML = `
      <div class="articles-list">
        ${recent.map(a => {
          const img = a.cover_image || a.social_image
          const date = new Date(a.published_timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          return `
            <a class="article-card" href="${a.url}" target="_blank">
              ${img ? `
                <div class="article-cover">
                  <img src="${img}" alt="${a.title}" loading="lazy" />
                </div>` : ''}
              <div class="article-title">
                <span>${a.title}</span>
                <span class="article-arrow">↗</span>
              </div>
              <div class="article-meta">
                <span>📅 ${date}</span>
                <span>👍 ${a.positive_reactions_count}</span>
              </div>
              <div class="article-desc">${a.description || ''}</div>
            </a>
          `
        }).join('')}
      </div>
      <div class="articles-footer">
        <a href="https://dev.to/sxryadipta" target="_blank">View all posts →</a>
      </div>
    `
  } catch {
    el.innerHTML = '<p style="color: var(--muted)">Failed to load articles.</p>'
  }
}