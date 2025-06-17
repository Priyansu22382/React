
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <div>
        <Card name="Priyanshu">
          {/* This is The Children Props */}
          <h1>Card Title</h1>
          <p>This is a card component that can accept children.</p>
          <button>Click Me</button>
        </Card>
    </div>
  )
}

export default App
