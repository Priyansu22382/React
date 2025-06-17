
import './App.css'
import { useEffect, useState } from 'react'
import Counter from './Components/Counter'
import ResizeWindow from './Components/ResizeWindow'
import DataFetcher from './Components/DataFetcher'
function App() {
  // Variation : 1 {Runs on Every Render}
  // useEffect(() => {
  //   alert("I will run on Every Render");
  // })


  // Variation : 2 {Runs on Initial Render Only}
  // useEffect(()=>{
  //   alert("I will run on Iniital Render Only");
  // },[])

  // Variation : 3 {Runs When Count Changes}
  // useEffect(()=>{
  //   alert("Count is Updated to : "+count)
  // },[count])

  // function handleClick(){
  //   setCount(count+1);
  // }


  // Variation : 4 {Runs When Count or Total Changes}
  // const [total,setTotal] = useState(1);
  // function handleTotalChange(){
  //   setTotal(total+1);
  // }
  // useEffect(()=>{
  //   alert("Either Count is Updated to : "+count+" or Total is Updated to : "+total);
  // },[count,total])


  // Variation : 5 {Clean-up Function}
  // useEffect(()=>{
  //   alert("Count is Updated to : "+count);
  //   return ()=>{
  //     alert("Count is Unmounted from the UI");
  //   }
  // },[count])
  return (
    <div>
      <DataFetcher/>
      {/* <ResizeWindow/> */}
      {/* <Counter/> */}

      {/* Count is : {count}
      <br/>
      <br/>
      <button onClick={handleClick}>updateCount</button>

      <br/>
      <br/>
      Total is : {total}
      <br/>
      <br/>
      <button onClick={handleTotalChange}>updateTotal</button> */}

    </div>
  )
}

export default App
