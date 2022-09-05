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
</div>
    <div className="right-h"></div>
   </div>
  )
}

export default Hero