/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. The CV itself (roles, education,
 * skills, trainings) lives in src/data/cv.ts.
 */

import { Briefcase, GraduationCap, SealCheck, type Icon } from '@/components/slab'
import photo from '@/images/clef.jpg'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** As written on the CV, for About and the page title. */
  fullName: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Clef Piedraverde',
  fullName: 'Clef Lennard M. Piedraverde',
  firstName: 'Clef',
  handle: 'Economist · Data Analyst',
  role: 'Quezon City',
  // A photo on its own background, not a cutout - cv.css crops it to fit.
  avatarSrc: photo,
  verifiedLabel: 'CSC Honor Graduate Eligibility (PD 907)',
  email: 'cleflennard@gmail.com',
  location: 'Brgy. Culiat, Quezon City',
  stats: [
    { value: '4 yrs', label: 'Experience', Icon: Briefcase },
    { value: 'Cum laude', label: 'BS Economics', Icon: GraduationCap },
    { value: 'PD 907', label: 'CSC eligible', Icon: SealCheck },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  // One line on desktop beside the CTA, so keep it near 28 characters.
  displayName: { line1: 'Economist and', line2: 'data analyst.' },
  hero: {
    body: 'I turn production, trade and price data into the reports and forecasts behind Philippine agriculture and fisheries programs.',
    portraitSrc: photo,
    portraitAlt: 'Portrait of Clef Lennard M. Piedraverde',
  },
  // Each needs a one-colour SVG in public/icons/.
  socials: [
    { label: 'LinkedIn profile', href: 'https://ph.linkedin.com/in/clef-lennard-piedraverde-739917234', iconPath: '/icons/linkedin.svg' },
    { label: 'Facebook profile', href: 'https://www.facebook.com/profile.php?id=61591809177840', iconPath: '/icons/facebook.svg' },
    { label: 'Email Clef', href: 'mailto:cleflennard@gmail.com', iconPath: '/icons/email.svg' },
  ],
}
