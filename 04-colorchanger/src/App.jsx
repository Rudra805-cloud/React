//import "./change.css";
//import './index.css'

import { useState } from "react"


function App(){
  const[color,setColor]=useState("pink")
  return(
    <>
    <body className="w-full h-full duration-200 flex justify-center"
    style={{backgroundColor:color}}
    >
      <div className="bg-white h-15 w-250 flex flex-wrap  gap-3 shadow-lg rounded-2xl justify-center button-12">
      <button
          onClick={() => setColor("red")}   /* why we use this type () => setColor("red") insted of setcolor
                                           ANS onclick expact that we pass a function but in "setcolor" its pass a reference of 
                                           function its work but we dont pass perameter in it and when we write like that setcolor()
                                           here in onclick the value that function return is given 
                                           */
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red
      </button>
      <button
          onClick={() => setColor("yellow")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >yellow
      </button>
      <button
          onClick={() => setColor("grey")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >grey
      </button>



          
      </div>


    </body>
    </>
  )
}

export default App