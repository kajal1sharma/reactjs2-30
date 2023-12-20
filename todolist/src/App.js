import InputContainer from "./components/InputContainer";
import TaskContainer from "./components/TaskContainer";
import Counter from "./components/Counter";
import { useState } from "react";
import Todo from "./components/Todo";
function App(){
  // const [task , setTask] = useState("");
  return (
    <div style={{backgroundColor:"blue", width:'400px', height:"500px", margin:"auto",marginTop:"100px"}}>
        <Todo/>
        {/* <InputContainer setTask = {setTask}/>
        <TaskContainer newtask={task}/> */}

        {/* <Counter/> */}
    </div>
  
  )

}


export default App;