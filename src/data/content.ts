import type { Locale } from '../i18n/ui';

type L<T> = Record<Locale, T>;

export const idFields: L<[string, string][]> = {
  it: [
    ['uid', 'gvnlnz'],
    ['ruolo', 'full stack developer'],
    ['laurea', 'informatica · unife'],
    ['lingue', 'it madrelingua · en b2'],
    ['stato', 'aperto a stage']
  ],
  en: [
    ['uid', 'gvnlnz'],
    ['role', 'full stack developer'],
    ['degree', 'computer science · unife'],
    ['languages', 'it native · en b2'],
    ['status', 'open to internships']
  ]
};

export const statusStrip: L<[string, string][]> = {
  it: [
    ['stato', 'disponibile per stage e freelance'],
    ['base', 'Ferrara, Italia'],
    ['fuso', 'CET - UTC+01:00'],
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
  it: ['Sviluppatore full stack', 'Laravel, React.js, Python, MySQL, Docker', 'Cybersecurity: web e network', 'Integrazione LLM in produzione'],
  en: ['Full-stack developer', 'Laravel, React.js, Python, MySQL, Docker', 'Cybersecurity: web and network', 'LLM integration in production']
};

export const aboutParagraphs: L<string[]> = {
  it: [
    'Laurea triennale in Informatica all\u2019Università di Ferrara, dopo un diploma in sistemi informativi aziendali. Da settembre 2025 opero come full stack developer su un e-commerce di metalli preziosi: microservizi Laravel orchestrati con Docker, TailwindCSS, MySQL e Ollama per esecuzione locale di LLM.',
    'Nel 2026 ho completato CyberChallenge.IT: web security, network security e sistemi Linux, con oltre 60 challenge risolte usando Burp Suite, Wireshark e exploit scritti in Python. Da qui la scelta di proseguire con la magistrale in Cybersecurity.',
    'Quando scrivo codice per conto mio tendo a scendere di livello: un\u2019implementazione del protocollo RESP utilizzato da Redis per l\u2019encoding dei messaggi, un compressore di file, ricostruzione della libreria standard C da zero. Tutto per vedere come funzionano le cose sotto le astrazioni che uso ogni giorno.'
  ],
  en: [
    'A BSc in Computer Science at the University of Ferrara, after a diploma in business information systems. Since September 2025 I have been working as a full-stack developer for a precious-metals e-commerce: Laravel microservices  orchestrated by Docker, TailwindCSS, MySQL and Ollama to execute LLMs in a local environment.',
    'In 2026 I completed CyberChallenge.IT: web security, network security and Linux systems, with over 60 challenges solved using Burp Suite, Wireshark and exploits written in Python. That is why I am continuing with an MSc in Cybersecurity.',
    'When I write code on my own time I tend to go down a level: a RESP protocol implementation (Redis encoding), a file compressor, libc functions rebuilt from scratch. All in C, to see how things work beneath the abstractions I use every day.'
  ]
};

export const principles: L<[string, string, string][]> = {
  it: [
    ['01', 'Dal database al frontend', 'Mi interessa il sistema completo: schema, API, interfaccia, deploy.'],
    ['02', 'Un livello più sotto', 'Scrivo C nel tempo libero: Redis, compressione, libc. Per capire cosa c\u2019è sotto il framework.'],
    ['03', 'Cerco di pensare come un attaccante', 'Le stesse applicazioni che costruisco le testo con strumenti che verificano la loro sicurezza.']
  ],
  en: [
    ['01', 'From database to frontend', 'I care about the whole system: schema, API, interface, deploy. Not a single layer.'],
    ['02', 'One level down', 'I write C in my spare time: Redis, compression, libc. To understand what sits under the framework.'],
    ['03', 'I like to think like an attacker', 'I test the same applications I build with tools that verify the security of those.']
  ]
};

export const stackRoles: L<[string, string, string][]> = {
  it: [
    ['build', 'Costruire', 'Laravel, React.js, Python, MySQL, C'],
    ['ship', 'Mettere in produzione', 'Docker, Podman, Linux, Bash, SSH, Git'],
    ['test', 'Testare', 'Burp Suite, Wireshark, exploits Python, LLMs'],
    ['learn', 'Sperimentare', 'CTFs, PyTorch, scikit-learn, NumPy, Ollama']
  ],
  en: [
    ['build', 'Build', 'Laravel, React.js, Python, MySQL, C'],
    ['ship', 'Ship', 'Docker, Podman, Linux, Bash, SSH, Git'],
    ['test', 'Testing', 'Burp Suite, Wireshark, Python exploits, LLMs'],
    ['learn', 'Experiment', 'CTFs, PyTorch, scikit-learn, NumPy, Ollama']
  ]
};

export const yamlLines: { text: string; key?: boolean }[] = [
  { text: 'stack:', key: true },
  { text: '  frontend:  [javascript, typescript, react, blade, CSS3, bootstrap, tailwind]' },
  { text: '  backend:   [php, laravel, node, python, java, C]' },
  { text: '  data:      [mysql, JSON, sqlite]' },
  { text: '  devops:    [docker, podman, git, linux, bash, ssh, ftp]' },
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
      tag: 'HEAD · now',
      org: 'Università degli Studi di Ferrara',
      role: 'Full stack developer & AI integration',
      period: 'Set 2025 → oggi',
      body: 'Sviluppo di un e-commerce di metalli preziosi. Sistema diviso in micro servizi Laravel con TailwindCSS, MySQL e Docker, e Ollama per la generazione automatica dei contenuti.',
      tags: ['Laravel', 'Docker', 'MySQL', 'Ollama', 'TailwindCSS']
    },
	{
		tag: '2026.07',
		org: 'Università degli Studi di Ferrara',
		role: 'Laurea Triennale in Informatica',
		period: 'Ott 2023 → 2026',
		body: '',
		tags: ['OOP', 'LLMs', 'AI','Linux/UNIX', 'Java', ' Python', 'Machine Learning', 'SysAdmin', 'Web', 'Databases',]
	},
    {
      tag: '2026.05',
      org: 'CyberChallenge.IT',
      role: 'Percorso formativo · Università di Ferrara',
      period: 'Feb 2026 → Mag 2026',
      body: 'Formazione intensiva su web security, network security e sistemi Linux. Oltre 30 challenge risolte; exploit in Python per SQL injection e XSS.',
      tags: ['Burp Suite', 'Wireshark', 'Python', 'Linux']
    },
	{
		tag: '2023.06',
		org: 'ITE V. Bachelet',
		role: 'Diploma in sistemi informativi aziendali',
		period: 'Set 2018 → Giu 2023',
		body: '',
		tags: ['Contabilità aziendale', 'PHP', 'C++', 'Microsoft Access', 'Excel']
	}
  ],
  en: [
    {
      tag: 'HEAD · now',
      org: 'University of Ferrara',
      role: 'Full stack developer & AI integration',
      period: 'Sep 2025 → today',
      body: 'Building a precious-metals e-commerce. The system is split into Laravel microservices with TailwindCSS, MySQL and Docker, with Ollama generating content automatically.',
      tags: ['Laravel', 'Docker', 'MySQL', 'Ollama', 'TailwindCSS']
    },
	{
	  tag: '2026.07',
	  org: 'University of Ferrara',
	  role: 'BSc in Computer Science',
	  period: 'Oct 2023 → 2026',
	  body: '',
	  tags: ['OOP', 'LLMs', 'AI','Linux/UNIX', 'Java', ' Python', 'Machine Learning', 'SysAdmin', 'Web', 'Databases',]
	},
    {
      tag: '2026.05',
      org: 'CyberChallenge.IT',
      role: 'Training programme · University of Ferrara',
      period: 'Feb 2026 → May 2026',
      body: 'Intensive training on web security, network security and Linux systems. Over 30 challenges solved; Python exploits for SQL injection and XSS.',
      tags: ['Burp Suite', 'Wireshark', 'Python', 'Linux']
    },
	{
	  tag: '2023.06',
	  org: 'ITE V. Bachelet',
	  role: 'Diploma in Business Information Systems',
	  period: 'Sep 2018 → Jun 2023',
	  body: '',
	  tags: ['Corporate accounting', 'PHP', 'C++', 'Microsoft Access', 'Excel']
	}
  ]
};

export const bootLines: L<string[]> = {
  it: [
    '[ 15% ]   profilo ............ lorenzo gaviani',
    '[ 35% ]   progetti/ .......... 5 file',
    '[ 50% ]   stack.yaml ......... 4 ruoli',
    '[ 75% ]   security ........... burp, wireshark',
    '[ 100% ]  benvenuto'
  ],
  en: [
    '[ 15% ]   profile .......... lorenzo gaviani',
    '[ 35% ]   projects/ ........ 5 files',
    '[ 50% ]   stack.yaml ....... 4 roles',
    '[ 75% ]   security ......... burp, wireshark',
    '[ 100% ]  welcome'
  ]
};
