import React from "react";

class Calculator extends React.Component{
    
    constructor(){
        super();
        this.number1=90;
        this.number2=80;
    }
    
    addNumber1(){

    }
    render(){
        return <div>
            <h1>
                Iam a Calculator
            </h1>
            <h2>
                Enter your Numbers
            </h2>

            <input placeholder="number1" onChange={(event)=>{
                this.number1=event.target.value
            }} />
            <br/>
            <input placeholder="number2" onChange={(event)=>{
                this.number2=event.target.value
            }}/>
            <br/>
            <button onClick={()=>{
                console.log(this.number1)
                console.log(this.number2)
            }} >Display On Console</button>
        </div>
    }
}

export default Calculator;