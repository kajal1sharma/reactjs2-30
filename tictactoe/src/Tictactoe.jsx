import React, { useState } from 'react'
import "./tictactoe.css"
const Tictactoe = () => {
    let arr =[".",".",".",".",".",".",".",".","."]
    const [boardArr , setBoardArr] = useState(arr)    
return (
    <div className='board'>

        {boardArr.map(function(ele, ind){
            return <button
            onClick={()=>{
                boardArr[ind]="X"
                setBoardArr([...boardArr])
            }}
            >{ele}</button>
        })}

        {/* <button>0</button>
        <button>0</button>
        <button>0</button>
        <button>0</button>
        <button>0</button>
        <button>0</button>
        <button>0</button>
        <button>0</button>
        <button>0</button> */}
    </div>
  )
}

export default Tictactoe
