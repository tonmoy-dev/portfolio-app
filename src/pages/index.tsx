import type { NextPage } from 'next'
import About from '../components/About/About'
import Hero from '../components/HeroArea/Hero'
import Navigation from '../components/Navigation/Navigation'
import Projects from '../components/Projects/Projects'
import LeftSidebar from '../components/Sidebars/LeftSide/LeftSidebar'


const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <div className='grid grid-cols-[100px_minmax(900px,_1fr)_100px]'>
        <LeftSidebar />
        <div>
          <Hero />
          <About />
          <Projects />
        </div>
        <LeftSidebar />
      </div>
      
    </>
  );
}

export default Home
