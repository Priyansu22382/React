import React from 'react'
import './Counter.css'
const Counter = (props) => {
  return (
    <div className='counter'>
        <p id="countDisplay">You Clicked on {props.count} times.</p>
        <button id="incrementButton" onClick={props.increment}>Increment</button>
        <button id="decrementButton" onClick={props.decrement}>Decrement</button>
        <button id="resetButton" onClick={props.reset}>Reset</button>
    </div>
  )
}

export default Counter
