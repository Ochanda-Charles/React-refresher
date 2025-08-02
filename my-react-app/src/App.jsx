import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jokes from '../components/jokes.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="contacts-container">
        <Contact 
        img=""
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mrwizcaz@catnap.meow"
        />
        <Contact 
        img=""
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mrwizcaz@catnap.meow"
        />
        <Contact 
        img=""
        name="Mr. Whiskerbill"
        phone="(212) 555-1234"
        email="mrwizcaz@catnap.meow"
        />
        <Contact
        img=""
        name="Mr. Whiskerjohnson"
        phone="(212) 555-1234"
        email="mrwizcaz@catnap.meow"
        />
      </div> */}
      <div className="jokes-list">


        <Jokes
        punchline = "Conditional rendering is when you render a component based on a condition."
        />
        <Jokes 
        setup = "I got my daughter a fridge for her birthday."
        punchline = "I can't wait to see her face light up when she opens it."
        
        />
        <Jokes
        setup = "How did the hacker escape the police?"
        punchline = "He just ransomware!"
         
        />
        <Jokes 
        setup = "Why don't pirates travel on mountain roads?."
        punchline = "Scurvy."
        />

        </div>
    </>
    )
}

export default App
