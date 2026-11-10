import { useState } from 'react'
import { FORMSPREE_ID } from '../data/site.js'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('_gotcha')) return // honeypot
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Subject<input name="subject" required /></label>
      <label>Message<textarea name="message" rows="6" required /></label>
      <input name="_gotcha" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p role="status" className={`form__status form__status--${status}`}>
        {status === 'success' && "Thanks! Your message was sent."}
        {status === 'error' && 'Something went wrong. Please try again later.'}
      </p>
    </form>
  )
}
