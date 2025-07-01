import { useGSAP } from '@gsap/react'
import { useIntl } from 'react-intl'
import gsap from 'gsap'

import { socialImgs, words } from '../constants'
import AnimatedCounter from '../components/AnimatedCounter'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'

const Hero = () => {
  const intl = useIntl()

  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut'
      }
    )
  })

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt='Background hero image' />
      </div>

      <div className='hero-layout'>
        {/* LEFT: HERO CONTENT */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5 gap-10'>
          <div className='flex flex-col'>
            <img
              src='https://avatars.githubusercontent.com/u/6099886?v=4'
              alt='Ivan Lopez avatar image'
              className='size-20 md:size-30 lg:size-50 rounded-lg mb-3'
            />
            <div className='flex gap-4'>
              {socialImgs.map(img => (
                <a
                  href={img.url}
                  target='_blank'
                  key={img.url}
                  className='flex icon size-6 transition-all duration-300 hover:scale-115'
                >
                  <img src={img.imgPath} />
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                {intl.formatMessage({ id: 'hero.title.shaping' })}
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className='flex items-center md:gap-3 gap-1 pb-2'
                      >
                        <img
                          src={word.imgPath}
                          alt={intl.formatMessage({
                            id: `hero.word.${word.text.toLowerCase()}`
                          })}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                        />
                        <span>
                          {intl.formatMessage({
                            id: `hero.word.${word.text.toLowerCase()}`
                          })}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>{intl.formatMessage({ id: 'hero.title.projects' })}</h1>
              <h1>{intl.formatMessage({ id: 'hero.title.results' })}</h1>
            </div>

            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              {intl.formatMessage({ id: 'hero.description' })}
            </p>

            <Button
              className='md:w-80 md:h-16 w-60 h-12'
              id='button'
              text={intl.formatMessage({ id: 'hero.button' })}
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className='hero-3d-layout'>
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  )
}

export default Hero
