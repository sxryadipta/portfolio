const toggle = document.getElementById("theme-toggle");
const img = document.getElementById("hero-img");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  img.src = isDark ? img.dataset.dark : img.dataset.light;
  toggle.textContent = isDark ? "Light" : "Dark";
});






async function loadArticles() {
  const res = await fetch('/api/articles')
  const articles = await res.json()

  const inner = document.getElementById('dragger-inner')
  inner.innerHTML = articles.map(a => `
    <div class="card">
      <span class="card-tag tag-article">Article</span>
      <p class="card-title">${a.title}</p>
      <p class="card-desc">${a.description ?? ''}</p>
      <div class="card-footer">
        <span class="card-meta">${a.readTime} min read</span>
        <a href="${a.url}" target="_blank" rel="noopener">Read →</a>
      </div>
    </div>
  `).join('')
}

document.addEventListener("DOMContentLoaded", loadArticles);