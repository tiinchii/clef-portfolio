import { ChartScatter, PresentationChart, FileText, Certificate, CheckCircle, type Icon } from '@/components/slab'
import { skillGroups, softSkills, courses } from '@/data/cv'

/**
 * SkillsGrid - what the CV lists as technical skills, soft skills and online
 * courses. Three skill cards across the top, then the soft-skill meters beside
 * the coursework. Scrolls like Experience.
 */

const GROUP_ICONS: Record<string, Icon> = {
  stats: ChartScatter,
  bi: PresentationChart,
  office: FileText,
}

export default function SkillsGrid() {
  return (
    <section className="pgrid cv" aria-labelledby="skills-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Skills</span>
        <h1 className="pgrid__title" id="skills-title">
          The tools behind the numbers.
        </h1>
        <p className="pgrid__lede">
          Statistics packages for the analysis, spreadsheets and dashboards for the reporting, and DOST’s Data Associate pathway underneath.
        </p>
      </header>

      <div className="home__glass cv__glass">
        <ul className="cv-grid cv-grid--3" role="list">
          {skillGroups.map((g) => {
            const GroupIcon = GROUP_ICONS[g.id] ?? ChartScatter
            return (
              <li key={g.id} className="cv-card">
                <header className="cv-card__head">
                  <span className="cv-card__icon" aria-hidden="true">
                    <GroupIcon size={18} weight="duotone" />
                  </span>
                  <span>
                    <h2 className="cv-card__title">{g.title}</h2>
                    <p className="cv-card__note">{g.note}</p>
                  </span>
                </header>
                <ul className="cv-list" role="list">
                  {g.skills.map((s) => (
                    <li key={s.name} className="cv-list__row">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span className="cv-list__text">{s.name}</span>
                      {s.level === 'basic' && <span className="cv-tag cv-tag--soft">Basic</span>}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>

        <div className="cv-grid cv-grid--2">
          <section className="cv-card" aria-labelledby="soft-title">
            <header className="cv-card__head">
              <span>
                <h2 className="cv-card__title" id="soft-title">Soft skills</h2>
                <p className="cv-card__note">Self-rated, out of five.</p>
              </span>
            </header>
            <ul className="cv-meters" role="list">
              {softSkills.map((s) => (
                <li key={s.name} className="cv-meter">
                  <span className="cv-meter__name">{s.name}</span>
                  <span
                    className="cv-meter__bar"
                    role="img"
                    aria-label={`${s.score} out of 5`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <i key={n} data-on={n <= s.score ? '' : undefined} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="cv-card" aria-labelledby="courses-title">
            <header className="cv-card__head">
              <span className="cv-card__icon" aria-hidden="true">
                <Certificate size={18} weight="duotone" />
              </span>
              <span>
                <h2 className="cv-card__title" id="courses-title">Online courses</h2>
                <p className="cv-card__note">Data analytics coursework.</p>
              </span>
            </header>
            <ul className="cv-courses" role="list">
              {courses.map((c) => (
                <li key={c.title} className="cv-course">
                  <span className="cv-course__top">
                    <span className="cv-course__title">{c.title}</span>
                    {c.date && <span className="cv-course__date">{c.date}</span>}
                  </span>
                  <span className="cv-course__by">{c.provider}</span>
                  {c.modules && (
                    <ul className="cv-chips" role="list" aria-label={`${c.title} modules`}>
                      {c.modules.map((m) => (
                        <li key={m} className="cv-chip">{m}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
