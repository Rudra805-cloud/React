import Login from "./Component/Login"
import Profile from "./Component/Profile"
import UsercontextProvider from "./Context/UsercontextProvider"


function App() {
 

  return (
    <UsercontextProvider>
      <>
      <Login/>
      <Profile/>
      </>
      
    </UsercontextProvider>
  )
}

export default App
