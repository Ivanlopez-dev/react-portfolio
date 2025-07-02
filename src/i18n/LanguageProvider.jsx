import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import messagesEn from './en.json'
import messagesEs from './es.json'

const messages = {
  en: messagesEn,
  es: messagesEs
}

const getInitialLocale = () => {
  const browserLang = navigator.language || navigator.userLanguage
  return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const LanguageContext = React.createContext()

const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(getInitialLocale())

  const switchLanguage = lang => setLocale(lang)

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
