import React,{useState} from 'react'
import './counter.css';



export default function Count() {
    const[count,setCount]=useState(0);
    function decrement(){
      setCount(prevcount=>prevcount-1);
    }
    function increment(){
      setCount(prevcount=>prevcount+1);
    }
    function reset(){
        setCount(prevcount=>0);
    }
  return (

    <>  
    <h1>Count App</h1>
    <div className='container'>
    

        <div className="box">

        <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>

    <div className='resetdiv'>
    <button className='reset' onClick={reset}>Reset</button>
    </div>


        </div>
     
    </div>
    </>
  )
}
