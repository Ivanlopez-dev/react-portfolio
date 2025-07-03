const Button = ({ text, className }) => {
  return (
    <a
      href='https://ivanlorocv.vercel.app/'
      target='_blank'
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className='secondary-cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>

        <div className='arrow-wrapper'>
          <img
            src='/images/arrow-up.svg'
            alt='Arrow up image'
            className='size-7'
          />
        </div>
      </div>
    </a>
  )
}

export default Button
