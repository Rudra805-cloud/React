import { useState } from 'react'
import './App.css'

function App() {
   //let counter=0

   
   let [counter,iscounter]=useState(0)
  const increaseValue=()=>{
    console.log(counter);
     if(counter>20){
      document.getElementById('increaseButton').onclick=null;
     }
     else if(counter<20){
      counter=counter+1
      iscounter(counter)
     }
  }

  const decreaseValue =()=>{
    if (counter<0){
      document.getElementById('decreaseButton').onclick=null;
    }
    else if(counter>0){
      counter=counter-1
      iscounter(counter)
    }
  }

 


  return (
    <>
    <h1>Counter-page</h1>
    <h2>
       counter:your value is {counter}
       <br />
      <button id='increaseButton'
      onClick={increaseValue}
      >
        increase value 
      </button>
      <br />
      <br />
      <button id='decreaseButton'
      onClick={decreaseValue}
      >
        decrease value 
      </button>
    </h2>
    </>
  )
}

export default App
