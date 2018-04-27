import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

import Persons from '../components/Persons/Persons';
import CockPit from '../components/CockPit/CockPit';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			persons:[
				{id:"as1", name:"krishna",age:undefined},
				{id:"as2", name:"kush",age:25,hobbies:"chanting"},
				{id:"as3", name:"kush1",age:25,hobbies:"chanting"}
			],
			showPersons:false
		}
		console.log("App : ");
		console.log(props);
	}

	componentWillMount(){
		console.log("App : will Mount");
	}
	componentDidMount(){
		console.log("App : did Mount");
	}

	changeSateDataHAndler=(personName)=>{
		this.setState({
			persons:[
				{name:personName,age:undefined},
				{name:personName,age:25,hobbies:"chanting"}
			]
		})
	}

	nameChangeHandler = (event,id)=>{
		
		const index = this.state.persons.findIndex((person)=>{
			return person.id === id;
		})
		const person = {
			...this.state.persons[index]
		}
		person.name = event.target.value;
		const persons = [
			...this.state.persons
		]
		persons[index] = person;
		this.setState({persons:persons});
	}
	togglePerson = ()=>{
		let doesShow = this.state.showPersons;
		this.setState({showPersons : !doesShow});
	}
	deletePersonHandler =(personIndex)=>{
		// const persons = this.state.persons.splice();
		const persons = [...this.state.persons];
		persons.splice(personIndex,1);
		this.setState({persons})
	}
	

	render() {
		console.log("App : render")
		let person = null;
		if(this.state.showPersons){
			person=(
				<Persons 
				persons={this.state.persons} 
				delete={this.deletePersonHandler}
				change={this.nameChangeHandler} />
			);
		}
	
		return (
			<StyleRoot>	
				<div className="App">
				<CockPit 
					title={this.props.title}
					persons={this.state.persons}
					showPersons={this.state.showPersons}	
					click={this.togglePerson}/>
				{person}
				</div>
			</StyleRoot>
		);
	}
}

export default Radium(App);
