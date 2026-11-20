import { Link } from 'react-router-dom'
import { SealCheck, CaretRight, Briefcase, ChartBar, GraduationCap } from '@/components/slab'
import { profile } from '@/data/profile'
import { roles } from '@/data/cv'
import QuickMenu from './QuickMenu'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  one shelf card per rail view in a snap row, then the
 *                current role
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Experience', to: '/experience', title: 'Data work for agriculture and fisheries.', desc: 'DA, BFAR, research and teaching.', Icon: Briefcase },
  { n: '02', label: 'Skills', to: '/skills', title: 'The tools behind the numbers.', desc: 'SPSS, Excel, Looker Studio, Power BI.', Icon: ChartBar },
  { n: '03', label: 'Education', to: '/education', title: 'BS Economics, cum laude.', desc: 'Visayas State University, 2022.', Icon: GraduationCap, accent: true },
  { n: '04', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'Economist and data analyst in Quezon City.', img: profile.avatarSrc },
] as const

const current = roles[0]

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              {'img' in t ? (
                <span className="htile__media"><img className="htile__img" src={t.img} alt="" loading="lazy" /></span>
              ) : (
                <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* A header that links carries its chevron on the title itself. */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/experience" className="hsec__link">
            Currently
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <ul className="htiles htiles--single" role="list">
        <li>
          <Link to="/experience" className="htile">
            <span className="htile__media htile__glyph"><Briefcase size={52} weight="duotone" aria-hidden="true" /></span>
            <span className="htile__body">
              <span className="htile__n">Since {current.start}</span>
              <span className="htile__title">{current.title}</span>
              <span className="htile__desc">{current.org}, {current.unit}</span>
            </span>
          </Link>
        </li>
      </ul>
    </>
  )
}
