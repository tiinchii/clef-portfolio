import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  MapPin,
  SealCheck,
  GraduationCap,
  ChartLineUp,
  Plant,
  Fish,
  MagnifyingGlass,
  UsersThree,
  PresentationChart,
  MicrosoftExcelLogo,
  Truck,
  Storefront,
  type Icon,
} from '@/components/slab'
import { profile } from '@/data/profile'
import { eligibility } from '@/data/cv'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the portrait on the
 * right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying glyphs
 * for the work it covers.
 */

type Capability = {
  index: string
  title: string
  marks: { Icon: Icon; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Supply chain and market analysis',
    marks: [
      { Icon: Plant, name: 'Agriculture' },
      { Icon: Fish, name: 'Fisheries' },
      { Icon: Truck, name: 'Logistics' },
    ],
  },
  {
    index: '02',
    title: 'Supply and demand forecasting',
    marks: [
      { Icon: ChartLineUp, name: 'Forecasts' },
      { Icon: Storefront, name: 'Markets' },
    ],
  },
  {
    index: '03',
    title: 'Research, surveys and focus groups',
    marks: [
      { Icon: MagnifyingGlass, name: 'Research' },
      { Icon: UsersThree, name: 'Focus groups' },
    ],
  },
  {
    index: '04',
    title: 'Reports, dashboards and presentations',
    marks: [
      { Icon: MicrosoftExcelLogo, name: 'Excel' },
      { Icon: PresentationChart, name: 'Dashboards' },
    ],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          {profile.fullName}: economist, data analyst and public servant from Baybay City, Leyte, now based in Quezon City.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I make numbers useful to the people who plan with them.
            <span> From fish supply to food logistics.</span>
          </p>

          <p className="agrid__note">
            <strong>Market Specialist III at the Department of Agriculture (AMAS).</strong> Before that, two years
            at BFAR’s Fisheries Planning and Economics Division, on the Philippine Fisheries Profile and the
            Quarterly Fisheries Performance Report.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      title={m.name}
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <m.Icon weight="duotone" aria-hidden="true" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <SealCheck size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{eligibility.title}</span>
                <span className="agrid__cell-meta">{eligibility.basis}</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Philippines · GMT+8</span>
              </span>
            </span>

            <Link className="agrid__cell agrid__cell--wide" to="/education">
              <span className="agrid__cell-mark">
                <GraduationCap size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Visayas State University</span>
                <span className="agrid__cell-meta">BS Economics, major in Business Economics · cum laude, 2022</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.hero.portraitSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
