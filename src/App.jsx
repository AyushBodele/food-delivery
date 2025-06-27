import { useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Page2 from './components/Page2'
import './index.css'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Page2 />
      <Footer />
    </>
  )
}

export default App
