import type { NextPage } from 'next'
import About from '../components/About/About'
import Hero from '../components/HeroArea/Hero'
import Navigation from '../components/Navigation/Navigation'
import Projects from '../components/Projects/Projects'


const Home: NextPage = () => {
  return (
    <div className='container mx-auto'>
      <Navigation />
      <Hero />
      <About />
      <Projects/>
    </div>
  )
}

export default Home
