import TimelineItem from '../components/TimelineItem.jsx'
import { experience, education } from '../data/experience.js'

export default function Experience() {
  return (
    <div className="container page">
      <h1 className="page__title">Experience</h1>
      <div className="timeline">
        {experience.map((e) => <TimelineItem key={e.company + e.dates} item={e} />)}
      </div>
      <h2 className="page__subtitle">Education</h2>
      <div className="timeline">
        <TimelineItem item={education} />
      </div>
    </div>
  )
}
