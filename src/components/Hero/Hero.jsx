import React from 'react'
import './Hero.css'
import Header from '../Header/Header'


const Hero = () => {
  return (
   <div className="hero">
    <div className="left-h">
       <Header/>
    <div className="the-add">
      <div></div>
      <span>The Best Fittness Club</span>
    </div>

    <div className="hero-text">
      <div>
        <span className='stroke-text'>Shape  </span>
        <span>Your</span>
      </div>
      <div><span>Ideal Body</span></div>
      <div><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
    </div>
    {/*figuers*/}
    <div className="figures">
      <div>
        <span>140+</span>
        <span>expert coachs</span>
      </div>
      <div>
        <span>150+</span>
        <span>Members joined</span>
      </div>
      <div>
        <span>50+</span>
        <span>Fitness Programs</span>
      </div>
    </div>
</div>
    <div className="right-h"></div>
   </div>
  )
}

export default Hero