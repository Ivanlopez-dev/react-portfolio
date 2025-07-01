import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader'
import { useIntl } from 'react-intl'

const Testimonials = () => {
  const intl = useIntl()

  return (
    <section id='testimonials' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title={intl.formatMessage({ id: 'testimonials.title' })}
          sub={intl.formatMessage({ id: 'testimonials.sub' })}
        />

        <div className='lg:columns-3 md:columns-2 columns-1 mt-32'>
          {testimonials.map(({ imgPath, name, mentions, review }, index) => (
            <GlowCard card={{ review }} key={index} index={index}>
              <div className='flex items-center gap-3'>
                <div>
                  <img src={imgPath} alt={name} />
                </div>
                <div>
                  <p className='font-bold'>{name}</p>
                  <p className='text-white-50'>{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
