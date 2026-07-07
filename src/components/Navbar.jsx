export default function Navbar() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ]
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/30 flex justify-center gap-8 py-4">
      {links.map((l) => (
        <a key={l.href} href={l.href} className="hover:text-emerald-400 transition">
          {l.label}
        </a>
      ))}
    </nav>
  )
}