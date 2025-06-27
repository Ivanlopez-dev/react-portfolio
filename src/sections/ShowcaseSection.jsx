import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

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
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}

          <div ref={project1Ref} className='first-project-wrapper'>
            <div className='image-wrapper'>
              <img
                src='/images/project1.webp'
                alt='Minino Malo project Image'
              />
            </div>
            <div className='text-content'>
              <h2>Minino Malo - Ecommerce of handmade products</h2>
              <p className='text-white-50 md:text-xl'>
                Real Production Application builded with Next.js, TypeScript and
                TailwindCSS for a fast, user-friendly experience.
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

              <h2>
                File Driver - Storage management and file sharing platform
              </h2>
              <p className='text-white-50 md:text-xl'>
                Effortlessly upload, organize, and share files.
              </p>
            </div>

            <div ref={project3Ref} className='project'>
              <div className='image-wrapper bg-[#A1BFF3]'>
                <img src='/images/project3.webp' alt='Travely project Image' />
              </div>

              <h2>Travely - Travel Agency dashboard</h2>
              <p className='text-white-50 md:text-xl'>
                Create and find unique, customizable, AI-generated trips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
