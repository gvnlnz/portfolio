import type { Locale } from '../i18n/ui';

type L<T> = Record<Locale, T>;

export const idFields: L<[string, string][]> = {
  it: [
    ['uid', 'gvnlnz'],
    ['ruolo', 'full stack developer'],
    ['laurea', 'informatica · unife'],
    ['lingue', 'it madrelingua · en b2'],
    ['stato', '● aperto a stage']
  ],
  en: [
    ['uid', 'gvnlnz'],
    ['role', 'full stack developer'],
    ['degree', 'computer science · unife'],
    ['languages', 'it native · en b2'],
    ['status', '● open to internships']
  ]
};

export const statusStrip: L<[string, string][]> = {
  it: [
    ['stato', 'disponibile per stage e freelance'],
    ['base', 'Ferrara, Italia'],
    ['fuso', 'CET · UTC+01:00'],
    ['ora locale', '']
  ],
  en: [
    ['status', 'open to internships and freelance'],
    ['base', 'Ferrara, Italy'],
    ['tz', 'CET · UTC+01:00'],
    ['local time', '']
  ]
};

export const phrases: L<string[]> = {
  it: ['Sviluppatore full stack', 'Laravel, Node.js, MySQL, Docker', 'Cybersecurity: web e network', 'Integrazione LLM in produzione'],
  en: ['Full-stack developer', 'Laravel, Node.js, MySQL, Docker', 'Cybersecurity: web and network', 'LLM integration in production']
};

export const aboutParagraphs: L<string[]> = {
  it: [
    'Laurea triennale in Informatica all\u2019Università di Ferrara, dopo un diploma in Sistemi Informativi Aziendali. Da settembre 2025 lavoro in Università come full stack developer su un e-commerce di metalli preziosi: micro servizi Laravel, TailwindCSS, MySQL e Docker, con Ollama per le parti generative.',
    'Nel 2026 ho completato CyberChallenge.IT: web security, network security e sistemi Linux, con oltre 30 challenge risolte usando Burp Suite, Wireshark e exploit scritti in Python. Da qui la scelta di proseguire con la magistrale in Cybersecurity.',
    'Quando scrivo codice per conto mio tendo a scendere di livello: un clone di Redis, un compressore di file, le funzioni della libc rifatte da zero. Tutto in C, per vedere come funzionano le cose sotto le astrazioni che uso ogni giorno.'
  ],
  en: [
    'A BSc in Computer Science at the University of Ferrara, after a diploma in Business Information Systems. Since September 2025 I have worked at the University as a full-stack developer on a precious-metals e-commerce: Laravel microservices, TailwindCSS, MySQL and Docker, with Ollama behind the generative parts.',
    'In 2026 I completed CyberChallenge.IT: web security, network security and Linux systems, with over 30 challenges solved using Burp Suite, Wireshark and exploits written in Python. That is why I am continuing with an MSc in Cybersecurity.',
    'When I write code on my own time I tend to go down a level: a Redis clone, a file compressor, libc functions rebuilt from scratch. All in C, to see how things work beneath the abstractions I use every day.'
  ]
};

export const principles: L<[string, string, string][]> = {
  it: [
    ['01', 'Dal database al frontend', 'Mi interessa il sistema completo: schema, API, interfaccia, deploy. Non un singolo strato.'],
    ['02', 'Un livello più sotto', 'Scrivo C nel tempo libero — Redis, compressione, libc — per capire cosa c\u2019è sotto il framework.'],
    ['03', 'Pensare come un attaccante', 'Le stesse applicazioni che costruisco le testo con Burp Suite e Wireshark. Trenta challenge in avanti.']
  ],
  en: [
    ['01', 'From database to frontend', 'I care about the whole system: schema, API, interface, deploy. Not a single layer.'],
    ['02', 'One level down', 'I write C in my spare time — Redis, compression, libc — to understand what sits under the framework.'],
    ['03', 'Think like an attacker', 'I test the same applications I build with Burp Suite and Wireshark. Thirty challenges in.']
  ]
};

export const stackRoles: L<[string, string, string][]> = {
  it: [
    ['build', 'Costruire', 'Laravel, Node.js, React, TypeScript, MySQL'],
    ['ship', 'Mettere in produzione', 'Docker, Podman, Linux, Bash, SSH, Git'],
    ['break', 'Rompere', 'Burp Suite, Wireshark, exploit in Python'],
    ['learn', 'Sperimentare', 'PyTorch, scikit-learn, NumPy, Ollama']
  ],
  en: [
    ['build', 'Build', 'Laravel, Node.js, React, TypeScript, MySQL'],
    ['ship', 'Ship', 'Docker, Podman, Linux, Bash, SSH, Git'],
    ['break', 'Break', 'Burp Suite, Wireshark, Python exploits'],
    ['learn', 'Experiment', 'PyTorch, scikit-learn, NumPy, Ollama']
  ]
};

