
import './App.css'
import Card from './component/Card'

function App() {

  // let myobject={
  //   name:"rudra",
  //   age:"18",
  // }
  // let array=["rudra","mishra"]

  return (
    <>
      <p className='bg-green-500 text-black p-4 rounded-2xl 
       font-bold size-26 font-stretch-semi-expanded m-6'>Tailwind </p>
      
      <Card  userName="mishra" />
      <Card userName="Rudra"/>
      <Card/>
      
    
    </>
  )
}

export default App
