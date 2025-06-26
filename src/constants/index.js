const navLinks = [
  {
    name: 'Work',
    link: '#work'
  },
  {
    name: 'Experience',
    link: '#experience'
  },
  {
    name: 'Skills',
    link: '#skills'
  },
  {
    name: 'Testimonials',
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
  { value: 2, suffix: '+', label: 'Years of Experience' },
  { value: 3, suffix: '+', label: 'Satisfied Clients' },
  { value: 24, suffix: '+', label: 'Completed Projects' },
  { value: 90, suffix: '%', label: 'Client Retention Rate' }
]

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png'
  },
  {
    imgPath: '/images/logos/company-logo-2.png'
  },
  {
    imgPath: '/images/logos/company-logo-3.png'
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
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.'
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.'
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.'
  }
]

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png'
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg'
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png'
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png'
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg'
  }
]

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0]
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0]
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0]
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0]
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0]
  }
]

const expCards = [
  {
    review:
      'Ivan brought value and technical expertise to the team, significantly improving the performance of our Technical IT Support team.',
    imgPath: '/images/exp1.svg',
    logoPath: '/images/logo1.png',
    title: 'Jr Full-Stack Developer',
    date: 'September 2022 - April 2024',
    responsibilities: [
      'As the person in charge of the technical support system, I review errors and handle contact with customer.',
      'Fix reported bugs if they are in my hand, Jira tasks management, GitHub releases and versioning.',
      'Support Developers with basic tasks, create technical documentation, testing, API endpoints.'
    ]
  },
  {
    review:
      "Ivan's work to Burger King's restaurant have been outstanding. He started working at the bar, taking orders and taking charge of the dining room. He continued with different responsibilities, such as opening and closing the restaurant. And he ended up preparing the orders in the kitchen and teaching the new employees.",
    imgPath: '/images/exp2.webp',
    logoPath: '/images/exp2.webp',
    title: 'Waiter and Cook positions',
    date: 'March 2018 - August 2022',
    responsibilities: [
      'Started attending the bar, taking and preparing orders to clients.',
      'Managing restaurant openings and closings.',
      'Prepare kitchen orders and train new employees.'
    ]
  },
  {
    review:
      'Ivan´s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    title: 'React Native Developer',
    date: 'March 2016 - February 2018',
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      'Improved app performance and user experience through code optimization and testing.',
      'Coordinated with the product team to implement features based on feedback.'
    ]
  }
]

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png'
  },
  {
    name: 'logo2',
    imgPath: '/images/exp2.webp'
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png'
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
    name: 'insta',
    url: 'https://www.instagram.com/',
    imgPath: '/images/insta.png'
  },
  {
    name: 'fb',
    url: 'https://www.facebook.com/',
    imgPath: '/images/fb.png'
  },
  {
    name: 'x',
    url: 'https://www.x.com/',
    imgPath: '/images/x.png'
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/',
    imgPath: '/images/linkedin.png'
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
  techStackIcons,
  techStackImgs,
  navLinks
}
