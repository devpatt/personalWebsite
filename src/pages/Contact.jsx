import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <div className="container page page--narrow">
      <h1 className="page__title">Contact</h1>
      <p className="lead">Have a question or want to work together? Send me a message.</p>
      <ContactForm />
    </div>
  )
}
