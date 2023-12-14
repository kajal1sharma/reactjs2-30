import React from 'react'

const SingleTask = (props) => {
    let task= props.text;
  return (
    <div style ={{marginTop:"20px",border:"5px solid yellow",color:"white", fontSize:"32px"}}>
       {task}
    </div>
  )
}

export default SingleTask
