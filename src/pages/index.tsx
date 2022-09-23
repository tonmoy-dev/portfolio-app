import type { NextPage } from 'next'
import About from '../components/About/About'
import Hero from '../components/HeroArea/Hero'
import Navigation from '../components/Navigation/Navigation'


const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
    </>
  )
}

export default Home
