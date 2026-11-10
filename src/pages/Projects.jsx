import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <div className="container page">
      <h1 className="page__title">Projects</h1>
      <div className="grid">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </div>
  )
}
