export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500 border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-4">{/* repeat social icons */}</div>
      <p>Built with Vite · Styled with TailwindCSS · Deployed on Vercel</p>
      <iframe
        className="mx-auto mt-6 rounded-xl"
        src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID"
        width="300" height="80" allow="encrypted-media"
      />
      <p className="mt-4">Copyright © {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  )
}