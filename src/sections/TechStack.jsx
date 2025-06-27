import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants'

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    gsap.fromTo(
      '.tech-card',
      {
        // Initial values
        y: 50,
        opacity: 0
      },
      {
        // Final values
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center'
        }
      }
    )
  })

  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title='How I Can Contribute & My Key Skills'
          sub='🤝 What I Bring to the Table'
        />
        <div className='tech-grid mt-32 xl:px-0'>
          {/* Loop through the techStackIcons array and create a component for each item. 
              The key is set to the name of the tech stack icon, and the classnames are set to 
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
              classes are only applied on larger screens. */}

          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'
            >
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <img
                    src={techStackIcon.imgPath}
                    className='w-36'
                    alt={`Logo of the ${techStackIcon.name} technology`}
                  />
                </div>
                <div className='padding-x w-full'>
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
