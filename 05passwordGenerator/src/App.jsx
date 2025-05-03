
import { useState,useCallback,useEffect,useRef } from 'react'

function App() {


  const [length,setLength]=useState(8);
  const [numAllow,setnumAllow]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setpassword]=useState("")
  //useref hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllow){
      str +="0123456789"
    }
    if(charAllowed){
      str+="@#$%^&*()_+!?"
    }
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
 

  },[length,numAllow,charAllowed,setpassword])             //ya [] isme dependencies likhenge
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllow,charAllowed,passwordGenerator])

 const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,101)
   window.navigator.clipboard.writeText(password)
 },[password])

  return (
   
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-center text-white bg-gray-600">
      <h1 className="text-2xl font-semibold mb-4">Password Generator</h1>
  
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-amber-50 text-amber-600 rounded"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
         onClick={copyPasswordToClipboard}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition"
        >
          
          Copy
        </button>
      </div>
  
      <div className="flex items-center text-sm gap-x-2 mb-4">
        <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="cursor-pointer"
        />
        <label>Length: {length}</label>
      </div>
  
      <div className="flex items-center gap-x-2 mb-2">
        <input
          type="checkbox"
          defaultChecked={numAllow}
          id="numberInput"
          onChange={() => setnumAllow((prev) => !prev)}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
  
      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => setcharAllowed((prev) => !prev)}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
      
    </div>
  </>
  
  
  )
}

export default App
