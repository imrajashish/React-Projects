
import { useEffect,useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  let myBio = {
    name:"Ashish",
    Age : 24,
    Degree :"B.Tech"

  }
  const [count, setCount] = useState(1);


//  useEffect(()=>setTimeout(() => {
//   setCount(count + 1)
//  }, 1000));

  
  return (
    <>
      <Card bio = {myBio}/>
      
      <button  onClick={()=>setCount(count+1)}>Start Count {count} </button>
    </>
  )
}

export default App
