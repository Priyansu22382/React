
import './App.css'

function App() {
  function handleClick(){
    alert("Button clicked.");
  }
  function handleInputChange(event){
    console.log("Input Changed : ",event.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="Type something..." onChange={handleInputChange}/>
      {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
  )
}

export default App
