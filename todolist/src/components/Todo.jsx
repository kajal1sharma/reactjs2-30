import React, { useState } from 'react'

const Todo = () => {
    let inputval="";
    const [taskList , setTaskList] = useState([])
  return (
    <div>
      <input onChange={function(event){
            inputval= event.target.value;
      }} />
      <button onClick={function(){
      //  setTaskList(taskList.push(inputval))
        setTaskList([...taskList,inputval])
      }}>Add</button>

      {taskList.map((ele)=>{
        return <p>{ele}</p>
      })}

    </div>
  )
}

export default Todo
