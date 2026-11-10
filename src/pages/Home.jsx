import { Link } from 'react-router-dom'
import { profile, skills } from '../data/site.js'
import { GitHubIcon, LinkedInIcon } from '../components/Icons.jsx'
import heroBg from '../assets/header-bg.jpg'

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container hero__content">
          <p className="eyebrow">{profile.tagline}</p>
          <h1>{profile.name}</h1>
          <p className="hero__bio">{profile.bio}</p>
          <div className="hero__actions">
            <Link to="/projects" className="btn">View projects</Link>
            <Link to="/contact" className="btn btn--ghost">Get in touch</Link>
          </div>
          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      </section>
      <section className="container section">
        <h2>Skills</h2>
        <ul className="tags tags--lg">
          {skills.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </section>
    </>
  )
}
