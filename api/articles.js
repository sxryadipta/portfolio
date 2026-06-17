const DEV_TO_USERNAME = "sxryadipta";
app.get('/api/articles', async (c) => {
  const res = await fetch(
    'https://dev.to/api/articles?username=${DEV_TO_USERNAME}&per_page=5'
  )
  const articles = await res.json()

  const shaped = articles.map(a => ({
    title: a.title,
    description: a.description,
    url: a.url,
    cover: a.cover_image,
    tags: a.tag_list,
    date: a.published_at,
    readTime: a.reading_time_minutes
  }))

  c.header('Cache-Control', 'public, max-age=3600')
  return c.json(shaped)
})