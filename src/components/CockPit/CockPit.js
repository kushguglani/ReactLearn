import React,{Component} from 'react';
import Radium from 'radium';

class CockPit extends Component{
    constructor(props){
        super(props);
    }
    render(){
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
        if(this.props.persons.length<3){
            classes.push('red')
        }
        if(this.props.persons.length<2){
            classes.push('bold')
        }
        if(this.props.persons.length < 1 || !this.props.showPersons){
            classes.push('noDisplay')
        }else{
            classes.pop('noDisplay');
        }
         
        if(this.props.showPersons){
            style.backgroundColor="#fd4e4e";
            style[':hover']={
                backgroundColor:'red',
                color:'black'
            }
        }
        return(
            <div>
                <h1>Hello World! in {this.props.title}</h1>
                <p className={classes.join(' ')}> list of persons</p>
                <button style={style} onClick={this.props.click}>Toggle Person</button>
            </div>
        );
    }
}

export default Radium(CockPit);