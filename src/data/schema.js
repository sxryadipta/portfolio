const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://portfolio-sxryadipta.vercel.app/#person",
      "name": "Suryadipta Ghosh",
      "alternateName": "sxryadipta",
      "jobTitle": "JavaScript Backend Developer",
      "url": "https://portfolio-sxryadipta.vercel.app/",
      "description": "Backend engineer focusing on JavaScript ecosystems, scalable server architectures, and open-source tooling.",
      "sameAs": [
        "https://github.com/sxryadipta",
        "https://dev.to/sxryadipta",
        "https://sxryadipta.substack.com",
        "https://linkedin.com/in/sxryadipta",
        "https://medium.com/@sxryadipta"
      ],
      "knowsAbout": [
        "https://en.wikipedia.org/wiki/Node.js",
        "https://en.wikipedia.org/wiki/PostgreSQL",
        "https://en.wikipedia.org/wiki/Representational_state_transfer",
        "Backend Architecture",
        "API Development",
        "Docker"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://portfolio-sxryadipta.vercel.app/#person",
      "url": "https://portfolio-sxryadipta.vercel.app/",
      "name": "Suryadipta Ghosh — Backend Engineer",
      "author": {
        "@id": "https://portfolio-sxryadipta.vercel.app/#person"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://chess-readme-stats.vercel.app/#app",
      "name": "Chess README Stats Generator",
      "url": "https://chess-readme-stats.vercel.app",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": "Automated GitHub README stats generator that fetches and displays real-time Chess.com game statistics every 6 hours.",
      "browserRequirements": "Requires HTML5 compatible browser.",
      "creator": {
        "@id": "https://portfolio-sxryadipta.vercel.app/#person"
      },
      "codeRepository": "https://github.com/sxryadipta/chess-readme-stats"
    }
  ]
}

export function injectSchema() {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}