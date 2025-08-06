import { useState } from 'react'
import '../src/App.css'

function Contact(props) {
console.log(props);

    return(
        <article className="contact-card">
            <img
                src={props.img || './images/default-contact.png'}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </article>
    )

}

export default Contact