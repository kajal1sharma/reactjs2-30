import React from 'react'

const InputContainer = ({setTask}) => {

    let objstyle = {padding:"20px",color:"red", width:"200px"}
    let task ="";
  return (
    <div style={{textAlign:"center", paddingTop:"50px"}}>
       <input style={objstyle} onChange={function(event){
        // console.log(event.target)
        task= event.target.value;
       }}/>
       <button style={{padding:"20px"}} onClick={function(){
        setTask(task);
       }}>Add</button>
       {console.log("hello world")}
    </div>
  )
}

export default InputContainer
