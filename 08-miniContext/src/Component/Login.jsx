import React ,{useState,useContext}from 'react'
import UserContext from '../Context/Usercontext'

function Login() {
    const [username,setUsername]=useState('')
    const [password, setPassword] = useState('')
    const {setUser}=useContext(UserContext)


 const handlesubmit=(e)=>{
    e.preventDefault()
    setUser({username,password})

 }     
 

  return (
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        type="text" 
        placeholder='username' />
        <><div> </div></>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="text"
         placeholder='password' />
         <><div></div></>
        <button onClick={handlesubmit}>Submit</button>
        
    </div>
  )
}

export default Login