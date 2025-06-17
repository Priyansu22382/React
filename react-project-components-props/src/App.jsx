
import './App.css'
import Usercard from './components/Usercard'

function App() {

  return (
    <div className='container'>
        <Usercard name="Priyanshu" desc = "Description of Priyanshu"/>
        <Usercard name="Kavya" desc = "Description of Kavya"/>
        <Usercard name="Vinay Chauhan" desc="Descriptionn of Vinay Chauhan"/>
    </div>
  )
}

export default App
