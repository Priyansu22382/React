
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count,setCount] = useState(0);
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
  return (
    <div>
        <Counter count = {count} increment = {increment} decrement = {decrement} reset = {reset}/>
        <Counter count = {count} increment = {increment} decrement = {decrement} reset = {reset}/>
    </div>
  )
}

export default App
