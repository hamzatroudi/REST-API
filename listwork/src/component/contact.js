import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
 
     delete=()=>{
         const {item}= this.props
      axios.delete(`/delete-contact/${item._id}`)
      .then(()=>this.props.deleteReducer(item._id))
      .catch((err)=>alert(err))

     }

    render() { 
        const {item}=this.props
        return ( <div className="contact">
           <h1>Contact</h1>
           <p>name: {item.name}</p>
           <p>phone: {item.phone}</p>
           <p>email: {item.email}</p>
           <Link to= {`/editcontact/${item._id}`}>
                    <button >Edit </button>
                    </Link>
                    <button onClick={this.delete}>Supprimer </button>



        </div> );
    }
}

const mapDispatchToProps=(dispatch)=>
{
     return {
         deleteReducer:_id=>
         {
             dispatch({
                 type:'DELETE_CONTACT',
                 _id
             })

         }
     }
}

 
export default connect (null,mapDispatchToProps)(Contact);