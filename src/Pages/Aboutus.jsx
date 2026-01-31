import React from 'react'
import AboutSchool from '../Components/About_us/AboutSchool'
import OurMission from '../Components/About_us/OurMission'
import Vision from '../Components/About_us/Vision'
import CoreValues from '../Components/About_us/CoreValues'
import TeachingApproach from '../Components/About_us/TeachingApproach'
import NewsWithFilters from '../Components/News/NewsWithFilters'
import OurTeam from '../Components/About_us/OurTeam'
import WhyParentsTrustUs from '../Components/About_us/WhyParentsTrustUs'
import FeaturedNews from '../Components/News/FeaturedNews'

function Aboutus() {
  return (
    <div>
      <AboutSchool/>
      <OurMission/>
      <Vision/>
      <CoreValues/>
      <TeachingApproach/>
      
      <OurTeam/>
      <NewsWithFilters/>
      <WhyParentsTrustUs/>
      <FeaturedNews/>
    </div>
  )
}

export default Aboutus