import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // wire to Formspree/EmailJS/your own API route here
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-lg mx-auto">
      <h3 className="text-center text-gray-400 mb-2">Let's talk</h3>
      <h2 className="text-center text-3xl font-bold mb-6">Contact</h2>
      <p className="text-center text-gray-400 mb-6">Have a question or a project in mind? Feel free to reach out.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="bg-transparent border border-gray-700 rounded px-4 py-2" required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="bg-transparent border border-gray-700 rounded px-4 py-2" required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="bg-transparent border border-gray-700 rounded px-4 py-2" rows={4} required />
        <button className="bg-emerald-500 text-black font-semibold rounded px-4 py-2">Submit</button>
      </form>
      {sent && <p className="text-green-400 mt-4 text-center">✅ Thank you for your message!</p>}
    </section>
  )
}