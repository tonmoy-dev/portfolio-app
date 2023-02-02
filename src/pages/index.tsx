import type { NextPage } from 'next'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Hero from '../components/HeroArea/Hero'
import Navigation from '../components/Navigation/Navigation'
import Projects from '../components/Projects/Projects'
import LeftSidebar from '../components/Sidebars/LeftSide/LeftSidebar'
import RightSidebar from '../components/Sidebars/RightSidebar'


const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <div className=' bg-white dark:bg-slate-800'>
      <div className='grid grid-cols-[100px_minmax(900px,_1fr)_100px]'>
        <LeftSidebar />
        <div>
          <Hero />
          <About />
          <Projects />
        </div>
        <RightSidebar />
      </div>
      <Footer/>
      </div>
      
    </>
  );
}

export default Home


