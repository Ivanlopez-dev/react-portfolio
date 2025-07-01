import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useIntl } from 'react-intl'
import { useRef } from 'react'
import gsap from 'gsap'

import TitleHeader from '../components/TitleHeader'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  const intl = useIntl()

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current
    ]

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100'
          }
        }
      )
    }),
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      )
  }, [])

  return (
    <section
      id='projects'
      ref={sectionRef}
      className='app-showcase flex-center section-padding xl:px-0'
    >
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader
          title={intl.formatMessage({ id: 'showcase.title' })}
          sub={intl.formatMessage({ id: 'showcase.sub' })}
        />
        <div className='w-full mt-32'>
          <div className='showcaselayout'>
            {/* LEFT */}

            <div ref={project1Ref} className='first-project-wrapper'>
              <div className='image-wrapper'>
                <img
                  src='/images/project1.webp'
                  alt='Minino Malo project Image'
                />
              </div>

              <div className='flex mt-4'>
                <span className='badges'>
                  <img
                    src='/../../images/logos/typescript.svg'
                    alt='TypeScript logo image'
                    className='size-3 me-1.5'
                  />
                  TypeScript
                </span>
                <span className='badges'>
                  <img
                    src='/../../images/logos/nextjslogo.svg'
                    alt='Nextjs logo image'
                    className='size-4 me-1.5'
                  />
                  Nextjs
                </span>
                <span className='badges'>
                  <img
                    src='/../../images/logos/tailwindcss.svg'
                    alt='TailwindCSS logo image'
                    className='size-4 me-1.5'
                  />
                  TailwindCSS
                </span>
              </div>

              <div className='inner flex mt-2 gap-2.5'>
                <a
                  href='https://mininomalo.com/'
                  target='_blank'
                  className='contact-btn group'
                >
                  <div className='inner flex '>
                    <span>
                      {intl.formatMessage({ id: 'showcase.websitelink' })}
                    </span>
                  </div>
                </a>
              </div>

              <div className='text-content'>
                <h2>{intl.formatMessage({ id: 'showcase.project1.title' })}</h2>
                <p className='text-white-50 md:text-xl'>
                  {intl.formatMessage({ id: 'showcase.project1.desc' })}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className='project-list-wrapper overflow-hidden'>
              <div ref={project2Ref} className='project'>
                <div className='image-wrapper bg-[#FCCCCD]'>
                  <img
                    src='/images/project2.webp'
                    alt='File Driver Image project'
                  />
                </div>

                <div className='flex mt-4'>
                  <span className='badges'>
                    <img
                      src='/../../images/logos/typescript.svg'
                      alt='TypeScript logo image'
                      className='size-3 me-1.5'
                    />
                    TypeScript
                  </span>
                  <span className='badges'>
                    <img
                      src='/../../images/logos/nextjslogo.svg'
                      alt='Nextjs logo image'
                      className='size-4 me-1.5'
                    />
                    Nextjs
                  </span>
                  <span className='badges'>
                    <img
                      src='/../../images/logos/tailwindcss.svg'
                      alt='TailwindCSS logo image'
                      className='size-4 me-1.5'
                    />
                    TailwindCSS
                  </span>
                </div>

                <div className='inner flex mt-2 gap-2.5'>
                  <a
                    href='https://filedriver.vercel.app/'
                    target='_blank'
                    className='contact-btn group'
                  >
                    <div className='inner flex '>
                      <span>
                        {intl.formatMessage({ id: 'showcase.websitelink' })}
                      </span>
                    </div>
                  </a>

                  <a
                    href='https://github.com/Ivanlopez-dev/file-driver'
                    target='_blank'
                    className='contact-btn group'
                  >
                    <div className='inner flex '>
                      <span>
                        {intl.formatMessage({ id: 'showcase.githublink' })}
                      </span>
                    </div>
                  </a>
                </div>

                <h2>{intl.formatMessage({ id: 'showcase.project2.title' })}</h2>
                <p className='text-white-50 md:text-xl mt-4'>
                  {intl.formatMessage({ id: 'showcase.project2.desc' })}
                </p>
              </div>

              <div ref={project3Ref} className='project'>
                <div className='image-wrapper bg-[#A1BFF3]'>
                  <img
                    src='/images/project3.webp'
                    alt='Travely project Image'
                  />
                </div>

                <div className='flex mt-4'>
                  <span className='badges'>
                    <img
                      src='/../../images/logos/typescript.svg'
                      alt='TypeScript logo image'
                      className='size-3 me-1.5'
                    />
                    TypeScript
                  </span>
                  <span className='badges'>
                    <img
                      src='/../../images/logos/reactrouter.svg'
                      alt='React Router logo image'
                      className='size-4 me-1.5'
                    />
                    R. Router v7
                  </span>
                  <span className='badges'>
                    <img
                      src='/../../images/logos/gemini.svg'
                      alt='Gemini logo image'
                      className='size-4 me-1.5'
                    />
                    Gemini AI
                  </span>
                </div>

                <div className='inner flex mt-2 gap-2.5'>
                  <a
                    href='https://travely-agency.vercel.app/dashboard'
                    target='_blank'
                    className='contact-btn group'
                  >
                    <div className='inner flex '>
                      <span>
                        {intl.formatMessage({ id: 'showcase.websitelink' })}
                      </span>
                    </div>
                  </a>

                  <a
                    href='https://github.com/Ivanlopez-dev/travely'
                    target='_blank'
                    className='contact-btn group'
                  >
                    <div className='inner flex '>
                      <span>
                        {intl.formatMessage({ id: 'showcase.githublink' })}
                      </span>
                    </div>
                  </a>
                </div>

                <h2>{intl.formatMessage({ id: 'showcase.project3.title' })}</h2>
                <p className='text-white-50 md:text-xl mt-4'>
                  {intl.formatMessage({ id: 'showcase.project3.desc' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
