import React from 'react'

// const SingleTask = (props) => {

const SingleTask =({text, count})=>{
    // let text = props.text
  return (
    <p style={{border:"2px solid white", color:"white", fontSize:"20px"}}>
       {text}
       {count}
       
        {/* {props.count}
        {text} */}
    </p>
  )
}

export default SingleTask
