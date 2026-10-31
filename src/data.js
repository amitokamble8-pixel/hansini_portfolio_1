/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.

   Source: Hansini_Ramakrishnan_Resume__1_.pdf
   Schema: mirrors the reference data.js exactly (same export names,
   same object shapes) so existing components work unchanged.

   ⚠ REVIEW BEFORE PUBLISHING — items marked "NOTE" below were not
   stated in the source PDF and were inferred or constructed.
   ================================================================== */

export const PROFILE = {
  first: "Hansini",
  last: "Ramakrishnan",
  fullName: "Hansini A. Ramakrishnan",
  tagline: "Aspiring Biomedical Engineer | Nonprofit Co-Founder | Student Leader | Performer",
  location: "",
  email: "hansini.ar17@gmail.com",
  phone: "",
  bio: [
    "I am a motivated high school senior passionate about exploring the intersection of engineering, biotechnology, and healthcare. Through leadership, business, and technical experiences, I aim to develop innovative solutions and pursue a future in Biomedical Engineering to create meaningful impact in people’s lives.",
    "I am a senior at Dripping Springs High School, graduating in May 2027, with an interest in pursuing Biomedical Engineering. My coursework includes Biotechnology 1–4, AP Calculus, AP Chemistry, and AP Biology.",
    "My experience spans leadership, business, engineering, and biotechnology. I co-founded COLTS Youth League, a nonprofit that connects high school mentors with younger students to promote STEM education, serve as Business Lead for my school's BEST Robotics team, and intern in digital marketing at Aktriva LLC.",
    "Outside the classroom, I have sung with the High School Chamber Choir and Bella Voce, practiced Mohiniyattam (classical South Indian dance) since 2020, and represented Germany and Italy as a Model United Nations delegate.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  /* NOTE: the source resume PDF can be used as the CV file here. */
  cv: "/hansini_ramakrishnan_resume.pdf",
  photo: "",
  aboutPhoto: "",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community Service", to: "/volunteering" },

  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Work & leadership experience (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "aktriva-digital-marketing-intern",
    role: "Digital Marketing Intern",
    org: "Aktriva LLC",
    logo: "",
    location: "",
    dates: "July 2025 – Present",
    meta: "Internship · Aktriva LLC ·",
    badge: "Internship",
    desc: "Supporting digital marketing and branding initiatives by designing marketing templates and promotional materials and assisting with website and logo design.",
    bullets: [
      "Designed marketing templates and promotional materials",
      "Assisting with website and logo design",
      "Supporting digital marketing and branding initiatives",
    ],
    tags: ["Digital Marketing", "Branding", "Graphic Design"],
    featured: true,
  },
  {
    slug: "colts-youth-league-co-founder",
    role: "Co-Founder",
    org: "COLTS Youth League",
    logo: "",
    location: "",
    dates: "2023 – Present",
    meta: "STEM Education Nonprofit · COLTS Youth League ·",
    badge: "Nonprofit",
    desc: "Co-founded a nonprofit organization that connects high school mentors with younger students to promote STEM education.",
    /* NOTE: the resume names the funder two ways — "Dripping Springs
       Education Fund" (here) and "Dripping Springs Educational Foundation"
       (Honors & Awards). The second name is used throughout; confirm the
       official name. */
    bullets: [
      "Co-founded a nonprofit connecting high school mentors with younger students to promote STEM education",
      "Developed and managed curriculum for youth programs",
      "Acquired funding through a Dripping Springs Educational Foundation grant",
      "Led marketing initiatives and managed the organization's social media presence",
      "Helped expand community outreach and student engagement",
    ],
    tags: ["STEM Education", "Mentorship", "Nonprofit Leadership"],
    featured: true,
  },
  {
    slug: "best-robotics-business-lead",
    role: "Business Lead",
    org: "BEST Robotics Team, Dripping Springs High School",
    logo: "",
    location: "",
    dates: "2023 – Present",
    meta: "Robotics Competition Team · Dripping Springs High School ·",
    badge: "Leadership",
    desc: "Leads marketing strategy and branding for the school's BEST Robotics team, contributing to Texas State Competition qualification in 2024 and 2025 and two design awards in 2025.",
    bullets: [
      "Directed marketing strategy and branding efforts, including social media campaigns",
      "Helped the team qualify for the Texas State Competition in 2024 and 2025",
      "Led a seven-member team to 1st Place Regional in Exhibit Design and 3rd Place State in Video Design (2025)",
      "Collaborated with engineering and business teams on outreach and competition presentations",
    ],
    tags: ["Robotics", "Marketing Strategy", "Team Leadership"],
    featured: true,
  },
  {
    slug: "model-united-nations-vice-president",
    role: "Vice President",
    org: "Model United Nations",
    logo: "",
    location: "",
    dates: "2025 – 2026",
    meta: "Club Leadership · Model United Nations ·",
    badge: "Leadership",
    desc: "Served as Vice President, leading meetings when needed and building resources to mentor and prepare new delegates.",
    bullets: [
      "Led meetings in the absence of the president",
      "Created a knowledge base to mentor and onboard new delegates",
      "Helped coordinate meeting agendas and delegate preparation",
    ],
    tags: ["Model UN", "Mentorship", "Leadership"],
    featured: false,
  },
];

/* ---- Projects ---- */
/* NOTE: the resume has no separate "projects" section. The entries below
   are drawn from concrete outputs described under each role. Nothing is
   listed for SOLIDWORKS, Python, HTML, or Biotechnology work — if the
   student has engineering, coding, or lab projects, add them here. */

export const PROJECTS = [
  {
    name: "COLTS STEM Youth Curriculum",
    org: "COLTS Youth League",
    meta: "STEM Education",
    desc: "Curriculum developed and managed for COLTS Youth League's programs, which pair high school mentors with younger students. The organization received a Dripping Springs Educational Foundation grant in 2024.",
    tags: ["Curriculum Development", "STEM Education", "Mentorship"],
    featured: true,
  },
  {
    name: "BEST Robotics Exhibit & Video Design",
    org: "BEST Robotics Team, Dripping Springs High School",
    meta: "Competition Design · 2025",
    desc: "Exhibit and video work produced by a seven-member team under her lead, earning 1st Place Regional in Exhibit Design and 3rd Place State in Video Design.",
    tags: ["Exhibit Design", "Video Design", "Team Leadership"],
    featured: true,
  },
  {
    name: "Marketing Templates & Brand Design",
    org: "Aktriva LLC",
    meta: "Digital Marketing & Design",
    desc: "Marketing templates and promotional materials designed for Aktriva LLC, alongside ongoing support for the company's website and logo design.",
    tags: ["Graphic Design", "Branding", "Promotional Materials"],
    featured: true,
  },
  {
    name: "Incoming Student Resource Campaign",
    org: "Study Club",
    meta: "Social Media & Resource Collection · 2026",
    desc: "A social media campaign and resource collection built from interviews with teachers at school, creating resources for students entering high school.",
    tags: ["Social Media", "Interviews", "Student Resources"],
    featured: false,
  },
  {
    name: "Model UN Delegate Knowledge Base",
    org: "Model United Nations",
    meta: "Mentoring & Onboarding",
    desc: "A knowledge base created to mentor and onboard new delegates, supporting meeting agendas and delegate preparation.",
    tags: ["Knowledge Base", "Mentorship", "Model UN"],
    featured: false,
  },
];

/* ---- Achievements ---- */
/* NOTE: the resume gives no dates for the Haas Mill or OSHA certifications,
   and does not say which OSHA course was completed (e.g. 10-hour). */

export const AWARDS = [
  {
    icon: "🎓",
    title: "AP Scholar with Distinction",
    meta: "College Board · 2026",
    detail:
      "Received the AP Scholar with Distinction Award from the College Board in 2026, following the AP Scholar Award in 2025.",
    link: "",
    featured: true,
  },
  {
    icon: "🥇",
    title: "1st Place Regional — Exhibit Design",
    meta: "BEST Robotics · 2025",
    detail:
      "Led a seven-member team to 1st Place in Exhibit Design at the regional BEST Robotics competition.",
    link: "",
    featured: true,
  },
  {
    icon: "🥉",
    title: "3rd Place State — Video Design",
    meta: "BEST Robotics · 2025",
    detail:
      "Led a seven-member team to 3rd Place in Video Design at the state level of the BEST Robotics competition.",
    link: "",
    featured: true,
  },
  {
    icon: "💡",
    title: "Dripping Springs Educational Foundation Grant",
    meta: "Grant Award · COLTS Youth League · 2024",
    detail:
      "Secured a Dripping Springs Educational Foundation grant to fund COLTS Youth League, the STEM mentoring nonprofit co-founded in 2023.",
    link: "",
    featured: true,
  },
  {
    icon: "🏛️",
    title: "National Honor Society Inductee",
    meta: "National Honor Society · 2024",
    detail: "Inducted into the National Honor Society in 2024.",
    link: "",
    featured: true,
  },
  {
    icon: "🏆",
    title: "Underclassman Award for Academic Excellence",
    meta: "Academic Recognition · 2025",
    detail: "Received the Underclassman Award for Academic Excellence in 2025.",
    link: "",
    featured: true,
  },
  {
    icon: "📘",
    title: "AP Scholar Award",
    meta: "College Board · 2025",
    detail: "Received the AP Scholar Award from the College Board in 2025.",
    link: "",
    featured: false,
  },
  {
    icon: "🤖",
    title: "Texas State Competition Qualifier",
    meta: "BEST Robotics · 2024 & 2025",
    detail:
      "Helped the Dripping Springs High School BEST Robotics team qualify for the Texas State Competition in both 2024 and 2025.",
    link: "",
    featured: false,
  },
  {
    icon: "🎶",
    title: "TMEA Competition Participant",
    meta: "Texas Music Educators Association · 2025",
    detail:
      "Participated in the Texas Music Educators Association (TMEA) competition in 2025.",
    link: "",
    featured: false,
  },
  {
    icon: "⚙️",
    title: "Haas Mill Certification",
    meta: "Technical Certification",
    detail:
      "Earned Haas Mill Certification in CNC milling, complementing design and modeling skills in SOLIDWORKS.",
    link: "",
    featured: false,
  },
  {
    icon: "🦺",
    title: "OSHA Certification",
    meta: "Workplace Safety Certification",
    detail: "Earned OSHA workplace safety certification.",
    link: "",
    featured: false,
  },
];

/* ---- Academic interests ---- */
/* NOTE: the resume states only one interest outright — Biomedical
   Engineering. The other four areas are inferred from coursework and
   activities, and every `outlet` line was written to fit the component.
   Review before publishing. */

export const ARTICLES = [
  {
    title: "Biomedical Engineering",
    outlet: "Applying engineering design to medicine and human health — the field I hope to pursue",
    link: "",
  },
  {
    title: "Biotechnology",
    outlet: "Studied through Biotechnology 1–4, alongside AP Biology and AP Chemistry",
    link: "",
  },
  {
    title: "Engineering Design & Manufacturing",
    outlet: "CAD modeling in SOLIDWORKS and CNC milling, backed by Haas Mill certification",
    link: "",
  },
  {
    title: "STEM Education & Outreach",
    outlet: "Mentoring younger students and promoting STEM learning in the community",
    link: "",
  },
  {
    title: "Business & Marketing",
    outlet: "Branding, digital marketing, and design for businesses, nonprofits, and student teams",
    link: "",
  },
];

/* ---- Service, leadership & activities ---- */

export const VOLUNTEER = {
  /* NOTE: all three figures come from the resume, but "400+" simplifies
     "up to and over 400 individuals over 2 days" — it is unclear whether
     that is a single year or a total since 2023. "20+" rounds the stated
     20–22 active members. Confirm before publishing. */
  stats: [
    { value: "400+", label: "People Reached at the School Culture Fair" },
    { value: "20+", label: "Active Members — Study Club" },
    { value: "1st", label: "Regional in Exhibit Design" },
  ],
  orgs: [
    {
      name: "Society of Women Engineers",
      role: "Member · 2023 – Present",
      desc: "Active member of the Society of Women Engineers (SWE) since 2023, participating in a community that promotes engineering, innovation, and professional development for women pursuing STEM careers.",
    },
    {
      name: "Study Club",
      role: "President & Founder · 2025 – Present",
      desc: "Founded the club in response to a lack of third spaces and study resources for teens at the high school. Recruited and managed five club leads, coordinated with an adult mentor, and built a group of 20–22 active members. In 2026, the club pivoted to a social media campaign and resource collection, interviewing teachers and creating resources for students entering high school.",
    },
    {
      name: "Project Herizon Health",
      role: "Social Media · 2025 – 2026",
      desc: "Supported a new youth organization through weekly social media posts and event volunteering. Although a social media position, the role required knowledge of feminine health.",
    },
    {
      name: "School Culture Fair",
      role: "Presenter · 2023 – Present",
      desc: "Presented on Indian culture at the school Culture Fair, speaking with 400+ people over two days.",
    },
  ],
};

/* ---- Performing arts, activities & competitions (renders on the /sports route) ---- */
/* NOTE: the resume lists no athletics, so this route holds performing arts
   and extracurricular activities instead. If the page heading is hard-coded
   as "Sports" in the component, update it there. */

export const SPORTS = [
  {
    icon: "",
    name: "Chamber Choir & Bella Voce",
    desc: "Sang with the High School Chamber Choir and Bella Voce from 2024–2026, joining through two years of auditions and solo practice. Participated in the Texas Music Educators Association (TMEA) competition in 2025.",
  },
  {
    icon: "",
    name: "Mohiniyattam",
    desc: "Practicing Mohiniyattam, a classical South Indian dance form, since 2020, with multiple public stage performances in 2024 and 2025.",
  },
  {
    icon: "",
    name: "Mamma Mia! — High School Musical",
    desc: "Ensemble performer in the 2023–24 high school production of Mamma Mia!, selected through audition, with two months of rehearsals leading to four performances.",
  },
  {
    icon: "",
    name: "Model United Nations Conferences",
    desc: "Represented Germany at WestMUN (2023), Italy at SICMUN (2025), and Germany at SICMUN (2026), and served as Vice President of Model United Nations in 2025–26.",
  },
];

/* ---- Skills ---- */
/* NOTE: the first three groups come straight from the resume's Technical
   Skills section (tools, SOLIDWORKS, programming, certifications). The last
   three are drawn from the work, leadership, and activity descriptions.
   No languages section exists in the resume, so none is listed here — add
   one if needed. */

export const SKILLS = [
  {
    group: "Engineering & Design",
    items: ["SOLIDWORKS", "Haas Mill Certification", "OSHA Certification"],
  },
  {
    group: "Programming",
    items: ["Python", "HTML"],
  },
  {
    group: "Digital & Productivity Tools",
    items: ["PowerPoint", "Canva", "Google Sheets", "Excel"],
  },
  {
    group: "Marketing & Communication",
    items: ["Digital Marketing", "Branding", "Social Media Campaigns", "Presenting"],
  },
  {
    group: "Leadership & Organization",
    items: ["Curriculum Development", "Team Leadership", "Grant Funding", "Mentoring & Onboarding"],
  },
  {
    group: "Performing Arts",
    items: ["Choral Singing", "Mohiniyattam", "Musical Theater"],
  },
];

/* ---- Education ---- */
/* NOTE: no GPA is stated in the resume, so `gpa` is left empty. School
   location is inferred from the school's name.
   The resume lists "AP Calculus B", which is not an AP course name — it is
   most likely AP Calculus AB or BC. Listed as "AP Calculus" until confirmed. */

export const EDUCATION = [
  {
    school: "Dripping Springs High School",
    location: "Dripping Springs, Texas",
    level: "Senior · Grade 12",
    dates: "Expected May 2027",
    gpa: "",
    coursework: [
      "Biotechnology 1–4",
      "AP Calculus",
      "AP Chemistry",
      "AP Biology",
    ],
  },
];

/* ---- Test scores (none listed in the source document) ---- */
/* NOTE: the resume lists no standardized test scores. The AP Scholar
   awards are captured under AWARDS; individual AP exam scores are not
   stated. */

export const TEST_SCORES = [];

/* ---- Looking ahead ---- */
/* NOTE: the resume has no personal statement. These lines are adapted
   from its one-line summary and should be reviewed. */

export const LOOKING_AHEAD = [
  "I am a motivated and passionate student whose experience spans leadership, business, engineering, and biotechnology.",
  "I hope to pursue Biomedical Engineering, bringing together my biotechnology coursework, engineering design skills, and experience leading teams and community initiatives.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community Service", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
