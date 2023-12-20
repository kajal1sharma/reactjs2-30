import React from 'react'
import { useState } from 'react';
const Counter = () => {
  // let count = 0;
  // let count1 =0
  const [count, setCount]=useState(0)
  return (
    <div style={{color:"white",display:"flex",flexDirection:"column", alignItems:"center"}}>
      <h1 >Counter</h1>
      <h2>{count}</h2>
      <button onClick={function(){
          setCount(count+1)
          console.log(count)
      }}>
        Increment
      </button>
      <button onClick={function(){
          setCount(count-1)
          console.log(count)
      }}>
        Decrement</button>
    </div>
  )
}

export default Counter
