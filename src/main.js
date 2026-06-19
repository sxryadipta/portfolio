import './styles/main.css'
import { injectSchema } from './data/schema.js'
import { renderProjects } from './components/projects.js'
import { renderArticles } from './components/articles.js'


injectSchema()

const app = document.getElementById('app')

app.innerHTML = `
  <div class="portfolio">
    <div class="left-panel">
      <nav>
        <span class="logo">portfolio-sxryadipta</span>
        <div class="nav-links">
          <a href="#projects">Projects</a>
          <a href="#articles">Articles</a>
          <a href="#newsletter">Newsletter</a>
        </div>
      </nav>
      <div class="hero">
        <div class="hero-tag">Backend engineer</div>
        <h1>Suryadipta Ghosh</h1>
        <p>Building reliable APIs and backend systems. Currently exploring distributed systems and open-source tooling.</p>
        <div class="hero-links">
          <a class="btn btn-accent" href="https://github.com/sxryadipta" target="_blank">GitHub</a>
          <a class="btn btn-accent" href="https://dev.to/sxryadipta" target="_blank">Dev.to</a>
          <a class="btn btn-accent" href="https://sxryadipta.substack.com" target="_blank">Substack</a>
        </div>
      </div>
    </div>

    <div class="right-panel">
      <section id="skills">
        <div class="section-label">skills</div>
        <div class="skills-grid">
          <span class="skill-pill accent">Node.js</span>
          <span class="skill-pill accent">JavaScript</span>
          <span class="skill-pill accent">PostgreSQL</span>
          <span class="skill-pill accent">Docker</span>
          <span class="skill-pill accent">REST APIs</span>
          <span class="skill-pill accent">Git</span>
        </div> 
      </section>

      


      <section id="projects">
        <div class="section-label">Projects</div>
        <div class="cards-grid" id="projects-list">
          <div class="card"><div class="card-desc">Loading...</div></div>
        </div>
      </section>

      <section id="articles">
        <div class="section-label">Articles</div>
        <div id="articles-list">
          <div class="article-card"><div class="article-title">Loading...</div></div>
        </div>
      </section>

      <section id="newsletter">
        <div class="section-label">Newsletter</div>
        <div id="substack-list">
          <div class="article-card"><div class="article-title">Loading...</div></div>
        </div>
      </section>

      <footer>
        <span>Built with vite</span>
        <span>© ${new Date().getFullYear()}</span>
      </footer>
    </main>

    

  </div>
`

renderProjects('projects-list')
renderArticles('articles-list')
renderSubstack('substack-list')




