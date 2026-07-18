import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>ABOUT ME</h1>
    <h2>KARL ASHTON L. MAHUSAY</h2>
    <h2>BSIS 3RD YEAR</h2>
    <h2>I LIKE CATS</h2>
    <p>Through my of learning in this course , i've learned alot of things that will help
      me in my future endeavors especially in pursuing Informatuin System. In this cource, I learned to
      create my own Github profile that my future employeers will see. I also learned how to use
      git properly, which I think is very important because it helps me keep track of my work and also
      teach me to how to collaborate with my team in our project. I remember when we started to collaborate using
      Github in my early years, we would commit and push our works without any knowledge what might go wrong
      and in the end our project was compromised and we need to start all over again. At least with
      this knowledge on hand, I think today errors like that would not happen ever again.
    </p>
    </>
  )
}

export default App