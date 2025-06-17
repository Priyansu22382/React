import React from 'react'
import './ChildD.css'
import {useContext} from 'react'
import { ThemeContext } from '../App'
// import {UserContext} from '../App'
const ChildD = () => {
    // const user = useContext(UserContext)
    const {theme,setTheme} = useContext(ThemeContext);
    function toggleTheme(){
        if(theme === "light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
  return (
    <div>
        <button onClick={toggleTheme}>Change Theme</button>

        {/* <h1>Name : {user.fullName}</h1>
        <br/>
        <h1>Age : {user.age}</h1>
        <br/>
        <h1>Email : {user.email}</h1> */}
    </div>
  )
}

export default ChildD
