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
          {testimonials.map(
            (
              { imgPath, name, company, mentions, reviewId, linkedinUrl },
              index
            ) => (
              <GlowCard
                card={{ review: intl.formatMessage({ id: reviewId }) }}
                key={index}
                index={index}
              >
                <div className='flex items-center gap-3'>
                  {/* Avatar */}
                  <img
                    src={imgPath}
                    alt={name}
                    className='size-10 rounded-full'
                  />
                  <a
                    href={linkedinUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-col gap-1 group relative z-10 cursor-pointer leading-tight'
                  >
                    <p className='font-bold group-hover:text-blue-400 transition-colors'>
                      {name}
                    </p>

                    {/* Empresa */}
                    <p className='text-xs text-gray-400 italic'>{company}</p>

                    {/* Icono + mention alineados */}
                    <div className='flex items-center gap-1 text-sm text-white-50'>
                      <img
                        src='/images/linkedin.png'
                        alt='LinkedIn logo'
                        className='w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity'
                      />
                      <span>{mentions}</span>
                    </div>
                  </a>
                </div>
              </GlowCard>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
