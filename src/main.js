import { injectSchema } from './data/schema.js'
import { renderHero } from './components/hero.js'
import { renderSkills } from './components/skills.js'
import { renderProjects } from './components/projects.js'
import { renderArticles } from './components/articles.js'


// Inject JSON-LD schema into <head>
injectSchema()

const app = document.getElementById('app')

app.innerHTML = `
  ${renderHero()}
  ${renderSkills()}
  <section id="projects"><h2>Projects</h2><div id="projects-list">Loading...</div></section>
  <section id="articles"><h2>Articles</h2><div id="articles-list">Loading...</div></section>
  <section id="substack"><h2>Newsletter</h2><div id="substack-list">Loading...</div></section>
`

// Mount async components after DOM is ready
renderProjects('projects-list')
renderArticles('articles-list')
