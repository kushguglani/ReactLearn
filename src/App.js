import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

import Person from './component/Person.js'
import './App.css';

class App extends Component {
	
	state={
		persons:[
			{id:"as1", name:"krishna",age:undefined},
			{id:"as2", name:"kush",age:25,hobbies:"chanting"},
			{id:"as3", name:"kush1",age:25,hobbies:"chanting"}
		],
		showPersons:false
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
		const style = {
			backgroundColor:"#59ed5f",
			color:"white",
			border:"2px solid #f39c12",
			boxShadow: "0 1px 1px #eee", 
			cursor:"pointer",
			borderRadius:"200px",
			padding:"20px",
			outline:"none",
			":hover":{
				backgroundColor:"#6afe6f",
				color:'black'
			}
		}
		let person = null;
		if(this.state.showPersons){
			person=(
				<div>
					{this.state.persons.map((person,index)=>{
						return <Person 
						click={()=>this.deletePersonHandler(index)} 
						name={person.name} 
						age ={person.age} 
						key ={person.id}
						nameChange = {(event)=>this.nameChangeHandler(event,person.id)} />
					})}
				</div>
			);
			style.backgroundColor="#fd4e4e";
			style[':hover']={
				backgroundColor:'red',
				color:'black'
			}
		}
		const classes = [];
		if(this.state.persons.length<3){
			classes.push('red')
		}
		if(this.state.persons.length<2){
			classes.push('bold')
		}
		if(this.state.persons.length < 1 || !this.state.showPersons){
			classes.push('noDisplay')
		}else{
			classes.pop('noDisplay');
		}
		return (
			<StyleRoot>	
				<div className="App">
					<h1>Hello World!</h1>
					<p className={classes.join(' ')}> list of persons</p>
					<button style={style} onClick={this.togglePerson}>Toggle Person</button>
					{/* { this.state.showPersons?
					<div>
						<Person nameChange={this.nameChangeHandler}  click={this.changeSateDataHAndler.bind(this,'Kanha')} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
						<Person nameChange={this.nameChangeHandler} click={()=> this.changeSateDataHAndler('bhakt')} name={this.state.persons[1].name} age={this.state.persons[1].age} hobbies={this.state.persons[1].hobbies}>My hobbies are :</Person>
					</div>
					:null
					} */}
					{person}
				</div>
			</StyleRoot>
		);
		// return(React.createElement('div',{className:'App'},React.createElement('H1','','Hello World!')));
	}
}

export default Radium(App);
