import React from 'react'
import './ResizeWindow.css'
import { useState, useEffect } from 'react'
const ResizeWindow = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    const [windowHeight,setWindowHeight] = useState(window.innerHeight);
    useEffect(() => {
        function handleResize(){
            setWindowHeight(window.innerHeight);
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleResize);
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    });

  return (
    <div className='resize-window'>
      <h1>Window Width : {windowWidth}</h1>
      <br/>
      <br/>
      <h1>Window Height : {windowHeight}</h1>
    </div>
  )
}

export default ResizeWindow
