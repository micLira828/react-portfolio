import './contact.css';
import contacts from './data'

function contact() {
  return (
    <section id = "contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below</p>
      <div className="container contact__container">
      {
          contacts.map(contact => <a key = {contact.id} rel = "noopener noreferrer" target = "_blank" href = {contact.link}>
            {contact.icon}
          </a>)
      }
      </div>
    </section>
  )
}

export default contact