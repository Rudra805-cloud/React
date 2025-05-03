import { useState } from 'react'
import './App.css'

function App() {
let [Counter,setCounter]=useState(10) //here setcounter is a function and counter is value at 0 index
   // let Counter=10
   // const addValue=()=>{
   // console.log(Counter);
   // Counter=Counter+1;
   //here value will we updated but it not showing in ui
   // }
   //WE USE HOOKS BECAUSE ITS PROVIDE US SOME METHODS BY WHICH SAME THINGS CAN BE UPDATED AT MULTIPLE PLACES 
   const addValue=()=>{
       console.log(Counter);
        Counter=Counter+1;
        setCounter(Counter)  //or setCounter(Counter+1)
    }
   const removeValue=()=>{
    setCounter(Counter-1)
   }

  
   return (
    <>
    <h1>HEllo Counter</h1>
    <h2> Counter value :{Counter}</h2>
    <h2>
    <button
    onClick={addValue}
    >add value</button></h2>
    <br />
    <h2> 
    <button
    onClick={removeValue}
    > remove value</button></h2>
    </>
   )
  }
  
  export default App
