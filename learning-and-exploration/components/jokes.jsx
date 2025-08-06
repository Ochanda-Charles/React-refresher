import { useState } from 'react'
import '../src/App.css'

function Jokes({setup,punchline}) {

    return(
        <article className="contact-card">
            {setup && <h3><strong>Setup: </strong>{setup}.</h3>}
            <p><strong>Punchline: </strong>{punchline}.</p>
        </article>
    )

}

export default Jokes