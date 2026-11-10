export default function ProjectCard({ project }) {
  const body = (
    <>
      {project.placeholder && <span className="badge">Placeholder</span>}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags">
        {project.tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </>
  )
  return project.link ? (
    <a className="card" href={project.link} target="_blank" rel="noreferrer">{body}</a>
  ) : (
    <div className="card">{body}</div>
  )
}
