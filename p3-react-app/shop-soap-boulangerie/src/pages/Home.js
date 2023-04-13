import React from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
    </div>
  )
}

export default Home