export const yamlLines: { text: string; key?: boolean }[] = [
  { text: 'stack:', key: true },
  { text: '  frontend:  [javascript, typescript, react, tailwind]' },
  { text: '  backend:   [php, laravel, node, python, java]' },
  { text: '  data:      [mysql, workbench]' },
  { text: '  devops:    [docker, podman, git, linux, bash, ssh]' },
  { text: '  security:  [burp-suite, wireshark, web-sec, network-sec]' },
  { text: '  ml:        [numpy, pytorch, scikit-learn, matplotlib]' },
  { text: ' ' },
  { text: 'lang:', key: true },
  { text: '  italiano:  madrelingua' },
  { text: '  english:   b2' }
];

export type TimelineEntry = {
  tag: string;
  org: string;
  role: string;
  period: string;
  body: string;
  tags: string[];
};

export const timeline: L<TimelineEntry[]> = {
  it: [
    {
      tag: 'HEAD · 2025.09',
      org: 'Università degli Studi di Ferrara',
      role: 'Full stack developer & AI integration',
      period: 'Set 2025 → Apr 2026',
      body: 'Sviluppo di un e-commerce di metalli preziosi. Sistema diviso in micro servizi Laravel con TailwindCSS, MySQL e Docker, e Ollama per la generazione automatica dei contenuti.',
      tags: ['Laravel', 'Docker', 'MySQL', 'Ollama', 'TailwindCSS']
    },
    {
      tag: '2026.02',
      org: 'CyberChallenge.IT',
      role: 'Percorso formativo · Università di Ferrara',
      period: 'Feb 2026 → Mag 2026',
      body: 'Formazione intensiva su web security, network security e sistemi Linux. Oltre 30 challenge risolte; exploit in Python per SQL injection e XSS.',
      tags: ['Burp Suite', 'Wireshark', 'Python', 'Linux']
    },
    { tag: '2023.10', org: 'Università degli Studi di Ferrara', role: 'Laurea Triennale in Informatica', period: 'Ott 2023 → 2026', body: '', tags: [] },
    { tag: '2018.09', org: 'ITE V. Bachelet', role: 'Diploma in Sistemi Informativi Aziendali', period: 'Set 2018 → Giu 2023', body: '', tags: [] }
  ],
  en: [
    {
      tag: 'HEAD · 2025.09',
      org: 'University of Ferrara',
      role: 'Full stack developer & AI integration',
      period: 'Sep 2025 → Apr 2026',
      body: 'Building a precious-metals e-commerce. The system is split into Laravel microservices with TailwindCSS, MySQL and Docker, with Ollama generating content automatically.',
      tags: ['Laravel', 'Docker', 'MySQL', 'Ollama', 'TailwindCSS']
    },
    {
      tag: '2026.02',
      org: 'CyberChallenge.IT',
      role: 'Training programme · University of Ferrara',
      period: 'Feb 2026 → May 2026',
      body: 'Intensive training on web security, network security and Linux systems. Over 30 challenges solved; Python exploits for SQL injection and XSS.',
      tags: ['Burp Suite', 'Wireshark', 'Python', 'Linux']
    },
    { tag: '2023.10', org: 'University of Ferrara', role: 'BSc in Computer Science', period: 'Oct 2023 → 2026', body: '', tags: [] },
    { tag: '2018.09', org: 'ITE V. Bachelet', role: 'Diploma in Business Information Systems', period: 'Sep 2018 → Jun 2023', body: '', tags: [] }
  ]
};

export const bootLines: L<string[]> = {
  it: [
    '[ ok ]  profilo ............ lorenzo gaviani',
    '[ ok ]  progetti/ .......... 5 file',
    '[ ok ]  stack.yaml ......... 4 ruoli',
    '[ ok ]  security ........... burp, wireshark',
    '[ ok ]  pronto'
  ],
  en: [
    '[ ok ]  profile .......... lorenzo gaviani',
    '[ ok ]  projects/ ........ 5 files',
    '[ ok ]  stack.yaml ....... 4 roles',
    '[ ok ]  security ......... burp, wireshark',
    '[ ok ]  ready'
  ]
};
