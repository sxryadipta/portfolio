/**
 * dev.to has a public, CORS-friendly REST API — no proxy or API key needed.
 * Docs: https://developers.forem.com/api/v1#tag/articles
 */

const DEVTO_USERNAME = 'sxryadipta';
const POST_LIMIT = 3;

const API_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=${POST_LIMIT}`;

document.addEventListener('DOMContentLoaded', fetchDevToPosts);

async function fetchDevToPosts() {
  const container = document.getElementById('blogsContainer');
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const items = await res.json();
    if (!Array.isArray(items) || !items.length) throw new Error('Empty feed');
    renderBlogs(items, container);
  } catch (err) {
    console.error('dev.to feed error:', err);
    renderFallback(container);
  }
}

function renderBlogs(items, container) {
  container.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('article');
    card.className = 'blog-card reveal';
    card.style.transitionDelay = `${i * 100}ms`;

    const date = new Date(item.published_at).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
    const image = item.cover_image || item.social_image || 'assets/blog-placeholder.jpg';
    const readTime = item.reading_time_minutes || 1;
    const snippet = (item.description || '').slice(0, 110).trim() + '…';
    const tags = (item.tag_list || []).slice(0, 3);

    card.innerHTML = `
      <a class="blog-card-link" href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer">
        <div class="blog-card-image">
          <img src="${escapeAttr(image)}" alt="${escapeAttr(item.title)}" loading="lazy">
        </div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span>${date}</span><span>•</span><span>${readTime} min read</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(snippet)}</p>
          ${tags.length ? `<ul class="tech-tags blog-tags">${tags.map(t => `<li>#${escapeHtml(t)}</li>`).join('')}</ul>` : ''}
          <span class="blog-card-cta">Read on dev.to →</span>
        </div>
      </a>
    `;
    container.appendChild(card);
  });

  if (window.__observeReveal) {
    window.__observeReveal(container.querySelectorAll('.reveal'));
  }
}

function renderFallback(container) {
  container.innerHTML = `
    <p class="blogs-error">
      Couldn't load the latest posts right now.
      <a href="https://dev.to/${DEVTO_USERNAME}" target="_blank" rel="noopener noreferrer">
        View them directly on dev.to →
      </a>
    </p>`;
}

function escapeHtml(str = '') {
  return str.replace(/[&<>"']/g, s => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[s]));
}
function escapeAttr(str = '') { return escapeHtml(str); }