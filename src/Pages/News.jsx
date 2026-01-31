import React from 'react'
import "../Css/NewsPage.css"
import NewsHeader from '../Components/News/NewsHeader'
import FeaturedNews from '../Components/News/FeaturedNews'
import NewsGrid from '../Components/News/NewsGrid'

import NewsWithFilters from '../Components/News/NewsWithFilters'
import Newsletter from '../Components/News/Newsletter'


function News() {
  return (
    <div>
      <NewsHeader/>
      <FeaturedNews/>
      <NewsGrid/>
      <NewsWithFilters/>
      <Newsletter/>
     
    </div>
  )
}

export default News
