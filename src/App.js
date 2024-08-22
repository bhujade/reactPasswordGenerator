 
import { useState } from 'react';
import './App.css';
import{LC,UC,SC,NC} from './data/PassChar.jsx'

function App() {
  let[uppercase,setUppercase] = useState(false);
  let[lowercase,setLowercase] = useState(false);
  let[number,setNumber] = useState(false);
  let[symbols,setSymbols] = useState(false);
  let[passwordLen,setPasswordLen] = useState(10);
  let[fPass,setFpass] =useState();


  let createPassword=()=>{
    let finalPass='';
    let charSet='';

      if(uppercase || lowercase || symbols || number){
        if(uppercase) charSet+=UC;
        if(lowercase) charSet+=LC;
        if(number)    charSet+=NC;
        if(symbols)   charSet+=SC;
        for(let i=0;i<passwordLen;i++){
          finalPass+= charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
       
        // console.log(finalPass)
        setFpass(finalPass)
        
      }else{
        alert("please atleast one check!....")
      }
  }

  let copyPass =()=>{
    navigator.clipboard.writeText(fPass)
  }
  return (
    <div className="App">
      <div className='passwordBox'>
        <h2>Generator Random</h2>

        <div className='passwordBoxIn'>
          <input type='text' value={fPass} readOnly/><button onClick={copyPass}>Copy</button>
        </div>

        <div className='passLength'>
            <label>password Length</label>
            <input type='number' value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)} max={20} min={10}/>
        </div>

        <div className='passLength'>
            <label>Include upperCase</label>
            <input type='checkBox' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>

        <div className='passLength'>
            <label>Include lowerCase</label>
            <input type='checkBox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>

        <div className='passLength'>
            <label>Include number</label>
            <input type='checkBox' checked={number} onChange={()=>setNumber(!number)} />
        </div>

        <div className='passLength'>
            <label>Include symbols</label>
            <input type='checkBox' checked={symbols} onChange={()=>setSymbols(!symbols)} />
        </div>

        <button className='btn' onClick={createPassword}>Generate button</button>
      </div>
    </div>
  );
}

export default App;
