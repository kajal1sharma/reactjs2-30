// snippets
import React from 'react'
import {arr} from "./data/image"
const ImageDisplayer = () => {
  return (
    <div>
        [
            <img src={arr[0]} alt=".." style={{width:"200px", height:"200px"}}/>,
            <img src={arr[1]} alt=".." style={{width:"200px", height:"200px"}}/>,
            <img src={arr[2]} alt=".." style={{width:"200px", height:"200px"}}/>,
            <img src={arr[3]} alt=".." style={{width:"200px", height:"200px"}}/>
        ]


        {arr.map((ele)=>{
            return <img src={ele} alt=".." style={{width:"200px", height:"200px"}}/>
        })}
        
        {/* <img src={arr[0]} alt=".." style={{width:"200px", height:"200px"}}/>

        <img src={arr[1]} alt=".." style={{width:"200px", height:"200px"}}/>

        <img src={arr[2]} alt=".." style={{width:"200px", height:"200px"}}/>

        <img src={arr[3]} alt=".." style={{width:"200px", height:"200px"}}/> */}
      {/* <img src={Img} alt=".." style={{width:"300px", height:"300px"}}/>
      <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"  alt=".." style={{width:"400px", height:"400px"}}/>
      <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"  alt=".." style={{width:"400px", height:"400px"}}/>
      <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"  alt=".." style={{width:"400px", height:"400px"}}/>
      <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"  alt=".." style={{width:"400px", height:"400px"}}/> */}
    </div>
  )
}

export default ImageDisplayer
