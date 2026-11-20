/**
 * THE CV - everything the Experience, Skills, Education and About views
 * render. Taken from docs/screenshots/CURRICULUM VITAE.docx. Edit here; the
 * views only lay it out.
 *
 * Left out on purpose, because a portfolio is public: phone numbers, the
 * personal background block (age, height, weight, marital status) and the
 * references' contact details. References are offered "on request" instead.
 */

export type Role = {
  id: string
  title: string
  /** Contract type, shown as a small tag after the title. */
  basis?: string
  org: string
  unit?: string
  start: string
  end: string
  /** One line for cards and tiles. */
  summary: string
  tags: string[]
  duties: string[]
}

export const roles: Role[] = [
  {
    id: 'da-amas',
    title: 'Market Specialist III',
    basis: 'COS',
    org: 'Department of Agriculture',
    unit: 'Agribusiness and Marketing Assistance Service',
    start: 'July 2026',
    end: 'Present',
    summary: 'Supply-chain analysis, demand outlooks and market infrastructure for DA programs.',
    tags: ['Value chains', 'Supply & demand', 'Food logistics'],
    duties: [
      'Coordinates with DA and non-DA agencies, partner LGUs and POs/FCAs on market-related infrastructure, transport, logistics support projects and the supply and demand outlook.',
      'Undertakes industry supply and value chain analysis, including prospects and technological change, to identify investment opportunities.',
      'Gathers and analyzes data for industry and logistics studies.',
      'Conducts technical review of project proposals, proposed executive orders, bills and other documents.',
      'Supports the DA Food Mobilization Program and the DA Food Lane Project, including food logistics and transport support.',
      'Monitors market-related infrastructure and keeps its databases up to date.',
      'Forecasts supply and demand to identify where marketing interventions are needed.',
      'Organizes and analyzes data for reports, and helps monitor and evaluate the division’s programs, projects and activities.',
    ],
  },
  {
    id: 'bfar-fped',
    title: 'Planning Officer II',
    basis: 'COS',
    org: 'Bureau of Fisheries and Aquatic Resources',
    unit: 'Fisheries Planning and Economics Division',
    start: 'July 2024',
    end: 'June 2026',
    summary: 'Fisheries economics: production, trade, prices and inflation, published as national reports.',
    tags: ['Fisheries statistics', 'Forecasting', 'Reporting'],
    duties: [
      'Analyzed and consolidated data on economic trends, production, trade, prices and inflation.',
      'Member of the working committee that publishes the Fisheries Industry Performance reports, including the Philippine Fisheries Profile and the Quarterly Fisheries Performance Report.',
      'Took part in the project “Development of Estimation and Forecasting Method for the Quarterly Fisheries Production by Fisheries Management Areas (FMAs).”',
      'Alternate focal person for computing the Fish Supply and Demand Outlook.',
      'Coordinated with other sections, divisions, agencies and operating units.',
      'Drafted activity proposals, procurement documents, Terms of Reference, purchase requests and payrolls, plus letters and memoranda for data requests.',
    ],
  },
  {
    id: 'pcc-ra',
    title: 'Research Assistant',
    org: 'Philippine Competition Commission',
    unit: 'Project-based, with Prof. Lemuel S. Preciados',
    start: 'September 2023',
    end: 'December 2023',
    summary: 'Field survey and analysis for a study on vegetable crop production and profitability.',
    tags: ['Field survey', 'FGD', 'Market study'],
    duties: [
      'Research assistant for the market study “Assessing the production, marketability, and profitability of selected vegetable crops in the Philippines.”',
      'Ran the primary survey in Northern Luzon (Benguet and Nueva Ecija) and facilitated focus group discussions.',
      'Encoded the primary data, ran the analyses the study needed and interpreted the results.',
      'Built the presentation of the study’s key results.',
    ],
  },
  {
    id: 'cpi-da',
    title: 'Data Analyst',
    basis: 'Temporary',
    org: 'Channel Precision Inc.',
    start: 'April 2023',
    end: 'June 2023',
    summary: 'Data gathering, cleaning, analysis and reporting, trained on advanced Excel.',
    tags: ['Advanced Excel', 'Data cleaning', 'Reporting'],
    duties: [
      'Trained in data analytics with advanced Excel functions.',
      'Gathered, cleaned and analyzed data and reported to specific departments.',
    ],
  },
  {
    id: 'vsu-instructor',
    title: 'Part-time Instructor',
    org: 'Visayas State University',
    unit: 'Department of Economics',
    start: 'October 2022',
    end: 'February 2023',
    summary: 'Taught econometrics and data analysis with IBM SPSS.',
    tags: ['Econometrics', 'IBM SPSS', 'Teaching'],
    duties: [
      'Taught econometrics and data analysis using IBM SPSS.',
      'Planned lessons and assignments, led discussion sections and graded papers and exams.',
    ],
  },
  {
    id: 'raf-ra',
    title: 'Research Assistant',
    org: 'Ramon Aboitiz Foundation Inc. Microfinance',
    unit: 'Cebu, with Prof. Lemuel S. Preciados',
    start: 'August 2022',
    end: 'October 2022',
    summary: 'Online primary research across Southern Luzon, Visayas and Northern Mindanao.',
    tags: ['Primary research', 'Microfinance', 'Data analysis'],
    duties: [
      'Conducted primary research online across Southern Luzon, the Visayas and Northern Mindanao.',
      'Encoded and analyzed the data gathered and submitted the final report.',
      'Built the presentation of the study’s key results.',
    ],
  },
]

