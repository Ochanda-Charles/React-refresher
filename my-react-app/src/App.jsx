import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from '../components/contact.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contacts-container">
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
      </div>
    </>
    )
}

export default App
