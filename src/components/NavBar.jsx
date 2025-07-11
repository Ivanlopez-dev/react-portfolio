import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { navLinks } from '../constants'
import LanguageSwitcher from './LanguageSwitcher'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const intl = useIntl()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a
          href='#hero'
          className='Ivan personal logo image'
          alt="Ivan's personal logo image"
        >
          Iván L.R.
        </a>

        <nav className='desktop'>
          <ul>
            {navLinks.map(({ id, link }) => (
              <li key={id} className='group'>
                <a href={link}>
                  <span>{intl.formatMessage({ id })}</span>
                  <span className='underline' />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='right-side flex items-center gap-4'>
          <LanguageSwitcher />
          <a href='#contact' className='contact-btn group'>
            <div className='inner'>
              <span>{intl.formatMessage({ id: 'nav.contact' })}</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default NavBar
