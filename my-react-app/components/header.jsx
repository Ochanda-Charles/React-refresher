import { useState } from 'react'
import globeIcon from '../src/assets/globe-icon.svg'
import '../src/App.css'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
        <img src={globeIcon} className= "header-image" alt="globe-icon" />
        <h1>My travel journal</h1>
        </header>

    </>
  )
}

export default Header
