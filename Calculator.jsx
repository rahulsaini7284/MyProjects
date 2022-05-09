import React,{useState} from 'react'
import "./calculator.css"
const Calculator = () => {
    const [result,setResult]=useState("");
    
   const clickHandler=(event)=>{
        setResult(result.concat(event.target.value))
   }
const submit=()=>{
  
    setResult(eval(result).toString());
}
const clear=()=>{
    setResult("");
}
const clearOne=()=>{
 let res=result.slice(0,-1);
 setResult(res)
}
//hjsfhkjshkjshfk

    
  return (
    <div className='bodyDiv'>
        <input type="text" className='display ' value={result} placeholder={0}/>
        <input type="button" className='btn' onClick={clear} value="C" />
        <input type="button" className='btn' onClick={clearOne} value="<X"/>
        <input type="button" className='btn' onClick={clickHandler} value="%" />
        <input type="button" className='btn' onClick={clickHandler} value="/"/>
        <input type="button" className='btn' onClick={clickHandler} value="7"/>
        <input type="button" className='btn' onClick={clickHandler} value="8"/>
        <input type="button" className='btn' onClick={clickHandler} value="9"/>
        <input type="button" className='btn' onClick={clickHandler} value="*"/>
        <input type="button" className='btn' onClick={clickHandler} value="4"/>
        <input type="button" className='btn' onClick={clickHandler} value="5"/>
        <input type="button" className='btn' onClick={clickHandler} value="6"/>
        <input type="button" className='btn' onClick={clickHandler} value="-"/>
        <input type="button" className='btn' onClick={clickHandler} value="1"/>
        <input type="button" className='btn' onClick={clickHandler} value="2"/>
        <input type="button" className='btn' onClick={clickHandler} value="3"/>
        <input type="button" className='btn' onClick={clickHandler} value="+"/>
        <input type="button" className='btn' onClick={clickHandler} value="0"/>
        <input type="button" className='btn' onClick={clickHandler} value="."/>
        <input type="button" className='btnSubmit' onClick={submit} value="=" />
    </div>
  )
}

export default Calculator