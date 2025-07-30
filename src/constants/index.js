const navLinks = [
  {
    id: 'nav.experience',
    link: '#experience'
  },
  {
    id: 'nav.projects',
    link: '#projects'
  },
  {
    id: 'nav.skills',
    link: '#skills'
  },
  {
    id: 'nav.testimonials',
    link: '#testimonials'
  }
]

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' }
]

const counterItems = [
  { value: 2, suffix: '+', labelId: 'counter.experience' },
  { value: 24, suffix: '+', labelId: 'counter.projects' },
  { value: 100, suffix: '%', labelId: 'counter.reviews' }
]

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png'
  },
  {
    imgPath: '/images/logos/company-logo-2.png'
  },
  {
    imgPath: '/images/logos/company-logo-4.png'
  },
  {
    imgPath: '/images/logos/company-logo-5.png'
  },
  {
    imgPath: '/images/logos/company-logo-6.png'
  },
  {
    imgPath: '/images/logos/company-logo-7.png'
  },
  {
    imgPath: '/images/logos/company-logo-8.png'
  },
  {
    imgPath: '/images/logos/company-logo-9.png'
  },
  {
    imgPath: '/images/logos/company-logo-10.png'
  },
  {
    imgPath: '/images/logos/company-logo-11.png'
  }
]

const abilities = [
  {
    imgPath: '/images/seo.png',
    titleId: 'ability1.title',
    descId: 'ability1.desc'
  },
  {
    imgPath: '/images/chat.png',
    titleId: 'ability2.title',
    descId: 'ability2.desc'
  },
  {
    imgPath: '/images/time.png',
    titleId: 'ability3.title',
    descId: 'ability3.desc'
  }
]

const techStackImgs = [
  {
    name: 'HTML',
    imgPath: '/images/logos/html5.svg'
  },
  {
    name: 'CSS',
    imgPath: '/images/logos/css.svg'
  },
  {
    name: 'JavaScript',
    imgPath: '/images/logos/javascript.svg'
  },
  {
    name: 'Nodejs',
    imgPath: '/images/logos/node.png'
  },
  {
    name: 'Git',
    imgPath: '/images/logos/git.svg'
  },
  {
    name: 'React',
    imgPath: '/images/logos/react.png'
  },
  {
    name: 'Nextjs',
    imgPath: '/images/logos/nextjslogo.svg'
  },
  {
    name: 'PostgreSQL',
    imgPath: '/images/logos/postgresql.svg'
  },
  {
    name: 'MySQL',
    imgPath: '/images/logos/mysql.svg'
  },
  {
    name: 'TailwindCSS',
    imgPath: '/images/logos/tailwindcss.svg'
  }
]

const expCards = [
  {
    reviewId: 'experience.card1.review',
    imgPath: '/images/exp1.svg',
    logoPath: '/images/logo1.svg',
    titleId: 'experience.card1.title',
    dateId: 'experience.card1.date',
    responsibilitiesIds: [
      'experience.card1.responsibility1',
      'experience.card1.responsibility2',
      'experience.card1.responsibility3'
    ]
  },
  {
    reviewId: 'experience.card2.review',
    imgPath: '/images/logo2.png',
    logoPath: '/images/logo2.png',
    titleId: 'experience.card2.title',
    dateId: 'experience.card2.date',
    responsibilitiesIds: [
      'experience.card2.responsibility1',
      'experience.card2.responsibility2',
      'experience.card2.responsibility3'
    ]
  }
]

const expLogos = [
  {
    name: 'Deliverea',
    imgPath: '/images/logo1.svg'
  },
  {
    name: 'Burger King',
    imgPath: '/images/logo2.webp'
  }
]

const testimonials = [
  {
    name: 'Alfonso Sánchez',
    company: 'Deliverea Chief Operating Officer',
    mentions: '@alfonsosanchez',
    reviewId: 'testimonials.review.1',
    imgPath: '/images/testimonials-pic3.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/alfa-sanchez/'
  },
  {
    name: 'Deneidy Sanchez',
    company: 'Deliverea Project Manager',
    mentions: '@deneidysanchez',
    reviewId: 'testimonials.review.2',
    imgPath: '/images/testimonials-pic2.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/deneidy-s-a8586a236/'
  },
  {
    name: 'Lua Varela',
    company: 'Deliverea IT Support',
    mentions: '@luavarela',
    reviewId: 'testimonials.review.3',
    imgPath: '/images/testimonials-pic1.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/lua-varela/'
  },
  {
    name: 'Albert Romera',
    company: 'Deliverea Senior Developer',
    mentions: '@albertromera',
    reviewId: 'testimonials.review.4',
    imgPath: '/images/testimonials-pic4.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/albertromera/'
  },
  {
    name: 'Marta Lazkano',
    company: 'Minino Malo Product Owner',
    mentions: '@martalazkano',
    reviewId: 'testimonials.review.5',
    imgPath: '/images/logo2.png',
    linkedinUrl: 'https://www.linkedin.com/in/'
  },
  {
    name: 'Mario',
    company: 'Burger King Cooker',
    mentions: '@mario',
    reviewId: 'testimonials.review.6',
    imgPath: '/images/client4.png',
    linkedinUrl: 'https://www.linkedin.com/in/'
  }
]

const socialImgs = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/ivan-lopez-dev/',
    imgPath: '/images/linkedin.png'
  },
  {
    name: 'github',
    url: 'https://github.com/Ivanlopez-dev',
    imgPath: '/images/github.png'
  }
]

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackImgs,
  navLinks
}
