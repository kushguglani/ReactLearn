import React from 'react';
import Person from './Person/Person';

const persons = (props)=>(
    props.persons.map((person,index)=>{
        return <Person 
        click={()=>props.delete(index)} 
        name={person.name} 
        age ={person.age} 
        key ={person.id}
        nameChange = {(event)=>props.change(event,person.id)} />
    })
);
export default persons;