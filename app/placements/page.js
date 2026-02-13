import { placements } from "../../components/data";

export default function PlacementsPage() {
  return (
    <div className="shell">
      <section className="section">
        <h1 className="section-title">Student Placements</h1>
        <p className="section-subtitle">
          Our learners work at top companies across the globe.
        </p>

        <div className="grid grid-4">
          {placements.map((p, i) => (
            <div key={i} className="card placement-card">
              {/* <div className="placement-avatar">
                <img src={p.image} alt={p.name} />
              </div> */}

              <h3 className="placement-name">{p.name}</h3>
              <p className="placement-role">
                {p.role} at <strong>{p.company}</strong>
              </p>

              <div className="placement-package">{p.package}</div>

              <p className="placement-course">{p.course}</p>

              <blockquote className="placement-testimonial">
                “{p.testimonial}”
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}