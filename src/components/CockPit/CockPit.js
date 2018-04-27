import React from 'react';
import Radium from 'radium';

const cockPit = (props)=>{
    
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
    const classes = [];
    if(props.persons.length<3){
        classes.push('red')
    }
    if(props.persons.length<2){
        classes.push('bold')
    }
    if(props.persons.length < 1 || !props.showPersons){
        classes.push('noDisplay')
    }else{
        classes.pop('noDisplay');
    }
    
    if(props.showPersons){
        style.backgroundColor="#fd4e4e";
        style[':hover']={
            backgroundColor:'red',
            color:'black'
        }
    }
    return(
        <div>
            <h1>Hello World!</h1>
            <p className={classes.join(' ')}> list of persons</p>
            <button style={style} onClick={props.click}>Toggle Person</button>
        </div>
    );
}

export default Radium(cockPit);