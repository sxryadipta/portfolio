export function injectSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Suryadipta",
    "url": "https://portfolio-sxryadipta.vercel.app/",
    "sameAs": [
      "https://github.com/sxryadipta",
      "https://dev.to/sxryadipta",
      "https://sxryadipta.substack.com"
    ]
  }
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}