import React, { useState } from 'react'
import "./tictactoe.css"
import checkWinner from './util/checkWinner'
const Tictactoe = () => {
    let arr =[".",".",".",".",".",".",".",".","."]
    const [boardArr , setBoardArr] = useState(arr)  
     const [player , setPlayer] = useState("X")
     const [winner , setWinner] = useState(false);
    // let player ="X"
    
return  winner ?(<>
 <div className='board'>

{boardArr.map(function(ele, ind){
    return <button
    >{ele}</button>
})}

</div>
</>):(
    <div className='board'>

        {boardArr.map(function(ele, ind){
            return <button
            onClick={()=>{
                boardArr[ind]=player;
                let result =checkWinner(boardArr, player);
               
                setPlayer(player==='X'?'0':'X')
                console.log(player)
                console.log(boardArr)
                setBoardArr([...boardArr])
                if(result){
                    setWinner(result);
                }
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
