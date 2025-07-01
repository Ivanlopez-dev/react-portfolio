import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import messagesEn from './en.json'
import messagesEs from './es.json'

const messages = {
  en: messagesEn,
  es: messagesEs
}

const LanguageContext = React.createContext()

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en')

  const switchLanguage = lang => setLocale(lang)

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}

export default LanguageContext
