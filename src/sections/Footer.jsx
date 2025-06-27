import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center items-center md:items-start'>
          <a href='/'></a>
        </div>

        <div className='socials'>
          {socialImgs.map(img => (
            <a href={img.url} target='_blank' key={img.url} className='icon'>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-center md:text-end'>
            {new Date().getFullYear()} - Developed with 💖 Iván LR
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
