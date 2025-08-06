import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jokes from '../components/jokes.jsx'
import data from '../components/data.js'
import Entry from '../components/entry.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
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
      {/* <div className="jokes-list">


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

export default App */}


// import Header from "../components/header.jsx"
// import Entry from "../components/entry.jsx"

// export default function App() {

//      const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
//      const ninjaJSX = ninjaTurtles.map((ninja) => {
//         return <h3>{ninja[0] + ninja.slice(1)}</h3>
//      } )
//     return (
//         <>
//             <Header />
//             <main className="container">
//                 {/* <Entry
//                     img={{ 
//                         src: "https://scrimba.com/links/travel-journal-japan-image-url",
//                         alt: "Mount Fuji" 
//                     }}
//                     title="Mount Fuji"
//                     country="Japan"
//                     googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
//                     dates="12 Jan, 2021 - 24 Jan, 2021"
//                     text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
//                 /> */}
//                 {ninjaJSX}
          

//             </main>
//         </>
//     )
// }

// import jokesData from '../components/jokesData.js'


// export default function App() {

//     //receiveing the data which is an arra of objects and mapping it to joke components
//     const jokesElement = jokesData.map((joke)=> {
//         return <Jokes setup={joke.setup} punchline={joke.punchline} />
//     })

//     return (
//         <>
//         {jokesElement}
//         </>
        
//     )
// }

export default function App() {

    //break down the data into entry components
    const entryElements = data.map((entry) => {
        return <Entry key={entry.id}
                      {...entry}
                    />
    })

    return (
        //return entry components
        <>
        {entryElements}
        </>
    )
}