import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, reset } from './features/counter/counterSlice'
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
  }
  return (
    <div className='counter-container'>
      <button onClick={handleIncrement}>increment</button>
      <p>Count : {count}</p>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default App
