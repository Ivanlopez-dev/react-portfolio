const Button = ({ text, className }) => {
  return (
    <a
      href='/files/cv.pdf'
      target='_blank'
      rel='noopener noreferrer'
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
