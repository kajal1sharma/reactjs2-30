import InputContainer from "./components/InputContainer";
import TaskContainer from "./components/TaskContainer";

function App(){

  return (
    <div style={{backgroundColor:"blue", width:'400px', height:"500px", margin:"auto",marginTop:"100px"}}>
        <InputContainer/>
        <TaskContainer/>
    </div>
  
  )

}


export default App;