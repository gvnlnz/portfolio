export const site = {
  name: 'Lorenzo Gaviani',
  initials: 'LG',
  email: 'lorenzogaviani@gmail.com',
  github: 'https://github.com/gvnlnz',
  githubLabel: 'github.com/gvnlnz',
  // TODO: replace with the real profile URL.
  linkedin: 'https://www.linkedin.com/in/lorenzo-gaviani-88839a286/',
  linkedinLabel: 'in/lorenzo-gaviani',
  cv: '/assets/CV_Gaviani_Lorenzo.pdf',
  cvLabel: 'CV_Gaviani_Lorenzo.pdf',
  photo: '/assets/lorenzo.jpg',
  city: 'Ferrara',
  timezone: 'Europe/Rome',
  year: 2026
} as const;

export const sectionIds = ['about', 'projects', 'stack', 'path', 'contact'] as const;
export type SectionId = (typeof sectionIds)[number];
