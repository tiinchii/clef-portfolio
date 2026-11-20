import { Briefcase, CaretDown } from '@/components/slab'
import { roles } from '@/data/cv'

/**
 * ExperienceGrid - the work history from the CV, newest first.
 *
 * One glass sheet carrying a timeline: dates on the left rail, one paper card
 * per role on the right. A role shows its one-line summary and tags; the full
 * duty list folds open under it, the current role open by default. CV-length,
 * so this view scrolls (it is not in App's FIXED_ROUTES).
 */
export default function ExperienceGrid() {
  return (
    <section className="pgrid cv" aria-labelledby="experience-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience</span>
        <h1 className="pgrid__title" id="experience-title">
          Data work for the people who plan the food supply.
        </h1>
        <p className="pgrid__lede">
          Government planning and market analysis for agriculture and fisheries, built on research, field survey and teaching work.
        </p>
      </header>

      <div className="home__glass cv__glass">
        <ol className="cv-timeline" role="list">
          {roles.map((r, i) => (
            <li key={r.id} className="cv-timeline__item">
              <span className="cv-timeline__when">
                <span>{r.start}</span>
                <span className="cv-timeline__to">{r.end}</span>
              </span>
              <span className="cv-timeline__dot" data-now={r.end === 'Present' ? '' : undefined} aria-hidden="true" />

              <article className="cv-card cv-role">
                <header className="cv-role__head">
                  <span className="cv-card__icon" aria-hidden="true">
                    <Briefcase size={18} weight="duotone" />
                  </span>
                  <span className="cv-role__titles">
                    <h2 className="cv-role__title">
                      {r.title}
                      {r.basis && <span className="cv-tag cv-tag--soft">{r.basis}</span>}
                      {r.end === 'Present' && <span className="cv-tag">Current</span>}
                    </h2>
                    <span className="cv-role__org">
                      {r.org}
                      {r.unit && <span> · {r.unit}</span>}
                    </span>
                    <span className="cv-role__dates">
                      {r.start} - {r.end}
                    </span>
                  </span>
                </header>

                <p className="cv-role__summary">{r.summary}</p>

                <ul className="cv-chips" role="list" aria-label="Focus areas">
                  {r.tags.map((t) => (
                    <li key={t} className="cv-chip">{t}</li>
                  ))}
                </ul>

                <details className="cv-role__duties" open={i === 0}>
                  <summary>
                    Duties and responsibilities
                    <CaretDown size={13} weight="bold" aria-hidden="true" />
                  </summary>
                  <ul role="list">
                    {r.duties.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </details>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
