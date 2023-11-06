import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const[password,setpassword] = useState("")

  const  passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*{}[]+=`";
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length+1);     
      pass += str.charAt(char)
    }
    setpassword(pass);
  },[length,numberAllowed,charAllowed,setpassword])

 const copypasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
 },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  

  return (
    <>
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
    <h1 className="text-4xl font-medium  my-3">Auto password Generate</h1>
      <div className="text-slate-500">
              <input type="text" value={password} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Password' readOnly ref={passwordRef} />
              <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypasswordToClipBoard}>Copy</button>
      </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setlength(e.target.value)} 
            />
            <label >Length:{length}</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=> setnumberAllowed((prev)=>!prev)} />
            <label >Number</label>
          </div>
          <div className='flex items-center gap-x-2'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id= "charInput"
              onChange={()=>setcharAllowed((pr)=> !pr)}
               />
              <label >Character</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
