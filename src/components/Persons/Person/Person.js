import React,{Component} from 'react';
import  './Person.css'
import Radium from 'radium';

class Person extends Component{
    constructor(props){
        super(props);
		console.log("Person :"+props);
		console.log(props);
    }
    componentWillMount(){
		console.log("Person : will Mount");
	}
	componentDidMount(){
		console.log("Person : did Mount");
	}

    render(){
		console.log("Person : render");
        const style ={
            '@media (min-width : 500px)':{
                width:'450px'
            }
        }
        return(
            <div className="Person" style= {style}>
                <p onClick={this.props.click}> Hello my name is {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children} {this.props.hobbies}</p>
                <input type="text" onChange={this.props.nameChange} value={this.props.name} />
            </div>
        );
    }
}

export default Radium(Person);