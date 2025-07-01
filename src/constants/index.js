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
    imgPath: '/images/logo2.webp',
    logoPath: '/images/logo2.webp',
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
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Ivan. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/client1.png'
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Ivan was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/client3.png'
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Ivan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ivan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ivan is the ideal partner.",
    imgPath: '/images/client2.png'
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Ivan was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/client5.png'
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Ivan’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/client4.png'
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Ivan was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: '/images/client6.png'
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
