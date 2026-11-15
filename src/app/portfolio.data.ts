export interface NavLink {
  label: string;
  href: string;
}

export interface Profile {
  greeting: string;
  name: string;
  role: string;
  cvUrl: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface Education {
  title: string;
  detail: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Experienced';
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  image?: string;
  repoUrl: string;
  demoUrl: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export const portfolio = {
  logo: 'NV',
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],
  profile: {
    greeting: "Hello, I'm",
    name: 'Nicole Valledor',
    role: 'Junior Web Developer',
    cvUrl: 'assets/nicolevalledor-resume.pdf',
    linkedinUrl: 'https://www.linkedin.com/in/nicole-angelique-valledor/',
    githubUrl: 'https://github.com/nicolevalledor',
  } satisfies Profile,
  about:
    'Computer Engineering graduate with over a year and a half of experience as a junior web developer in a provincial government ICT office. I build and maintain websites, develop JasperSoft Reports, and handle system maintenance for the Human Resource Information System (HRIS) of the HR Management Office. I am proficient in HTML, CSS, TypeScript, PHP, and React.js, with working knowledge of MySQL and PostgreSQL, and I take a reliable, detail-oriented approach to systems support.',
  education: [
    {
      title: 'Bachelor of Science in Computer Engineering',
      detail: 'Holy Trinity University · SY 2019–2022',
    },
    {
      title: 'Secondary',
      detail: 'Holy Trinity University · SY 2013–2019',
    },
    {
      title: 'Primary',
      detail: 'Casian Elementary School, Taytay, Palawan · SY 2009–2013. Lacaren Elementary School, Magsaysay, Palawan · SY 2007–2009',
    },
  ] satisfies Education[],
  experience: [
    {
      role: 'Digital Platform Support Aide IV',
      company: 'Provincial Information and Communications Technology Program (PICTP)',
      period: 'July 2025 – June 2026',
      highlights: [
        'Built and maintained provincial government websites using HTML, CSS, TypeScript, PHP, and React.js.',
        'Designed and developed JasperSoft Reports for various offices\' reporting needs.',
        'Handled ongoing maintenance of the HRIS for the HR Management Office.',
        'Wrote and ran MySQL and PostgreSQL queries for reporting, data checks, and system maintenance.',
        'Coordinated with the HR Management Office and other departments to resolve system issues.',
      ],
    },
    {
      role: 'Computer Operator II',
      company: 'Provincial Information and Communications Technology Program (PICTP)',
      period: 'October 2024 – June 2025',
      highlights: [
        'Assisted in the design, development, and upkeep of provincial websites as a junior web developer.',
        'Built and maintained JasperSoft Report templates for internal reporting.',
        'Performed maintenance and troubleshooting for the HRIS platform.',
        'Ran MySQL and PostgreSQL queries to support data processing and system reporting.',
      ],
    },
    {
      role: 'College Internship',
      company: 'Civil Aviation Authority of the Philippines (CAAP)',
      period: 'April 2022 – June 2022',
      highlights: [
        'Performed data entry, file sorting, computer troubleshooting, and other administrative tasks.',
      ],
    },
    {
      role: 'Senior High School Work Immersion',
      company: 'Puerto Princesa City Water District, Sta. Monica',
      period: 'December 2018',
      highlights: [
        'Performed data entry and other administrative tasks in an office setting.',
      ],
    },
  ] satisfies Experience[],
  skillGroups: [
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Experienced' },
        { name: 'TypeScript', level: 'Experienced' },
        { name: 'PHP', level: 'Experienced' },
        { name: 'React.js', level: 'Experienced' },
      ],
    },
    {
      title: 'Data & Reporting',
      skills: [
        { name: 'JasperSoft Reports', level: 'Experienced' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'HRIS Maintenance', level: 'Experienced' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Visual Studio Code', level: 'Experienced' },
        { name: 'Microsoft Office', level: 'Experienced' },
      ],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: 'OurTable',
      image: 'assets/ourtable-poster.png',
      repoUrl: 'https://github.com/nicolevalledor/OurTable_mp1.git',
      demoUrl: 'https://vlldr.github.io/OurTable_mp1/',
    },
    {
      title: 'DMOVIES',
      image: 'assets/dmovies-poster.png',
      repoUrl: 'https://github.com/nicolevalledor/mp2-react-dmovies-app.git',
      demoUrl: 'https://mp2-dmovies.vercel.app/',
    },
    {
      title: 'The Ordinary',
      image: 'assets/the-ordinary-poster.png',
      repoUrl: 'https://github.com/eunicepague/Capstone-Skincare.git',
      demoUrl: 'https://the-ordinary.vercel.app/',
    },
  ] satisfies Project[],
  contact: [
    {
      label: 'Email',
      value: 'valledorn01@gmail.com',
      href: 'mailto:valledorn01@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'nicole-angelique-valledor',
      href: 'https://www.linkedin.com/in/nicole-angelique-valledor/',
    },
  ] satisfies ContactLink[],
};
