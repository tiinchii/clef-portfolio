import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Briefcase,
  Medal,
  GraduationCap,
  Presentation,
  SealCheck,
  Article,
  Certificate,
  ChartLineUp,
  Fish,
  FileText,
  Truck,
  ChartBar,
  type Icon,
} from '@/components/slab'
import { roles, trainings, research, courses } from '@/data/cv'

/**
 * Home's showcase: five cards, each saying something the rest of Home does
 * not. The tools live in the strip above and the photo in the rail, so
 * neither is repeated here. Every card links to the view that holds the full
 * record, and every line comes from the CV.
 *
 *   row 1   Experience (wide)       Reports and outputs (wide)
 *   row 2   Credentials   Publication   Education and training (wide)
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

/** What the work produced - pulled out of the duty lists in cv.ts. */
const OUTPUTS: { Icon: Icon; title: string; note: string }[] = [
  { Icon: FileText, title: 'Philippine Fisheries Profile', note: 'BFAR · working committee' },
  { Icon: ChartBar, title: 'Quarterly Fisheries Performance Report', note: 'BFAR · working committee' },
  { Icon: Fish, title: 'Fish Supply and Demand Outlook', note: 'BFAR · alternate focal person' },
  { Icon: ChartLineUp, title: 'Production forecasts by FMA', note: 'BFAR · estimation and forecasting project' },
  { Icon: Truck, title: 'DA Food Lane Project', note: 'DA AMAS · food logistics support' },
]

const sparta = courses[0]
const STUDY: { Icon: Icon; title: string; note: string }[] = [
  { Icon: GraduationCap, title: 'BS Economics, cum laude', note: 'Visayas State University, 2022' },
  { Icon: Certificate, title: 'Project SPARTA', note: `DOST Data Associate Pathway · ${sparta.modules?.length ?? 0} modules` },
  ...courses.slice(1).map((c) => ({ Icon: Certificate, title: c.title, note: `${c.provider}, ${c.date}` })),
  { Icon: Presentation, title: `${trainings.length} seminars and trainings`, note: 'Dashboards, technical writing, Power BI and more' },
]

const paper = research.find((p) => p.kind === 'Publication') ?? research[0]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: Icon
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

/** A ledger of five rows: tile, title over a note, index on the right. */
function Ledger({ rows }: { rows: { Icon: Icon; title: string; note: string }[] }) {
  return (
    <ul className="bento__media bento__offers" role="list">
      {rows.map(({ Icon, title, note }, i) => (
        <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
          <span className="bento__offer-tile">
            <Icon size={15} weight="duotone" aria-hidden="true" />
          </span>
          <span className="bento__offer-text">
            <span className="bento__offer-title">{title}</span>
            <span className="bento__offer-note">{note}</span>
          </span>
          <span className="bento__offer-num" aria-hidden="true">
            0{i + 1}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento bento--cv" aria-label="Explore the portfolio">
      {/* Experience: the roles drift upward on a looped track. */}
      <Link to="/experience" className="bento__card bento__card--projects">
        <CardHead Icon={Briefcase} title="Experience" desc="Market analysis at DA, fisheries planning at BFAR, and research before that." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...roles, ...roles].map((r, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Briefcase size={14} weight="fill" />
                  <b>{r.title}</b>
                </span>
                <span className="bento__review-role">{r.org}</span>
                <span className="bento__review-work">
                  {r.start} - {r.end}
                </span>
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Reports: the national publications and programs the work feeds. */}
      <Link to="/experience" className="bento__card bento__card--wide">
        <CardHead Icon={FileText} title="Reports" desc="The national reports and programs the analysis goes into." />
        <Ledger rows={OUTPUTS} />
      </Link>

      {/* Credentials: the two honours, one ring. */}
      <Link to="/education" className="bento__card">
        <CardHead Icon={Medal} title="Credentials" desc="CSC Honor Graduate Eligibility (PD 907), earned with a cum laude degree." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring bento__badge-ring--glyph">
            <SealCheck size={44} weight="duotone" />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Cum laude · PD 907
          </span>
        </div>
      </Link>

      {/* Publication: the paper itself, as a title page. */}
      <Link to="/education" className="bento__card">
        <CardHead Icon={Article} title="Publication" desc={`Co-author, ${paper.year}.`} />
        <div className="bento__media bento__paper" aria-hidden="true">
          <span className="bento__paper-kicker">{paper.kind} · {paper.year}</span>
          <span className="bento__paper-title">{paper.title}</span>
          <span className="bento__paper-by">{paper.detail}</span>
        </div>
      </Link>

      {/* Education and training: degree, coursework and seminars. */}
      <Link to="/education" className="bento__card bento__card--wide">
        <CardHead Icon={GraduationCap} title="Education" desc="An economics degree, then data analytics coursework and continuing training." />
        <Ledger rows={STUDY} />
      </Link>
    </nav>
  )
}
