import React from 'react'
import './Counter.css'
import {useState} from 'react'
const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div className='counter'>
        <h1 id="title">You have Clicked {count} times.</h1>
        <button id="submitButton" onClick={() => {
            setCount(count+1);
        }}>Increment</button>
    </div>
  )
}

export default Counter
