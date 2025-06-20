import { useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
    </>
  )
}

export default App
