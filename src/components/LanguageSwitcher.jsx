import { useContext, useState, useRef, useEffect } from 'react'
import LanguageContext from '../i18n/LanguageProvider'

const LanguageSwitcher = () => {
  const { locale, switchLanguage } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', label: 'English', flagSrc: '../../images/logos/gb.svg' },
    { code: 'es', label: 'Español', flagSrc: '../../images/logos/es.svg' }
  ]

  const current = languages.find(l => l.code === locale)

  // Cerrar dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setOpen(prev => !prev)}
        className='hover:scale-105 transition flex items-center gap-2 cursor-pointer'
        title={current.label}
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-label='Change language'
      >
        <img
          src={current.flagSrc}
          alt={current.label}
          className='w-5 h-5 object-cover'
        />
        <span className='uppercase text-sm font-medium'>{current.code}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          strokeWidth={3}
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      <ul
        className={`absolute right-0 mt-2 w-36 bg-blue-100 shadow-md rounded-md text-sm overflow-hidden z-50 transition-all duration-200 ease-out transform ${
          open
            ? 'opacity-100 scale-100 visible'
            : 'opacity-0 scale-95 invisible pointer-events-none'
        }`}
      >
        {languages.map(({ code, label, flagSrc }) => (
          <li
            key={code}
            onClick={() => {
              switchLanguage(code)
              setOpen(false)
            }}
            className={`
              px-4 py-2 cursor-pointer hover:bg-[#1c1c21] flex items-center gap-2
              ${locale === code ? 'font-bold' : ''}
            `}
          >
            <img src={flagSrc} alt={label} className='w-4 h-4 object-cover' />
            <span className='uppercase text-sm'>{code}</span>
            <span className='text-xs text-white-50'>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageSwitcher
