import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    constructor(props){
        super(props);
        console.log("Persons :"+props);
		console.log(props);
    }
    componentWillMount(){
		console.log("Persons : will Mount");
	}
	componentDidMount(){
		console.log("Persons : did Mount");
    }
    componentWillReceiveProps(nextProps){
        console.log("Update Persons Will:",nextProps);
    }
    shouldComponentUpdate(nextProps,nextState){
        
        console.log("Update Persons should :",nextProps,nextState);
        return true;
    }
    componentDidUpdate(){
        console.log("Update Persons did ");
    }
    render(){
		console.log("Persons : render");
        return(
            this.props.persons.map((person,index)=>{
                return <Person 
                click={()=>this.props.delete(index)} 
                name={person.name} 
                age ={person.age} 
                key ={person.id}
                nameChange = {(event)=>this.props.change(event,person.id)} />
            })
        );
    }
}
export default Persons;