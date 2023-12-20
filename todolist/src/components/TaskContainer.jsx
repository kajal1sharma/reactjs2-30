import React from 'react'
import SingleTask from './SingleTask'


let arr =["read newspaper"]
const TaskContainer = ({newtask}) => {
  // let arr =[{name:"read newspaper"},{name:"cook meal"},{name:"go for a walk"}
  // ,{name:"go for a walk"}]

 
  arr.push(newtask);
  return (
    <div style={{border:"5px solid yellow",height:"300px", marginTop:"50px", marginLeft:"50px", marginRight:"50px"}}>
      

        {arr.map((ele, index)=>{
          return <SingleTask text={ele} count={index+1}/>
        })}

        {/* <SingleTask text={"read newspaper"} count={1}/>
        <SingleTask text="cook meal" count={2}/>
        <SingleTask  text="go for a walk" count={3}/>
        <SingleTask text="go for a walk" count={4}/> */}

    </div>
  )
}

export default TaskContainer
