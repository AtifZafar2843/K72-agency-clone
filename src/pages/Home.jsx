import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'
const Home = () => {
  return (
    <div>
      <div className='h-screen w-full fixed'>
        <Video />
      </div>
      <div className='h-screen w-full relative flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home