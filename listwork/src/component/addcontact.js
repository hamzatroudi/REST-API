import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios';
class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'',
                       phone:'',
                       email:'' }
                       }

    handlechange=(event)=>{
       this.setState({name:event.target.value})
    }
    handlechange1=(event)=>{
        this.setState({phone:event.target.value})
     }
     handlechange2=(event)=>{
        this.setState({email:event.target.value})
     }

    // add=()=>{

    //     this.props.addReducer({...this.state,_id:Math.random()*1000+''})
    // }

    add=()=>{
    axios.post('/add-contact',{...this.state})
    .then(()=>this.props.addReducer({...this.state}))
    .catch((err)=>alert(err))
    }

    render() { 
        return ( <div className='add-contact-container'>

       <h1>Add Contact Page</h1>
       <h5>name:</h5>
       <input type="text" name='name' onChange={this.handlechange}></input>
       <h5>phone:</h5>
       <input type="text" name='phone' onChange={this.handlechange1}></input>
       <h5>email:</h5>
       <input type="text" name='email' onChange={this.handlechange2}></input>
       <br></br>
       <Link to='/contacts'>
        <button onClick={this.add} className="btnadd">Add Contact</button>
        </Link>



        </div> );
    }
}



const mapDispatchToProps=(dispatch)=>{

    return {
    addReducer:newcontact=>
    {
        dispatch({
            type:'ADD-CONTACT',
            newcontact
        })
    }
    }

}
 
export default connect(null,mapDispatchToProps)(AddContact);