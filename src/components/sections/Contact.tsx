import { useLanguage } from '../../context/LanguageContext'
import Section from '../layout/Section'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t
  return (
    <Section id="contact" surface>
      <div className="contact__inner">
        <h2 className="contact__headline">{contact.headline}</h2>
        <p className="contact__body">{contact.body}</p>
        <p className="contact__availability">{contact.availability}</p>

        <div className="contact__links">
          <a href={`mailto:${contact.email}`} className="contact__link contact__link--primary">
            {contact.emailCta}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--outline"
          >
            {contact.linkedinCta}
          </a>
        </div>

        <p className="contact__email-raw">{contact.email}</p>
      </div>
    </Section>
  )
}
