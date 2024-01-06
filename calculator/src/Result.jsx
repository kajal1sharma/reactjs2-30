import React from "react";
class Result extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{margin:"auto",border:"1px solid black", width:"100px", height:"100px"}}>
            {this.props.result}
        </div>
    }
}


export default Result