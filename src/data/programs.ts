import { Program } from '../types';

export const programs: Program[] = [
  // Faculty of Architecture
  {
    id: 'hku-ba-architectural-studies',
    jupasCode: 'JS6004',
    name: 'Bachelor of Arts in Architectural Studies',
    university: 'HKU',
    faculty: 'Faculty of Architecture',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 26,
    minBest5: 24,
    maxBest5: 28,
    subjectWeighting: {},
    additionalRequirements: 'Cantonese knowledge required'
  },
  {
    id: 'hku-mbbs',
    jupasCode: 'JS6456',
    name: 'Bachelor of Medicine and Bachelor of Surgery',
    university: 'HKU',
    faculty: 'Li Ka Shing Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['chem', 'combined_sci']
    },
    minRequirements: { chinese: 3, english: 4, math: 2, ls: 3 },
    medianBest5: 40.5,
    minBest5: 36.5,
    maxBest5: 44.5,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Chemistry or Combined Science with Chemistry component required; Cantonese knowledge required'
  },
  {
    id: 'hku-bnurs',
    jupasCode: 'JS6468',
    name: 'Bachelor of Nursing',
    university: 'HKU',
    faculty: 'Li Ka Shing Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 25,
    minBest5: 24,
    maxBest5: 28,
    subjectWeighting: {},
    additionalRequirements: 'Cantonese knowledge required'
  },
  {
    id: 'hku-bcm',
    jupasCode: 'JS6482',
    name: 'Bachelor of Chinese Medicine',
    university: 'HKU',
    faculty: 'Li Ka Shing Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'integrated_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 28,
    minBest5: 27,
    maxBest5: 31,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/Integrated Science/Physics required; Chinese proficiency required'
  },
  {
    id: 'hku-bpharm',
    jupasCode: 'JS6494',
    name: 'Bachelor of Pharmacy',
    university: 'HKU',
    faculty: 'Li Ka Shing Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['chem', 'combined_sci']
    },
    minRequirements: { chinese: 3, english: 4, math: 2, ls: 3 },
    medianBest5: 35,
    minBest5: 31,
    maxBest5: 39,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Chemistry or Combined Science with Chemistry component required; Cantonese knowledge required'
  },
  {
    id: 'hku-bbms',
    jupasCode: 'JS6949',
    name: 'Bachelor of Biomedical Sciences',
    university: 'HKU',
    faculty: 'Li Ka Shing Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci']
    },
    minRequirements: { chinese: 3, english: 4, math: 2, ls: 3 },
    medianBest5: 37,
    minBest5: 33,
    maxBest5: 41,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science with Biology or Chemistry component required'
  },

  // School of Computing and Data Science
  {
    id: 'hku-basc-applied-ai',
    jupasCode: 'JS6224',
    name: 'Bachelor of Arts and Sciences in Applied Artificial Intelligence',
    university: 'HKU',
    faculty: 'School of Computing and Data Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['m1', 'm2']
    },
    minRequirements: { chinese: 3, english: 4, math: 4, ls: 3 },
    medianBest5: 46,
    minBest5: 42,
    maxBest5: 50,
    subjectWeighting: { 'eng': 2, 'math': 2, 'm1': 2, 'm2': 2, 'bio': 1.5, 'chem': 1.5, 'phy': 1.5, 'ict': 1.5 },
    additionalRequirements: 'Level 4+ in M1/M2 required'
  },
  {
    id: 'hku-basc-fintech',
    jupasCode: 'JS6248',
    name: 'Bachelor of Arts and Sciences in Financial Technology',
    university: 'HKU',
    faculty: 'School of Computing and Data Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 27,
    minBest5: 23,
    maxBest5: 31,
    subjectWeighting: {}
  },
  {
    id: 'hku-bsc-actuarial-science',
    jupasCode: 'JS6729',
    name: 'Bachelor of Science in Actuarial Science',
    university: 'HKU',
    faculty: 'School of Computing and Data Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['m1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 4, ls: 3 },
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32,
    subjectWeighting: { 'eng': 1.2, 'math': 1.2, 'm1': 1.2, 'm2': 1.2 },
    additionalRequirements: 'Level 4+ in M1/M2 required'
  },
  {
    id: 'hku-statistical-decision-sciences',
    jupasCode: 'JS6779',
    name: 'Statistical Decision Sciences',
    university: 'HKU',
    faculty: 'School of Computing and Data Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 4, ls: 3 },
    medianBest5: 26,
    minBest5: 22,
    maxBest5: 30,
    subjectWeighting: { 'math': 1.5 }
  },
  {
    id: 'hku-computing-data-science',
    jupasCode: 'JS6999',
    name: 'Computing and Data Science',
    university: 'HKU',
    faculty: 'School of Computing and Data Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'econ', 'ict']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 31,
    minBest5: 27,
    maxBest5: 35,
    subjectWeighting: { 'math': 1.5, 'bio': 1.5, 'chem': 1.5, 'econ': 1.5, 'ict': 1.5, 'm1': 1.5, 'm2': 1.5, 'phy': 1.5 },
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Physics/Economics/ICT required'
  },

  // Faculty of Social Sciences
  {
    id: 'hku-bpsyc',
    jupasCode: 'JS6705',
    name: 'Bachelor of Psychology',
    university: 'HKU',
    faculty: 'Faculty of Social Sciences',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32,
    subjectWeighting: {}
  },
  {
    id: 'hku-bsocsc',
    jupasCode: 'JS6717',
    name: 'Bachelor of Social Sciences',
    university: 'HKU',
    faculty: 'Faculty of Social Sciences',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28,
    subjectWeighting: {}
  },
  {
    id: 'hku-bsw',
    jupasCode: 'JS6731',
    name: 'Bachelor of Social Work',
    university: 'HKU',
    faculty: 'Faculty of Social Sciences',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 26,
    minBest5: 22,
    maxBest5: 30,
    subjectWeighting: {}
  },
  {
    id: 'hku-bsocsc-gov-laws-llb',
    jupasCode: 'JS6810',
    name: 'Bachelor of Social Sciences (Government and Laws) and Bachelor of Laws',
    university: 'HKU',
    faculty: 'Faculty of Social Sciences',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 4, english: 5, math: 3, ls: 3 },
    medianBest5: 35,
    minBest5: 31,
    maxBest5: 39,
    subjectWeighting: {}
  },
  {
    id: 'hku-bjour',
    jupasCode: 'JS6822',
    name: 'Bachelor of Journalism',
    university: 'HKU',
    faculty: 'Faculty of Social Sciences',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28,
    subjectWeighting: { 'eng': 1.5 }
  },

  // School of Biomedical Engineering
  {
    id: 'hku-beng-biomedical',
    jupasCode: 'JS6925',
    name: 'Bachelor of Engineering in Biomedical Engineering',
    university: 'HKU',
    faculty: 'School of Biomedical Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 27,
    minBest5: 23,
    maxBest5: 31,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/Physics required'
  },

  // School of Innovation
  {
    id: 'hku-bsc-innovation-tech',
    jupasCode: 'JS6602',
    name: 'Bachelor of Science in Innovation and Technology',
    university: 'HKU',
    faculty: 'School of Innovation',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['dat', 'tl', 'ict', 'bio', 'chem', 'phy', 'combined_sci', 'integrated_sci']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 48,
    minBest5: 44,
    maxBest5: 52,
    subjectWeighting: { 'eng': 2, 'math': 2, 'bio': 2, 'chem': 2, 'combined_sci': 2, 'dat': 2, 'ict': 2, 'integrated_sci': 2, 'm1': 2, 'm2': 2, 'phy': 2, 'tl': 2 },
    additionalRequirements: 'Level 3+ in DAT/TL/ICT/Biology/Chemistry/Physics/Combined Science/Integrated Science required',
    note: 'Subject to approval'
  },
  {
    id: 'hku-bsc-surveying',
    jupasCode: 'JS6016',
    name: 'Bachelor of Science in Surveying',
    university: 'HKU',
    faculty: 'Faculty of Architecture',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 27,
    minBest5: 23,
    maxBest5: 31,
    subjectWeighting: {}
  },
  {
    id: 'hku-ba-landscape-studies',
    jupasCode: 'JS6028',
    name: 'Bachelor of Arts in Landscape Studies',
    university: 'HKU',
    faculty: 'Faculty of Architecture',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28,
    subjectWeighting: {},
    additionalRequirements: 'Creative Design Response and portfolio required'
  },
  {
    id: 'hku-ba-urban-studies',
    jupasCode: 'JS6042',
    name: 'Bachelor of Arts in Urban Studies',
    university: 'HKU',
    faculty: 'Faculty of Architecture',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28,
    subjectWeighting: {}
  },
  {
    id: 'hku-basc-design-plus',
    jupasCode: 'JS6236',
    name: 'Bachelor of Arts and Sciences in Design+',
    university: 'HKU',
    faculty: 'Faculty of Architecture',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 2, ls: 3 },
    medianBest5: 27,
    minBest5: 23,
    maxBest5: 31,
    subjectWeighting: {},
    additionalRequirements: 'Creative work submission required'
  },

  // Faculty of Arts
  {
    id: 'hku-ba',
    jupasCode: 'JS6054',
    name: 'Bachelor of Arts',
    university: 'HKU',
    faculty: 'Faculty of Arts',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32,
    subjectWeighting: { 'eng': 2, 'chi': 1.5 }
  },
  {
    id: 'hku-ba-global-creative-industries',
    jupasCode: 'JS6274',
    name: 'Bachelor of Arts in Global Creative Industries',
    university: 'HKU',
    faculty: 'Faculty of Arts',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 29,
    minBest5: 25,
    maxBest5: 33,
    subjectWeighting: { 'eng': 2 }
  },
  {
    id: 'hku-ba-humanities-digital-tech',
    jupasCode: 'JS6286',
    name: 'Bachelor of Arts in Humanities and Digital Technologies',
    university: 'HKU',
    faculty: 'Faculty of Arts',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 29,
    minBest5: 25,
    maxBest5: 33,
    subjectWeighting: { 'eng': 2, 'chi': 1.5 }
  },
  {
    id: 'hku-ba-beng-ai-data-science',
    jupasCode: 'JS6298',
    name: 'Bachelor of Arts and Bachelor of Engineering in Artificial Intelligence and Data Science',
    university: 'HKU',
    faculty: 'Faculty of Arts',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'econ', 'ict']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 35,
    minBest5: 31,
    maxBest5: 39,
    subjectWeighting: { 'eng': 2, 'math': 1.5, 'bio': 1.5, 'chem': 1.5, 'phy': 1.5, 'econ': 1.5, 'ict': 1.5, 'm1': 1.5, 'm2': 1.5 },
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Physics/Economics/ICT required'
  },

  // HKU Business School
  {
    id: 'hku-bba',
    jupasCode: 'JS6755',
    name: 'Bachelor of Business Administration',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32,
    subjectWeighting: { 'eng': 1.5, 'math': 1.5 }
  },
  {
    id: 'hku-becon-becon-finance',
    jupasCode: 'JS6767',
    name: 'Bachelor of Economics / Bachelor of Economics and Finance',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 32,
    minBest5: 28,
    maxBest5: 36,
    subjectWeighting: { 'eng': 1.5, 'math': 1.5 }
  },
  {
    id: 'hku-bba-accounting-finance',
    jupasCode: 'JS6781',
    name: 'Bachelor of Business Administration in Accounting and Finance / Accounting Data Analytics',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 30,
    minBest5: 26,
    maxBest5: 34,
    subjectWeighting: { 'eng': 1.5, 'math': 1.5 }
  },
  {
    id: 'hku-bba-business-analytics',
    jupasCode: 'JS6793',
    name: 'Bachelor of Business Administration (Business Analytics)',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'ict', 'integrated_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32,
    subjectWeighting: { 'eng': 1.5, 'math': 1.5 },
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/ICT/Integrated Science/Physics required'
  },
  {
    id: 'hku-bba-law-llb',
    jupasCode: 'JS6808',
    name: 'Bachelor of Business Administration (Law) and Bachelor of Laws',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 5, math: 4, ls: 4 },
    medianBest5: 43,
    minBest5: 39,
    maxBest5: 47,
    subjectWeighting: { 'eng': 1.5, 'math': 1.5 }
  },
  {
    id: 'hku-bsc-marketing-analytics-tech',
    jupasCode: 'JS6846',
    name: 'Bachelor of Science in Marketing Analytics and Technology',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'bafs', 'chem', 'combined_sci', 'econ', 'ict', 'integrated_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32,
    subjectWeighting: { 'eng': 1.5, 'math': 1.5 },
    additionalRequirements: 'Level 3+ in Biology/BAFS/Chemistry/Combined Science/Economics/ICT/Integrated Science/Physics required'
  },
  {
    id: 'hku-bfin-asset-mgmt-private-banking',
    jupasCode: 'JS6860',
    name: 'Bachelor of Finance in Asset Management and Private Banking',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 43,
    minBest5: 39,
    maxBest5: 47,
    subjectWeighting: { 'eng': 1.5, 'math': 1.5 }
  },
  {
    id: 'hku-bsc-quantitative-finance',
    jupasCode: 'JS6884',
    name: 'Bachelor of Science in Quantitative Finance',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['m1', 'm2']
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 45,
    minBest5: 41,
    maxBest5: 49,
    subjectWeighting: { 'eng': 1.5, 'math': 1.25, 'm1': 1.25, 'm2': 1.25 },
    additionalRequirements: 'Level 3+ in M1/M2 required'
  },
  {
    id: 'hku-bba-intl-business-global-mgmt',
    jupasCode: 'JS6896',
    name: 'Bachelor of Business Administration in International Business and Global Management',
    university: 'HKU',
    faculty: 'HKU Business School',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 5, math: 4, ls: 3 },
    medianBest5: 48,
    minBest5: 44,
    maxBest5: 52,
    subjectWeighting: { 'eng': 1.5, 'math': 1.5 }
  },

  // Faculty of Dentistry
  {
    id: 'hku-bds',
    jupasCode: 'JS6107',
    name: 'Bachelor of Dental Surgery',
    university: 'HKU',
    faculty: 'Faculty of Dentistry',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem']
    },
    minRequirements: { chinese: 3, english: 4, math: 3, ls: 3 },
    medianBest5: 42,
    minBest5: 38,
    maxBest5: 46,
    subjectWeighting: { 'bio': 1.3, 'chem': 1.3 },
    additionalRequirements: 'Level 3+ in Biology or Chemistry required'
  },

  // Faculty of Education
  {
    id: 'hku-ba-bed-english',
    jupasCode: 'JS6066',
    name: 'Bachelor of Arts and Bachelor of Education in Language Education - English',
    university: 'HKU',
    faculty: 'Faculty of Education',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32,
    subjectWeighting: { 'eng': 1.5 },
    additionalRequirements: 'Personal statement in English required'
  },
  {
    id: 'hku-ba-bed-chinese',
    jupasCode: 'JS6080',
    name: 'Bachelor of Arts and Bachelor of Education in Language Education - Chinese',
    university: 'HKU',
    faculty: 'Faculty of Education',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 30,
    minBest5: 26,
    maxBest5: 34,
    subjectWeighting: { 'chi': 1.5 },
    additionalRequirements: 'Knowledge of Cantonese and Putonghua required'
  },
  
  {
    id: 'hku-bed-early-childhood-special-ed',
    jupasCode: 'JS6092',
    name: 'Bachelor of Education in Early Childhood Education and Special Education',
    university: 'HKU',
    faculty: 'Faculty of Education',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 23.5,
    minBest5: 19.5,
    maxBest5: 27.5,
    subjectWeighting: { 'eng': 1.5 },
    additionalRequirements: 'Personal statement in English required'
  },
  {
    id: 'hku-bed-bsc',
    jupasCode: 'JS6119',
    name: 'Bachelor of Education and Bachelor of Science',
    university: 'HKU',
    faculty: 'Faculty of Education',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy']
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 35,
    minBest5: 31,
    maxBest5: 39,
    subjectWeighting: { 'math': 1.5, 'bio': 1.5, 'chem': 1.5, 'phy': 1.5, 'm1': 1.5, 'm2': 1.5 },
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Physics required'
  },
  {
    id: 'hku-bsc-speech-language-pathology',
    jupasCode: 'JS6157',
    name: 'Bachelor of Science in Speech-Language Pathology',
    university: 'HKU',
    faculty: 'Faculty of Education',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 2, ls: 3 },
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32,
    subjectWeighting: {},
    additionalRequirements: 'Fluency in Cantonese and English required'
  },

  // Faculty of Engineering
  {
    id: 'hku-beng-elite',
    jupasCode: 'JS6303',
    name: 'Bachelor of Engineering Elite Programme',
    university: 'HKU',
    faculty: 'Faculty of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 4, math: 4, ls: 3 },
    medianBest5: 31,
    minBest5: 27,
    maxBest5: 35,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/Physics required'
  },
  {
    id: 'hku-beng-data-systems',
    jupasCode: 'JS6315',
    name: 'Bachelor of Engineering in Data and Systems Engineering',
    university: 'HKU',
    faculty: 'Faculty of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/Physics required'
  },
  {
    id: 'hku-beng-mechanical',
    jupasCode: 'JS6339',
    name: 'Bachelor of Engineering in Mechanical Engineering',
    university: 'HKU',
    faculty: 'Faculty of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/Physics required'
  },
  {
    id: 'hku-beng-civil',
    jupasCode: 'JS6353',
    name: 'Bachelor of Engineering in Civil Engineering',
    university: 'HKU',
    faculty: 'Faculty of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/Physics required'
  },
  {
    id: 'hku-beng-msc-ai-engineering',
    jupasCode: 'JS6377',
    name: 'Bachelor of Engineering and Master of Science in Engineering in Artificial Intelligence in Engineering',
    university: 'HKU',
    faculty: 'Faculty of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 4, math: 4, ls: 3 },
    medianBest5: 30,
    minBest5: 26,
    maxBest5: 34,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/Physics required'
  },
  {
    id: 'hku-global-eng-business',
    jupasCode: 'JS6937',
    name: 'Global Engineering and Business Programme',
    university: 'HKU',
    faculty: 'Faculty of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy']
    },
    minRequirements: { chinese: 3, english: 4, math: 4, ls: 3 },
    medianBest5: 29,
    minBest5: 25,
    maxBest5: 33,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Physics required'
  },
  {
    id: 'hku-beng-computer-electrical-electronic',
    jupasCode: 'JS6987',
    name: 'Bachelor of Engineering in Computer Engineering / Electrical Engineering / Electronic Engineering',
    university: 'HKU',
    faculty: 'Faculty of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'combined_sci', 'phy']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28,
    subjectWeighting: {},
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Combined Science/Physics required'
  },

  // Faculty of Law
  {
    id: 'hku-ba-llb',
    jupasCode: 'JS6078',
    name: 'Bachelor of Arts and Bachelor of Laws',
    university: 'HKU',
    faculty: 'Faculty of Law',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 4, english: 5, math: 3, ls: 3 },
    medianBest5: 36,
    minBest5: 32,
    maxBest5: 40,
    subjectWeighting: {}
  },
  {
    id: 'hku-llb',
    jupasCode: 'JS6406',
    name: 'Bachelor of Laws',
    university: 'HKU',
    faculty: 'Faculty of Law',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 4, english: 5, math: 3, ls: 3 },
    medianBest5: 33,
    minBest5: 29,
    maxBest5: 37,
    subjectWeighting: {}
  },

  // Faculty of Science
  {
    id: 'hku-science-master-class',
    jupasCode: 'JS6688',
    name: 'Science Master Class',
    university: 'HKU',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 4, ls: 3 },
    medianBest5: 31,
    minBest5: 27,
    maxBest5: 35,
    subjectWeighting: { 'bio': 1.2, 'chem': 1.2, 'phy': 1.2, 'm1': 1.5, 'm2': 1.5 },
    additionalRequirements: 'Level 3+ in two of Biology/Chemistry/Physics/M1/M2 required'
  },
  {
    id: 'hku-bsc-llb',
    jupasCode: 'JS6858',
    name: 'Bachelor of Science and Bachelor of Laws',
    university: 'HKU',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy']
    },
    minRequirements: { chinese: 4, english: 5, math: 2, ls: 3 },
    medianBest5: 49,
    minBest5: 45,
    maxBest5: 53,
    subjectWeighting: { 'eng': 2, 'math': 2, 'm1': 2, 'm2': 2, 'bio': 2, 'chem': 2, 'phy': 2 },
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Physics required'
  },
  {
    id: 'hku-bsc',
    jupasCode: 'JS6901',
    name: 'Bachelor of Science',
    university: 'HKU',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy']
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 27,
    minBest5: 23,
    maxBest5: 31,
    subjectWeighting: { 'math': 1.5, 'bio': 1.5, 'chem': 1.5, 'phy': 1.5, 'm1': 1.5, 'm2': 1.5 },
    additionalRequirements: 'Level 3+ in Biology/Chemistry/Physics required'
  },

  // Li Ka Shing Faculty of Medicine
  {
    id: 'hku-basc-global-health-dev',
    jupasCode: 'JS6250',
    name: 'Bachelor of Arts and Sciences in Global Health and Development',
    university: 'HKU',
    faculty: 'Li Ka Shing Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 4, math: 2, ls: 3 },
    medianBest5: 27,
    minBest5: 23,
    maxBest5: 31,
    subjectWeighting: {}
  },
  {
    id: 'cuhk-law',
    jupasCode: 'JS4903',
    name: 'Bachelor of Laws',
    university: 'CUHK',
    faculty: 'Faculty of Law',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 4,
      english: 5,
      math: 3,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 33,
    subjectWeighting: {
      'eng': 2
    },
    calculationMethod: 'Chi + Eng + Math + Best 2 subjects (5 subjects total)',
    remarks: 'Chinese, English and Mathematics must be included in the score calculation',
    medianBest5: 33,
    minBest5: 29,
    maxBest5: 37
  },
  {
    id: 'cuhk-bba-ibba-jd',
    jupasCode: 'JS4264',
    name: 'BBA(IBBA) – JD Double Degree Programme',
    university: 'CUHK',
    faculty: 'Faculty of Law',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 4,
      english: 5,
      math: 3,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 34.5,
    subjectWeighting: {
      'eng': 2
    },
    calculationMethod: 'Chi + Eng + Math + Best 2 subjects (5 subjects total)',
    remarks: 'Chinese, English and Mathematics must be included in the score calculation',
    medianBest5: 34.5,
    minBest5: 30.5,
    maxBest5: 38.5
  },
  {
    id: 'cuhk-medicine-mbchb',
    jupasCode: 'JS4501',
    name: 'Medicine (MBChB) Programme',
    university: 'CUHK',
    faculty: 'Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['bio_or_chem', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 4,
      math: 3,
      biology: 3,
      chemistry: 3
    },
    expectedScore: 34,
    subjectWeighting: {},
    calculationMethod: 'Chi + Eng + Math + Best of Bio/Chem + Best 2 subjects (6 graded subjects)',
    remarks: 'Chemistry or Biology preferred. Taking a 3rd elective and/or M1/M2 strongly recommended. Does not consider M1/M2 as one elective subject.',
    specialScoring: 'Uses different grade point conversion (5**=7, 5*=6, 5=5, 4=4, 3=3, 2=2, 1=1)',
    medianBest5: 34,
    minBest5: 30,
    maxBest5: 38
  },
  {
    id: 'cuhk-medicine-gps',
    jupasCode: 'JS4502',
    name: 'Medicine (MBChB) Programme Global Physician-Leadership Stream (GPS)',
    university: 'CUHK',
    faculty: 'Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['bio_or_chem', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 4,
      math: 3,
      biology: 3,
      chemistry: 3
    },
    expectedScore: 40,
    subjectWeighting: {},
    calculationMethod: 'Chi + Eng + Math + Best of Bio/Chem + Best 2 subjects (6 graded subjects)',
    remarks: 'Additional requirement: Total score > 40 in 6 subjects with 5** in ANY 4 subjects. Chemistry or Biology preferred. Taking a 3rd elective and/or M1/M2 strongly recommended.',
    specialScoring: 'Uses different grade point conversion (5**=7, 5*=6, 5=5, 4=4, 3=3, 2=2, 1=1)',
    medianBest5: 40,
    minBest5: 36,
    maxBest5: 44
  },
  {
    id: 'cuhk-nursing',
    jupasCode: 'JS4513',
    name: 'Nursing',
    university: 'CUHK',
    faculty: 'Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 26,
    subjectWeighting: {
      'bio': 1.2,
      'chem': 1.2,
      'phy': 1.2
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'Biology, Chemistry, Physics preferred. Best one subject of Biology, Chemistry or Physics weighted at 1.2',
    medianBest5: 26,
    minBest5: 22,
    maxBest5: 30
  },
  {
    id: 'cuhk-pharmacy',
    jupasCode: 'JS4525',
    name: 'Pharmacy',
    university: 'CUHK',
    faculty: 'Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['chem_preferred', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      chemistry: 3,
      elective2: 3
    },
    expectedScore: 30.5,
    subjectWeighting: {},
    calculationMethod: 'Best 5 subjects',
    remarks: 'Chemistry at Level 3 or above preferred. From 2026 intake, Chemistry Level 3+ required',
    medianBest5: 30.5,
    minBest5: 26.5,
    maxBest5: 34.5
  },
  {
    id: 'cuhk-public-health',
    jupasCode: 'JS4537',
    name: 'Public Health',
    university: 'CUHK',
    faculty: 'Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 30,
    subjectWeighting: {
      'eng': 1.5,
      'math': 1.5,
      'bio': 1.5,
      'chem': 1.5,
      'econ': 1.5,
      'hmsc': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'Best one subject of Biology, Chemistry, Economics or Health Management & Social Care weighted at 1.5',
    medianBest5: 30,
    minBest5: 26,
    maxBest5: 34
  },
  {
    id: 'cuhk-chinese-medicine',
    jupasCode: 'JS4542',
    name: 'Chinese Medicine',
    university: 'CUHK',
    faculty: 'Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 27.5,
    subjectWeighting: {},
    calculationMethod: 'Best 5 subjects',
    remarks: 'Biology, Chemistry, Physics preferred for one of the two electives',
    medianBest5: 27.5,
    minBest5: 23.5,
    maxBest5: 31.5
  },
  {
    id: 'cuhk-biomedical-sciences',
    jupasCode: 'JS4550',
    name: 'Biomedical Sciences',
    university: 'CUHK',
    faculty: 'Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['bio_or_chem', 'category_a_only']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      biology: 3,
      chemistry: 3
    },
    expectedScore: 36,
    subjectWeighting: {
      'eng': 1.5,
      'bio': 1.5,
      'chem': 1.5
    },
    calculationMethod: 'Chi + Eng + Math + Best of Bio/Chem + Best 1 subject (5 subjects)',
    remarks: 'Category A subjects only. Chinese, English, Mathematics and Best of Biology/Chemistry must be included',
    medianBest5: 36,
    minBest5: 32,
    maxBest5: 40
  },
  {
    id: 'cuhk-biotechnology-entrepreneurship-healthcare',
    jupasCode: 'JS4725',
    name: 'Biotechnology, Entrepreneurship and Healthcare Management',
    university: 'CUHK',
    faculty: 'Faculty of Medicine',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['bio_or_chem', 'none']
    },
    minRequirements: {
      chinese: 3,
      english: 4,
      math: 3,
      biology: 3,
      chemistry: 3
    },
    expectedScore: 27,
    subjectWeighting: {},
    calculationMethod: 'Best 5 subjects',
    remarks: 'Biology or Chemistry required as elective',
    medianBest5: 27,
    minBest5: 23,
    maxBest5: 31
  },
  {
    id: 'cuhk-science-broad-based',
    jupasCode: 'JS4601',
    name: 'Science (broad-based)',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['m1_m2_bio_chem_phy', 'category_a_only']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 33,
    subjectWeighting: {
      'eng': 1.5,
      'math': 1.5,
      'm1': 2,
      'm2': 2,
      'bio': 2,
      'chem': 2,
      'phy': 2,
      'econ': 1.5,
      'geog': 1.5,
      'ict': 1.5,
      'tl_fst': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2, Biology, Chemistry, Physics preferred. Maximum of 3 subjects will be weighted heavier. Includes multiple specializations.',
    medianBest5: 33,
    minBest5: 29,
    maxBest5: 37
  },
  {
    id: 'cuhk-earth-environmental-sciences',
    jupasCode: 'JS4648',
    name: 'Earth and Environmental Sciences',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['m1_m2_bio_chem_phy_geog', 'category_a_only']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      elective1: 3,
      elective2: 4
    },
    expectedScore: 41,
    subjectWeighting: {
      'eng': 2,
      'math': 2,
      'm1': 2,
      'm2': 2,
      'bio': 2,
      'chem': 2,
      'phy': 2,
      'geog': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2, Biology, Chemistry, Physics, Geography options for electives',
    medianBest5: 41,
    minBest5: 37,
    maxBest5: 45
  },
  {
    id: 'cuhk-enrichment-mathematics',
    jupasCode: 'JS4682',
    name: 'Enrichment Mathematics',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['various_subjects', 'm1_m2_required']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 4,
      elective1: 3,
      m1_m2: 4
    },
    expectedScore: 46.5,
    subjectWeighting: {
      'm1': 3.5,
      'm2': 3.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2 required. Biology, Chemistry, Physics, Economics, Geography, ICT, Tech and Living (FST) options for electives',
    medianBest5: 46.5,
    minBest5: 42.5,
    maxBest5: 50.5
  },
  {
    id: 'cuhk-enrichment-theoretical-physics',
    jupasCode: 'JS4690',
    name: 'Enrichment Stream in Theoretical Physics',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['phy_required', 'various_m1_m2_preferred']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 4,
      physics: 4,
      elective2: 3
    },
    expectedScore: 43,
    subjectWeighting: {
      'math': 1.5,
      'm1': 1.5,
      'm2': 1.5,
      'phy': 2
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'Physics required. M1/M2 preferred for second elective',
    medianBest5: 43,
    minBest5: 39,
    maxBest5: 47
  },
  {
    id: 'cuhk-risk-management-science',
    jupasCode: 'JS4719',
    name: 'Risk Management Science',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'm1_m2_required']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      elective1: 3,
      m1_m2: 3
    },
    expectedScore: 40.5,
    subjectWeighting: {
      'math': 2,
      'm1': 2,
      'm2': 2
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2 required. Category A subjects only',
    medianBest5: 40.5,
    minBest5: 36.5,
    maxBest5: 44.5
  },
  {
    id: 'cuhk-learning-design-technology',
    jupasCode: 'JS4386',
    name: 'BSc in Learning Design and Technology',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 25.5,
    subjectWeighting: {
      'math': 1.5,
      'm1': 1.5,
      'm2': 1.5,
      'bio': 1.5,
      'chem': 1.5,
      'phy': 1.5,
      'dat': 1.5,
      'ict': 1.5,
      'bafs': 1.5,
      'econ': 1.5,
      'geog': 1.5,
      'tl_fst': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2, Biology, Chemistry, Physics, DAT, ICT, BAFS, Economics, Geography, Tech and Living (FST) preferred',
    medianBest5: 25.5,
    minBest5: 21.5,
    maxBest5: 29.5
  },
  {
    id: 'cuhk-computational-data-science',
    jupasCode: 'JS4416',
    name: 'Computational Data Science',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 4,
      math: 4,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 50.75,
    subjectWeighting: {
      'math': 2,
      'm1': 2,
      'm2': 2,
      'bio': 1.5,
      'chem': 1.5,
      'phy': 1.5,
      'econ': 1.5,
      'ict': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2, Biology, Chemistry, Physics, Economics, ICT preferred',
    medianBest5: 50.75,
    minBest5: 46.75,
    maxBest5: 54.75
  },
  {
    id: 'cuhk-materials-science-engineering',
    jupasCode: 'JS4470',
    name: 'Materials Science and Engineering',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['m1_m2_bio_chem_phy_ict', 'category_a_preferred']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 24,
    subjectWeighting: {
      'math': 1.25,
      'm1': 1.25,
      'm2': 1.25,
      'chem': 1.25,
      'phy': 1.25
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'New programme 2025-26. M1/M2, Biology, Chemistry, Physics, ICT preferred',
    medianBest5: 24,
    minBest5: 20,
    maxBest5: 28
  },
  {
    id: 'cuhk-mathematics-information-engineering',
    jupasCode: 'JS4733',
    name: 'Mathematics and Information Engineering',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any_preferred', 'm1_m2_required']
    },
    minRequirements: {
      chinese: 3,
      english: 4,
      math: 5,
      elective1: 4,
      m1_m2: 3
    },
    expectedScore: 46,
    subjectWeighting: {
      'math': 2,
      'm1': 2,
      'm2': 2,
      'bio': 1.5,
      'chem': 1.5,
      'phy': 1.5,
      'ict': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2 required. Biology, Chemistry, Physics, ICT preferred',
    medianBest5: 46,
    minBest5: 42,
    maxBest5: 50
  },
  {
    id: 'cuhk-aerospace-science-earth-informatics',
    jupasCode: 'JS4750',
    name: 'Aerospace Science and Earth Informatics & X Double Major Programme',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 35,
    subjectWeighting: {
      'math': 1.5,
      'm1': 2,
      'm2': 2,
      'phy': 2,
      'geog': 2
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2, Physics, Geography preferred',
    medianBest5: 35,
    minBest5: 31,
    maxBest5: 39
  },
  {
    id: 'cuhk-interdisciplinary-data-analytics',
    jupasCode: 'JS4760',
    name: 'Interdisciplinary Data Analytics & X Double Major Programme',
    university: 'CUHK',
    faculty: 'Faculty of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 31,
    subjectWeighting: {
      'math': 1.5,
      'm1': 2,
      'm2': 2,
      'econ': 1.5,
      'ict': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'M1/M2, Economics, ICT preferred. Taking M1/M2 strongly recommended',
    medianBest5: 31,
    minBest5: 27,
    maxBest5: 35
  },
  {
    id: 'cuhk-social-science-broad-based',
    jupasCode: 'JS4801',
    name: 'Social Science (broad-based)',
    university: 'CUHK',
    faculty: 'Faculty of Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 24.5,
    subjectWeighting: {
      'eng': 1.3
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'Includes multiple specializations: Architectural Studies, Economics, Data Science and Policy Studies, etc.',
    medianBest5: 24.5,
    minBest5: 20.5,
    maxBest5: 28.5
  },
  {
    id: 'cuhk-architectural-studies',
    jupasCode: 'JS4812',
    name: 'Architectural Studies',
    university: 'CUHK',
    faculty: 'Faculty of Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 26.5,
    subjectWeighting: {
      'eng': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'Design portfolio required. Submit directly to School of Architecture General Office',
    medianBest5: 26.5,
    minBest5: 22.5,
    maxBest5: 30.5
  },
  {
    id: 'cuhk-economics',
    jupasCode: 'JS4824',
    name: 'Economics',
    university: 'CUHK',
    faculty: 'Faculty of Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 3,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 28,
    subjectWeighting: {
      'math': 1.5,
      'm1': 1.5,
      'm2': 1.5,
      'chem': 1.5,
      'econ': 1.5,
      'phy': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'Best one subject of M1/M2, Chemistry, Economics or Physics weighted at 1.5',
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32
  },
  {
    id: 'cuhk-geography-resource-management',
    jupasCode: 'JS4836',
    name: 'Geography and Resource Management',
    university: 'CUHK',
    faculty: 'Faculty of Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 28,
    subjectWeighting: {
      'eng': 1.5,
      'geog': 1.5
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'English and Geography weighted at 1.5',
    medianBest5: 28,
    minBest5: 24,
    maxBest5: 32
  },
  {
    id: 'cuhk-urban-studies',
    jupasCode: 'JS4838',
    name: 'Urban Studies',
    university: 'CUHK',
    faculty: 'Faculty of Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 23.5,
    subjectWeighting: {},
    calculationMethod: 'Best 5 subjects',
    remarks: 'No special weighting',
    medianBest5: 23.5,
    minBest5: 19.5,
    maxBest5: 27.5
  },
  {
    id: 'cuhk-government-public-administration',
    jupasCode: 'JS4848',
    name: 'Government and Public Administration',
    university: 'CUHK',
    faculty: 'Faculty of Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 25,
    subjectWeighting: {
      'eng': 1.5,
      'chi': 1.25
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'English weighted at 1.5, Chinese weighted at 1.25',
    medianBest5: 25,
    minBest5: 21,
    maxBest5: 29
  },
  {
    id: 'cuhk-journalism-communication',
    jupasCode: 'JS4850',
    name: 'Journalism and Communication',
    university: 'CUHK',
    faculty: 'Faculty of Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 3,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 27.5,
    subjectWeighting: {
      'eng': 1.3,
      'chi': 1.3
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'English and Chinese weighted at 1.3',
    medianBest5: 27.5,
    minBest5: 23.5,
    maxBest5: 31.5
  },
  {
    id: 'cuhk-global-communication',
    jupasCode: 'JS4858',
    name: 'Global Communication',
    university: 'CUHK',
    faculty: 'Faculty of Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'cs'],
      electives: ['any', 'any']
    },
    minRequirements: {
      chinese: 3,
      english: 4,
      math: 2,
      elective1: 3,
      elective2: 3
    },
    expectedScore: 25.5,
    subjectWeighting: {
      'eng': 1.3
    },
    calculationMethod: 'Best 5 subjects',
    remarks: 'English weighted at 1.3',
    medianBest5: 25.5,
    minBest5: 21.5,
    maxBest5: 29.5
  },
  {
    id: 'hkust-international-research-enrichment',
    jupasCode: 'JS5101',
    name: 'International Research Enrichment',
    university: 'HKUST',
    faculty: 'School of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 36.75,
    minBest5: 34.50,
    maxBest5: null,
    subjectWeighting: { 'eng': 1, 'math': 1, 'bio': 1, 'chem': 1, 'phy': 1, 'm1': 1, 'm2': 1 },
    additionalRequirements: 'Best 1 other subject',
    preferredSubjects: ['science', 'm1', 'm2'],
    level: 5
  },
  {
    id: 'hkust-science-group-a',
    jupasCode: 'JS5102',
    name: 'Science (Group A)',
    university: 'HKUST',
    faculty: 'School of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 31.13,
    minBest5: 29.66,
    maxBest5: null,
    subjectWeighting: { 'eng': 1, 'math': 1, 'bio': 1, 'chem': 1, 'phy': 1, 'm1': 1, 'm2': 1 },
    additionalRequirements: 'Best from Biology/Chemistry/Physics/M1/M2, Best 2 other subjects',
    preferredSubjects: ['physics', 'm1', 'm2'],
    level: 4
  },
  {
    id: 'hkust-science-group-b',
    jupasCode: 'JS5103',
    name: 'Science (Group B)',
    university: 'HKUST',
    faculty: 'School of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem']
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 32.00,
    minBest5: 30.44,
    maxBest5: null,
    subjectWeighting: { 'eng': 1, 'math': 1, 'bio': 1, 'chem': 1 },
    additionalRequirements: 'Best from Biology/Chemistry/Physics/M1/M2, Best 2 other subjects',
    preferredSubjects: ['biology', 'chemistry'],
    level: 4
  },
  {
    id: 'hkust-science-group-a-ai',
    jupasCode: 'JS5181',
    name: 'Science (Group A) with an Extended Major in Artificial Intelligence',
    university: 'HKUST',
    faculty: 'School of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 37.38,
    minBest5: 34.00,
    maxBest5: null,
    subjectWeighting: { 'eng': 1, 'math': 1, 'bio': 1, 'chem': 1, 'phy': 1, 'm1': 1, 'm2': 1 },
    additionalRequirements: 'Best from Biology/Chemistry/Physics/M1/M2, Best 2 other subjects',
    preferredSubjects: ['physics', 'm1', 'm2'],
    level: 5
  },
  {
    id: 'hkust-biomedical-health-sciences',
    jupasCode: 'JS5114',
    name: 'BSc in Biomedical and Health Sciences',
    university: 'HKUST',
    faculty: 'School of Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: null,
    minBest5: null,
    maxBest5: null,
    subjectWeighting: { 'eng': 1, 'math': 1, 'bio': 1, 'chem': 1, 'phy': 1, 'm1': 1, 'm2': 1 },
    additionalRequirements: 'Best from Biology/Chemistry/Physics/M1/M2, Best 2 other subjects',
    note: 'NEW program'
  },

  // School of Engineering
  {
    id: 'hkust-engineering',
    jupasCode: 'JS5200',
    name: 'Engineering',
    university: 'HKUST',
    faculty: 'School of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'combined_sci', 'integrated_sci', 'ict', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 39.78,
    minBest5: 38.21,
    maxBest5: null,
    subjectWeighting: { 'eng': 1, 'math': 1, 'bio': 1, 'chem': 1, 'phy': 1, 'combined_sci': 1, 'integrated_sci': 1, 'ict': 1, 'm1': 1, 'm2': 1 },
    additionalRequirements: 'One of: Biology/Chemistry/Physics/Information and Communication Technology. Best 2 other subjects',
    preferredSubjects: ['science', 'ict', 'm1', 'm2'],
    level: 5
  },
  {
    id: 'hkust-engineering-ai',
    jupasCode: 'JS5282',
    name: 'Engineering with an Extended Major in Artificial Intelligence',
    university: 'HKUST',
    faculty: 'School of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'combined_sci', 'integrated_sci', 'ict', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 48.45,
    minBest5: 45.70,
    maxBest5: null,
    subjectWeighting: { 'eng': 1, 'math': 1, 'bio': 1, 'chem': 1, 'phy': 1, 'combined_sci': 1, 'integrated_sci': 1, 'ict': 1, 'm1': 1, 'm2': 1 },
    additionalRequirements: 'One of: Biology/Chemistry/Physics/Information and Communication Technology. Best 2 other subjects',
    preferredSubjects: ['science', 'ict', 'm1', 'm2'],
    level: 5
  },
  {
    id: 'hkust-beng-computer-engineering',
    jupasCode: 'JS5212',
    name: 'BEng in Computer Engineering',
    university: 'HKUST',
    faculty: 'School of Engineering',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'combined_sci', 'integrated_sci', 'ict', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: null,
    minBest5: null,
    maxBest5: null,
    subjectWeighting: { 'eng': 1, 'math': 1, 'bio': 1, 'chem': 1, 'phy': 1, 'combined_sci': 1, 'integrated_sci': 1, 'ict': 1, 'm1': 1, 'm2': 1 },
    additionalRequirements: 'One of: Biology/Chemistry/Physics/Information and Communication Technology. Best 2 other subjects',
    note: 'NEW program'
  },

  // School of Humanities and Social Science
  {
    id: 'hkust-global-china-studies',
    jupasCode: 'JS5411',
    name: 'BSc in Global China Studies',
    university: 'HKUST',
    faculty: 'School of Humanities and Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 2, ls: 3 },
    medianBest5: 28.00,
    minBest5: 27.50,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'chi': 1.5 },
    additionalRequirements: 'Best 3 other subjects',
    preferredSubjects: ['chinese'],
    level: 4
  },
  {
    id: 'hkust-quantitative-social-analysis',
    jupasCode: 'JS5412',
    name: 'BSc in Quantitative Social Analysis',
    university: 'HKUST',
    faculty: 'School of Humanities and Social Science',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 30.88,
    minBest5: 30.00,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects',
    preferredSubjects: ['math', 'm1', 'm2'],
    level: 5
  },

  // Academy of Interdisciplinary Studies
  {
    id: 'hkust-integrative-systems-design',
    jupasCode: 'JS5711',
    name: 'BSc in Integrative Systems and Design',
    university: 'HKUST',
    faculty: 'Academy of Interdisciplinary Studies',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'combined_sci', 'dat', 'integrated_sci', 'ict', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 39.28,
    minBest5: 33.24,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'One of: Biology/Chemistry/Physics/Combined Science/Design and Applied Technology/Information and Communication Technology. Best 2 other subjects',
    preferredSubjects: ['science', 'ict', 'dat', 'm1', 'm2'],
    level: 5
  },
  {
    id: 'hkust-environmental-management-technology',
    jupasCode: 'JS5812',
    name: 'BSc in Environmental Management and Technology',
    university: 'HKUST',
    faculty: 'Academy of Interdisciplinary Studies',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 4, english: 3, math: 3, ls: 3 },
    medianBest5: 31.40,
    minBest5: 30.55,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects',
    level: 5
  },
  {
    id: 'hkust-beng-bba-dual-degree',
    jupasCode: 'JS5901',
    name: 'BEng/BSc & BBA Dual Degree Program in Technology and Management',
    university: 'HKUST',
    faculty: 'Academy of Interdisciplinary Studies',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem', 'phy', 'combined_sci', 'integrated_sci', 'ict', 'm1', 'm2']
    },
    minRequirements: { chinese: 4, english: 3, math: 3, ls: 3 },
    medianBest5: 61.66,
    minBest5: 58.55,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'One of: Biology/Chemistry/Physics/Combined Science/Information and Communication Technology. Best 2 other subjects',
    preferredSubjects: ['science', 'ict', 'm1', 'm2'],
    level: 5
  },

  // Joint Programs
  {
    id: 'hkust-biotechnology-business',
    jupasCode: 'JS5B11',
    name: 'BSc in Biotechnology and Business',
    university: 'HKUST',
    faculty: 'Joint Programs',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['bio', 'chem']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 39.75,
    minBest5: 38.91,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'One of: Biology/Chemistry. Best of Biology/Chemistry x 1.5. Best 2 other subjects',
    preferredSubjects: ['biology', 'chemistry'],
    level: 5
  },
  {
    id: 'hkust-mathematics-economics',
    jupasCode: 'JS5B13',
    name: 'BSc in Mathematics and Economics',
    university: 'HKUST',
    faculty: 'Joint Programs',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: ['econ', 'm1', 'm2']
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 42.60,
    minBest5: 39.20,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'One of: Biology/Chemistry/Physics/Economics/M1/M2. Best 2 other subjects',
    preferredSubjects: ['science', 'economics', 'm1', 'm2'],
    level: 5
  },
  {
    id: 'hkust-risk-management-business-intelligence',
    jupasCode: 'JS5B14',
    name: 'BSc in Risk Management and Business Intelligence',
    university: 'HKUST',
    faculty: 'Joint Programs',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 45.00,
    minBest5: 42.88,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects',
    level: 5
  },
  {
    id: 'hkust-sustainable-green-finance',
    jupasCode: 'JS5B22',
    name: 'BSc in Sustainable and Green Finance',
    university: 'HKUST',
    faculty: 'Joint Programs',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 38.63,
    minBest5: 37.13,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best of 3 other subjects OR Best of Chemistry/Economics/Physics/M1/M2 x 1.5. Best 2 other subjects',
    level: 5
  },

  // School of Business and Management
  {
    id: 'hkust-business-management',
    jupasCode: 'JS5300',
    name: 'Business & Management',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 32.50,
    minBest5: 32.05,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects'
  },
  {
    id: 'hkust-bba-economics',
    jupasCode: 'JS5311',
    name: 'BBA in Economics',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 35.05,
    minBest5: 34.14,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects'
  },
  {
    id: 'hkust-bba-finance',
    jupasCode: 'JS5312',
    name: 'BBA in Finance',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 43.50,
    minBest5: 42.75,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best of 3 other subjects OR Best of Chemistry/Economics/Physics/M1/M2 x 1.5. Best 2 other subjects'
  },
  {
    id: 'hkust-bba-global-business',
    jupasCode: 'JS5313',
    name: 'BBA in Global Business',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 53.44,
    minBest5: 50.06,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects'
  },
  {
    id: 'hkust-bba-information-systems',
    jupasCode: 'JS5314',
    name: 'BBA in Information Systems',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 33.40,
    minBest5: 34.00,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects'
  },
  {
    id: 'hkust-bba-management',
    jupasCode: 'JS5315',
    name: 'BBA in Management',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 33.55,
    minBest5: 32.04,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects'
  },
  {
    id: 'hkust-bba-marketing',
    jupasCode: 'JS5316',
    name: 'BBA in Marketing',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 32.50,
    minBest5: 32.05,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects'
  },
  {
    id: 'hkust-bba-operations-management',
    jupasCode: 'JS5317',
    name: 'BBA in Operations Management',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 32.48,
    minBest5: 31.30,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects'
  },
  {
    id: 'hkust-bba-professional-accounting',
    jupasCode: 'JS5318',
    name: 'BBA in Professional Accounting',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 32.40,
    minBest5: 31.93,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best 3 other subjects'
  },
  {
    id: 'hkust-bsc-economics-finance',
    jupasCode: 'JS5331',
    name: 'BSc in Economics and Finance',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 50.06,
    minBest5: 48.56,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best of 3 other subjects OR Best of Chemistry/Economics/Physics/M1/M2 x 1.5. Best 2 other subjects'
  },
  {
    id: 'hkust-bsc-quantitative-finance',
    jupasCode: 'JS5332',
    name: 'BSc in Quantitative Finance',
    university: 'HKUST',
    faculty: 'School of Business and Management',
    requiredSubjects: {
      core: ['chi', 'eng', 'math', 'ls'],
      electives: []
    },
    minRequirements: { chinese: 3, english: 3, math: 3, ls: 3 },
    medianBest5: 60.94,
    minBest5: 59.11,
    maxBest5: null,
    subjectWeighting: { 'eng': 2, 'math': 2 },
    additionalRequirements: 'Best of 3 other subjects OR Best of Chemistry/Economics/Physics/M1/M2 x 1.5. Best 2 other subjects'
    }
];

export const getProgramById = (id: string): Program | undefined => {
  return programs.find(program => program.id === id);
};

export const getProgramsByUniversity = (university: string): Program[] => {
  return programs.filter(program => program.university === university);
};

export const searchPrograms = (query: string): Program[] => {
  const lowerQuery = query.toLowerCase();
  return programs.filter(program => 
    program.name.toLowerCase().includes(lowerQuery) ||
    program.jupasCode.toLowerCase().includes(lowerQuery) ||
    program.university.toLowerCase().includes(lowerQuery) ||
    program.faculty.toLowerCase().includes(lowerQuery)
  );
};