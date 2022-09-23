import type { NextPage } from 'next'
import About from '../components/About/About'
import Hero from '../components/HeroArea/Hero'
import Navigation from '../components/Navigation/Navigation'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

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
