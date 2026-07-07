import { useEffect, useState } from 'react'

export default function Blogs() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=sxryadipta')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then((data) => setPosts(data.slice(0, 4))) // limit how many show
      .catch((err) => {
        console.error(err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="blogs" className="py-20 px-4">
      <h3 className="text-center text-gray-400 mb-2">My writing</h3>
      <h2 className="text-center text-3xl font-bold mb-10">Blogs</h2>

      {loading && <p className="text-center text-gray-400">Loading posts…</p>}
      {error && (
        <p className="text-center text-gray-400">
          Couldn't load posts right now — check back later.
        </p>
      )}
      {!loading && !error && posts.length === 0 && (
        <p className="text-center text-gray-400">No posts published yet.</p>
      )}

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:border-emerald-400 transition"
          >
            {post.cover_image && (
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h4 className="font-semibold mb-1">{post.title}</h4>
              <p className="text-sm text-gray-400 line-clamp-2">{post.description}</p>
              <span className="text-xs text-gray-500 mt-2 block">
                {new Date(post.published_at).toLocaleDateString()}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}