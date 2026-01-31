import React from 'react'
import "../Css/Home.css"
import Home_Hero from "../Components/Home_Hero"
import WhyChooseUs from '../Components/WhyChooseUs'
import Programs from '../Components/Programs'
import PrincipalMessage from '../Components/PrincipalMessage'
import Facilities from '../Components/Facilities'



function Home() {
  return (
    <div className='Home'>
      <Home_Hero/>
      <WhyChooseUs/>
      <Programs/>
      <PrincipalMessage/>
      <Facilities/>

    </div>
  )
}

export default Home;