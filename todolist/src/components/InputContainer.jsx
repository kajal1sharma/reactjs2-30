import React from 'react'

const InputContainer = () => {

    let objstyle = {padding:"20px",color:"red", width:"200px"}

  return (
    <div style={{textAlign:"center", paddingTop:"50px"}}>
       <input style={objstyle}/>
       <button style={{padding:"20px"}}>Add</button>
       {console.log("hello world")}
    </div>
  )
}

export default InputContainer
