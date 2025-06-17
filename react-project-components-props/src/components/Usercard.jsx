import React from 'react'
import PriyanshuPic from "../assets/PriyanshuPic.png"
import "./Usercard.css"
const Usercard = (props) => {
  return (
    <div className='usercard'>
        <h1 id='heading'>{props.name}</h1>
        <img id="image" src={PriyanshuPic} alt="" />
        <p id="desc">{props.desc}</p>
    </div>
  )
}

export default Usercard