export type School = { award?: string; program: string; school: string; place: string; year: string }

export const education: School[] = [
  {
    program: 'BS in Economics, major in Business Economics',
    award: 'Cum laude',
    school: 'Visayas State University',
    place: 'Visca, Baybay City, Leyte',
    year: 'August 2022',
  },
  {
    program: 'Senior High School: Accountancy, Business and Management',
    award: 'With honors',
    school: 'Visayas State University Senior High School',
    place: 'Visca, Baybay City, Leyte',
    year: 'May 2018',
  },
  {
    program: 'Junior High School',
    award: 'Salutatorian',
    school: 'Bunga National High School',
    place: 'Bunga, Baybay City, Leyte',
    year: '2016',
  },
  {
    program: 'Elementary',
    award: '2nd Honorable Mention',
    school: 'Bunga Elementary School',
    place: 'Bunga, Baybay City, Leyte',
    year: '2012',
  },
]

export type Paper = { kind: string; title: string; detail: string; year: string }

export const research: Paper[] = [
  {
    kind: 'Publication',
    title: 'Social and Economic Performance of Communities Within Pagbanganan Watershed in Leyte Island, Philippines',
    detail: 'Pleños, M. C. F.; Malacora, N. J. O.; Diaz, M. G.; Piedraverde, C. L. M.',
    year: '2025',
  },
  {
    kind: 'Undergraduate thesis',
    title: 'Effects of COVID-19 on Consumers’ Online Shopping Behavior Towards Skincare Products Among Faculty and Staff of Visayas State University',
    detail: 'Visayas State University, Department of Economics',
    year: '2022',
  },
]

/** Technical skills, grouped. `level` is 'basic' where the CV says so. */
export type Skill = { name: string; level?: 'basic' }
export type SkillGroup = { id: string; title: string; note: string; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    id: 'stats',
    title: 'Statistics & econometrics',
    note: 'Survey data, models and forecasts.',
    skills: [
      { name: 'IBM SPSS Statistics' },
      { name: 'IBM SPSS Amos' },
      { name: 'STAR (Statistical Tool for Agricultural Research)' },
      { name: 'Stata', level: 'basic' },
      { name: 'SmartPLS', level: 'basic' },
    ],
  },
  {
    id: 'bi',
    title: 'Dashboards & reporting',
    note: 'From spreadsheet to dashboard.',
    skills: [
      { name: 'Microsoft Excel' },
      { name: 'Looker Studio' },
      { name: 'Power BI', level: 'basic' },
      { name: 'SQL for business users' },
    ],
  },
  {
    id: 'office',
    title: 'Office & presentation',
    note: 'Reports, decks and documents.',
    skills: [
      { name: 'Google Workspace' },
      { name: 'Microsoft Word' },
      { name: 'Microsoft PowerPoint' },
      { name: 'Canva' },
    ],
  },
]

