import React from 'react'
import UserContext from './Usercontext'

const UsercontextProvider=({children})=> {
    const [user,setUser]=React.useState(null) //React.useState(null) is same as useState(null) but in this a file is import 
  return (
  <UserContext.Provider value={{   user,setUser  /* ab ye object hai to jitni chijo exsees dena ho de sakte hai   */}}>
  {children}

  </UserContext.Provider>
  )
}

export default UsercontextProvider