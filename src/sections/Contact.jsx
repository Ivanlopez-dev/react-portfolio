import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useIntl } from 'react-intl'

import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/Models/contact/ContactExperience'

const Contact = () => {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const formRef = useRef(null)
  const intl = useIntl()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Handle form submission logic
    setLoading(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

      // Reset form after submission
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Emailjs error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title={intl.formatMessage({ id: 'contact.title' })}
          sub={intl.formatMessage({ id: 'contact.sub' })}
        />

        <div className='mt-32 grid-12-cols'>
          {/* Contact Form - Left side */}
          <div className='xl:col-span-5'>
            <div className='flex-center card-border rounded-xl p-10'>
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className='w-full flex flex-col gap-7'
              >
                <div>
                  <label htmlFor='name'>
                    {intl.formatMessage({
                      id: 'contact.form.label.name'
                    })}
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='John Doey'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='johndoey@example.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor='message'>
                    {intl.formatMessage({
                      id: 'contact.form.label.message'
                    })}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='5'
                    placeholder={intl.formatMessage({
                      id: 'contact.form.placeholder.message'
                    })}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type='submit' disabled={loading}>
                  <div className='cta-button group'>
                    <div className='bg-circle' />
                    <p className='text'>
                      {intl.formatMessage({
                        id: loading
                          ? 'contact.form.button.loading'
                          : 'contact.form.button.send'
                      })}
                    </p>
                    <div className='arrow-wrapper'>
                      <img src='/images/arrow-down.svg' alt='Arrow icon' />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D Model - Right side */}
          <div className='xl:col-span-7 min-h-96'>
            <div className='w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden'>
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
