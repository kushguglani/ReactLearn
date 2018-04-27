import React,{Component} from "react";

class ErrorBoundary extends Component {
    state ={
        hasError = false,
        errorMessage = ""
    }
    checkError = (err,info)=>{
        this.setState({hasError:true,errorMessage:err})
    }
    render(){
            if(this.setState.hasError){
                return(<h1>{this.state.errorMessage}</h1>);
            }
            else{
                return this.probs.children;
            }
    }
    
}