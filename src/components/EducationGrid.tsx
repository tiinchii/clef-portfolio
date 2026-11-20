import { GraduationCap, Article, SealCheck, UsersThree, Presentation } from '@/components/slab'
import { education, research, trainings, leadership, eligibility } from '@/data/cv'

/**
 * EducationGrid - schooling, research, eligibility, student leadership and
 * the seminars and trainings attended, all from the CV. Scrolls.
 */
export default function EducationGrid() {
  return (
    <section className="pgrid cv" aria-labelledby="education-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Education</span>
        <h1 className="pgrid__title" id="education-title">
          Trained as an economist at Visayas State University.
        </h1>
        <p className="pgrid__lede">
          BS Economics, cum laude, with published research and continuing training in statistics, dashboards and policy writing.
        </p>
      </header>

      <div className="home__glass cv__glass">
        <div className="cv-grid cv-grid--2">
          <div className="cv-stack">
            <section className="cv-card" aria-labelledby="schools-title">
              <header className="cv-card__head">
                <span className="cv-card__icon" aria-hidden="true">
                  <GraduationCap size={18} weight="duotone" />
                </span>
                <h2 className="cv-card__title" id="schools-title">Education</h2>
              </header>
              <ol className="cv-schools" role="list">
                {education.map((s) => (
                  <li key={s.school + s.year} className="cv-school">
                    <span className="cv-school__year">{s.year}</span>
                    <span className="cv-school__body">
                      <span className="cv-school__program">
                        {s.program}
                        {s.award && <span className="cv-tag">{s.award}</span>}
                      </span>
                      <span className="cv-school__name">
                        {s.school}, {s.place}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="cv-card" aria-labelledby="lead-title">
              <header className="cv-card__head">
                <span className="cv-card__icon" aria-hidden="true">
                  <UsersThree size={18} weight="duotone" />
                </span>
                <h2 className="cv-card__title" id="lead-title">Extracurricular activities</h2>
              </header>
              <ul className="cv-rows" role="list">
                {leadership.map((l) => (
                  <li key={l.role + l.org} className="cv-row">
                    <span className="cv-row__main">
                      <b>{l.role}</b>
                      <span>{l.org}</span>
                    </span>
                    <span className="cv-row__date">{l.years}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="cv-stack">
            <section className="cv-card cv-card--dark" aria-labelledby="elig-title">
              <header className="cv-card__head">
                <span className="cv-card__icon" aria-hidden="true">
                  <SealCheck size={18} weight="fill" />
                </span>
                <span>
                  <h2 className="cv-card__title" id="elig-title">{eligibility.title}</h2>
                  <p className="cv-card__note">{eligibility.basis}</p>
                </span>
              </header>
            </section>

            <section className="cv-card" aria-labelledby="research-title">
              <header className="cv-card__head">
                <span className="cv-card__icon" aria-hidden="true">
                  <Article size={18} weight="duotone" />
                </span>
                <h2 className="cv-card__title" id="research-title">Research and publication</h2>
              </header>
              <ul className="cv-papers" role="list">
                {research.map((p) => (
                  <li key={p.title} className="cv-paper">
                    <span className="cv-paper__kind">
                      {p.kind} · {p.year}
                    </span>
                    <span className="cv-paper__title">{p.title}</span>
                    <span className="cv-paper__detail">{p.detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <section className="cv-card" aria-labelledby="trainings-title">
          <header className="cv-card__head">
            <span className="cv-card__icon" aria-hidden="true">
              <Presentation size={18} weight="duotone" />
            </span>
            <span>
              <h2 className="cv-card__title" id="trainings-title">Seminars and trainings</h2>
              <p className="cv-card__note">{trainings.length} attended, newest first.</p>
            </span>
          </header>
          <ul className="cv-rows cv-rows--2col" role="list">
            {trainings.map((t) => (
              <li key={t.title} className="cv-row">
                <span className="cv-row__main">
                  <b>{t.title}</b>
                  <span>{t.by}</span>
                </span>
                <span className="cv-row__date">{t.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
