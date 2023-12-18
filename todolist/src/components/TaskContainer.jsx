import React from 'react'
import SingleTask from './SingleTask'
const TaskContainer = () => {
  return (
    <div style={{border:"5px solid yellow",height:"300px", marginTop:"50px", marginLeft:"50px", marginRight:"50px"}}>
      
        <SingleTask text={"read newspaper"} count={1}/>
        <SingleTask text="cook meal" count={2}/>
        <SingleTask  text="go for a walk" count={3}/>
        <SingleTask text="wake up at 7" count={4}/>

    </div>
  )
}

export default TaskContainer