/** Self-rated, out of 5, as on the CV. */
export const softSkills: { name: string; score: number }[] = [
  { name: 'Time management', score: 5 },
  { name: 'Adaptability', score: 5 },
  { name: 'Teamwork', score: 5 },
  { name: 'Work ethic', score: 5 },
  { name: 'Communication', score: 4 },
  { name: 'Creativity', score: 4 },
  { name: 'Problem-solving', score: 4 },
  { name: 'Attention to detail', score: 4 },
]

export type Course = { title: string; provider: string; date?: string; modules?: string[] }

export const courses: Course[] = [
  {
    title: 'Project SPARTA - Data Associate Pathway',
    provider: 'DOST',
    modules: [
      'Getting Grounded on Analytics (SP101)',
      'Essential Excel Skills for Data Preparation and Analysis (SP201)',
      'SQL for Business Users (SP203)',
      'Data Management Fundamentals (SP301)',
      'Dashboards and Drill-down Analytics (SP401)',
      'Data Visualization Fundamentals (SP501)',
    ],
  },
  { title: 'Business Analytics and Frameworks', provider: 'University of the Philippines Open University', date: 'September 2023' },
  { title: 'Data Analytics Fundamentals', provider: 'DataSense Analytics', date: 'August 2023' },
]

export type Training = { title: string; by: string; date: string }

export const trainings: Training[] = [
  { title: 'Protocol, Social Graces and Etiquette Training', by: 'BFAR Central Office and Ambassador Marciano Paynor Jr.', date: 'Oct 1-3, 2025' },
  { title: 'Technical Writing for Statistical Reports and Policy Analysis', by: 'BFAR Central Office and University of the Philippines Visayas', date: 'Sep 16-18, 2025' },
  { title: 'Trainosys: Dashboarding with Topics on Data Processing', by: 'Trainosys, sponsored by BFAR Central Office', date: 'Mar 24-28, 2025' },
  { title: 'BFAR Capacity Building on Project Proposal Development and Evaluation Workshop', by: 'Program and Policy Development Section, BFAR Central Office - FPED', date: 'Mar 4-7, 2025' },
  { title: 'Career Boost with Power BI (Business Intelligence)', by: 'Exodus Experts', date: 'Jan 8-10, 2024' },
  { title: 'Public Service Values Program: Bawat Kawani Lingkod Bayan', by: 'Civil Service Institute, Civil Service Commission', date: 'Dec 2023' },
  { title: 'Disaster Risk Reduction Youth Ambassador Program Orientation', by: 'MapaKalamidad.ph', date: 'Nov 23, 2023' },
  { title: 'Marketing Me at Visayas State University', by: 'Visayas State University', date: 'Apr 28, 2022' },
  { title: 'Basics of Cost-Benefit Analysis', by: 'VSU Department of Economics', date: 'Mar 31, 2022' },
  { title: 'Basics of Financial Methods', by: 'VSU Department of Economics', date: 'Mar 30, 2022' },
  { title: 'PCAARRD-SERDAC Seminar Series on Socio-Economic Researches in Agriculture, Aquatic and Natural Resources (Visayas)', by: 'Visayas State University', date: 'Oct 4, 2019' },
  { title: 'Investment Literacy Seminar', by: 'Visayas State University', date: 'Sep 6, 2017' },
  { title: 'Seminar on Marketing Management', by: 'Visayas State University', date: 'Mar 19, 2017' },
]

export const leadership: { role: string; org: string; years: string }[] = [
  { role: 'Chairman', org: 'College of Management and Economics - Student Election Board', years: '2021-2022' },
  { role: 'Vice President', org: 'Young Economists Society - Department of Economics', years: '2019-2021' },
  { role: 'Working Committee', org: 'College of Management and Economics', years: '2018-2019' },
  { role: 'Auditor', org: 'Young Economists Society - Department of Economics', years: '2018-2019' },
]

export const eligibility = {
  title: 'Honor Graduate Eligibility',
  basis: 'PD 907, Civil Service Commission',
}
