export default function TimelineItem({ item }) {
  return (
    <article className="timeline__item">
      <h3>{item.role}</h3>
      <p className="timeline__meta">
        {item.company}{item.dates && <> · {item.dates}</>}
      </p>
      <ul>
        {item.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </article>
  )
}
