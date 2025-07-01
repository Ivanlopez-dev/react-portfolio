import { useIntl } from 'react-intl'
import { abilities } from '../constants'

const FeatureCards = () => {
  const intl = useIntl()

  return (
    <section className='w-full padding-x-lg section-padding'>
      <div className='mx-auto grid-3-cols'>
        {abilities.map(({ imgPath, titleId, descId }) => (
          <div
            key={titleId}
            className='card-border rounded-xl p-8 flex flex-col gap-4'
          >
            <div className='size-14 flex items-center justify-center rounded-full'>
              <img src={imgPath} alt={titleId} />
            </div>
            <h3 className='text-white text-2xl font-semibold mt-2'>
              {intl.formatMessage({ id: titleId })}
            </h3>
            <p className='text-white-50 text-lg'>
              {intl.formatMessage({ id: descId })}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureCards
