import React from "react";
import Result from "./Result";
class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.number1 = 0;
        this.number2 = 0;
        this.result = 0;
        this.state={result:0}//as state
    }

    print(){

    }
    read(){

    }
    // JSX return 
    render(){
        return <div>
            <h1>Calculator</h1>
            <div>
                <label>Number 1</label>
                <input onChange={(event)=>{
                    this.number1= Number(event.target.value);
                }}/>
                <br/>
                <label>Number 2</label>
                <input onChange={(event)=>{
                    this.number2= Number(event.target.value);
                }}/>
            </div>
            <div>
                <button onClick={()=>{
                
                    this.result=this.number1+this.number2
                    this.setState({result:(this.number1+this.number2)})
                    console.log(this.number1,this.number2,this.result)
                }}>+</button>
                <button>-</button>
                <button>/</button>
                <button>*</button>
            </div>

            <Result  result={this.state.result}/>
        </div>
    }
}

export default Calculator;

// Class component