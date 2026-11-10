import { profile } from '../data/site.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
        </span>
      </div>
    </footer>
  )
}
