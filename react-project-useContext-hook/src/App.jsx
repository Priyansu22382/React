import './App.css'
import { createContext } from 'react'
import {useState} from 'react'
import ChildA from './components/ChildA';
// const UserContext = createContext();
const ThemeContext = createContext();
function App() {
  // const [user,setUser] = useState({fullName : "Priyanshu Nigam", age : 20, email : "priyanshu22382@iiitd.ac.in"});
  const [theme,setTheme] = useState("light");
  return (
    <div className='container' style={{ backgroundColor: theme === "light" ? "beige" : "darkgray" }}>
        <ThemeContext.Provider value={{theme,setTheme}} >
          <ChildA/>
        </ThemeContext.Provider>
    </div>
  )
}

export default App
export {ThemeContext};
// export {UserContext}; // Exporting UserContext to use in other components
