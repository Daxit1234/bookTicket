import React from 'react'
import ImageSlider from './imageSlider/ImageSlider';
import Latest from './latest/Latest';
import "./Home.css"

function Home() {
    return(
      <div>
        <div className="slider">
        <ImageSlider />
        </div>
        <Latest/>
      </div>
    )
}

export default Home
