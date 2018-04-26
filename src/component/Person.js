import React from 'react';
import  './Person.css'

const person = (props)=>{
    return(
        <div className="Person">
            <p onClick={props.click}> Hello my name is {props.name} and my age is {props.age}</p>
            <p>{props.children} {props.hobbies}</p>
            <input type="text" onChange={props.nameChange} value={props.name} />
        </div>
    );
}

export default person;