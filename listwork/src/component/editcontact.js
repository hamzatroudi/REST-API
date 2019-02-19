import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'',
                       phone:'',
                       email:'' }
    }
    handleChange=(event)=>
    {
        this.setState({ [event.target.name]:event.target.value })
    }
   
   
    componentDidMount() {
        
        this.setState({
            ...this.props.contacts.filter((el)=>(el._id==this.props.match.params.id))[0]
        })
    }
    // edit=()=>{
    //     this.props.editReducer({...this.state})
    // }

    edit=()=>
    {
       axios.put(`/edit-contact/${this.state._id}`,{
           name:this.state.name,
        phone:this.state.phone,
        email:this.state.email
     }) 
      .then(()=>this.props.editReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    
    render() { 


     //   console.log(this.props.contacts.filter((el)=>(el._id== this.props.match.params.id))[0])

 
        return ( <div className='edittt'>

       <h1>Modify Contact </h1>
       <h5>name:</h5>
       <input type="text" name='name'  value={this.state.name} onChange={this.handleChange}></input>
       <h5>phone:</h5>
       <input type="text" name='phone' value={this.state.phone} onChange={this.handleChange}></input>
       <h5>email:</h5>
       <input type="text" name='email' value={this.state.email} onChange={this.handleChange}></input>
       <br></br> 
       <Link to='/contacts'>
        <button onClick={this.edit}>Edit Contact</button>
        </Link>

       


        </div> );
    }
}

const mapStateToProps=(state)=>
{  return {
    contacts:state.contactReducer
}
}


const mapDispatchToProps=(dispatch)=>
{
    return {
   editReducer:editcontact=>
   {
     dispatch({
         type:'EDIT-CONTACT',
         editcontact
             })
   }
         }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditContact);