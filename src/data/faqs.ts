export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What kind of work do you do?',
    a: 'Economic and market analysis for Philippine agriculture and fisheries: supply and demand outlooks, value chain studies, price and trade data, and the reports built on them.',
  },
  {
    q: 'Where do you work now?',
    a: 'Market Specialist III (contract of service) at the Department of Agriculture’s Agribusiness and Marketing Assistance Service since July 2026. Before that, Planning Officer II at BFAR’s Fisheries Planning and Economics Division.',
  },
  {
    q: 'Which tools do you use?',
    a: 'Excel, IBM SPSS (Statistics and Amos) and STAR for analysis, Looker Studio and Power BI for dashboards, with basic Stata and SmartPLS. Google Workspace, Microsoft Office and Canva for reports and presentations.',
  },
  {
    q: 'What research have you done?',
    a: 'A 2025 publication on the social and economic performance of communities in the Pagbanganan Watershed, Leyte, plus research assistant work on market studies for the Philippine Competition Commission and the Ramon Aboitiz Foundation.',
  },
  {
    q: 'Can I get your full CV or references?',
    a: 'Yes. Write using the form or email me, and I will send the CV. References are available on request.',
  },
]
