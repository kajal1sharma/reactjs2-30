import React from 'react'
import SingleTask from './SingleTask'
const TaskContainer = () => {
  return (
    <div style={{border:"5px solid black", marginTop:"50px", textAlign:"center"}}>
        <SingleTask text="go to gym"/>
        <SingleTask text="read some books"/>
        <SingleTask text="cook some food"/>
        <SingleTask text="have dinner"/>
    </div>
  )
}

export default TaskContainer
