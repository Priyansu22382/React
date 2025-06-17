import React from 'react'
import './Counter.css'
import {useState, useEffect} from 'react'
const Counter = () => {
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    // Runs on Every Render
    useEffect(()=>{
        console.log("Count is Updated to : "+count);
    })
  return (
    <div className='counter'>
        <h1 id='title'>Count is : {count}</h1>
        <button id="btn" onClick={handleClick}>Update Count</button>
    </div>
  )
}

export default Counter
