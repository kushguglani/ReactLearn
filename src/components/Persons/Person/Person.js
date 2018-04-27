import React from 'react';
import  './Person.css'
import Radium from 'radium';

const person = (props)=>{
    const style ={
        '@media (min-width : 500px)':{
            width:'450px'
        }
    };
    
    // const rndm = Math.random();
    // console.log(rndm);
    // console.log("kush");
    // if(rndm>0.5){
    //     throw new Error("Something went wrong");
    // }
    return(
        <div className="Person" style= {style}>
            <p onClick={props.click}> Hello my name is {props.name} and my age is {props.age}</p>
            <p>{props.children} {props.hobbies}</p>
            <input type="text" onChange={props.nameChange} value={props.name} />
        </div>
    );
}

export default Radium(person);