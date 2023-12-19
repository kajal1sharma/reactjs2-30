import React from 'react'

const Counter = () => {
  let count = 0;
  return (
    <div style={{color:"white",display:"flex",flexDirection:"column", alignItems:"center"}}>
      <h1 >Counter</h1>
      <h2>{count}</h2>
      <button onClick={function(){
          count++;
          console.log(count)
      }}>
        Increment
      </button>
      <button onClick={function(){
          count--;
          console.log(count)
      }}>
        Decrement</button>
    </div>
  )
}

export default Counter
