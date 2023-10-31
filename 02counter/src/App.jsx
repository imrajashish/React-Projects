import { useState } from "react";

function App() {
  let [counter, setvalue]=useState(0)
  // const addvalue = ()=>{
  //   counter = counter+1;
  //   setvalue(counter);
  // }
  // const  removeValue = ()=>{
  //   if(counter>0){
  //   counter = counter-1;
  //   setvalue(counter)
  //   }
  //}
  return (
    <>
    <h1>Chai or react</h1>
    <h2>this is the value:  {counter}</h2>

    <button onClick={()=> setvalue(counter+1)}>Add Value</button><br />
    <button onClick={()=>(counter>0)? setvalue(counter-1):alert("Enter the Grater than 0") }>Remove Value {counter}</button>
    </>
  )
}

export default App
