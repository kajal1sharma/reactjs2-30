import React from 'react'

const SingleTask = (props) => {
    let text = props.text
  return (
    <p style={{border:"2px solid white", color:"white", fontSize:"20px"}}>
        {props.count}
        {text}
    </p>
  )
}

export default SingleTask
