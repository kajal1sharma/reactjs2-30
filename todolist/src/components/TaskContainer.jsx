import React from 'react'
import SingleTask from './SingleTask'
const TaskContainer = () => {
  return (
    <div style={{border:"5px solid yellow",height:"300px", marginTop:"50px", marginLeft:"50px", marginRight:"50px"}}>
      
        <SingleTask text="read newspaper"/>
        <SingleTask text="cook meal"/>
        <SingleTask text="go for a walk"/>
        <SingleTask text="wake up at 7"/>

    </div>
  )
}

export default TaskContainer
