import React, { useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'

import messagesEn from './en.json'
import messagesEs from './es.json'

const messages = {
  en: messagesEn,
  es: messagesEs
}

const getInitialLocale = () => {
  // If user's switch Language, Save it on localStorage
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && ['en', 'es'].includes(savedLocale)) return savedLocale

  // Set Origin language based on user's Browser language
  const browserLang = navigator.language || navigator.userLanguage
  return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const LanguageContext = React.createContext()

const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(getInitialLocale())

  const switchLanguage = lang => {
    setLocale(lang)
    localStorage.setItem('locale', lang)
  }

  useEffect(() => {
    // Ensure that locale in state is always reflected in localStorage
    localStorage.setItem('locale', locale)
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}

export { LanguageContext }
export default LanguageProvider
