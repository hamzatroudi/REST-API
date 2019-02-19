import React, { Component } from 'react';
import {connect} from 'react-redux';
import Contact from './contact';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom'
class ListContact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount=()=>{
            axios.get('/get-contact').then((res)=>this.props.updateContactReducer(res.data))
        }

    




    render() { 
        return (<div className='contact-list-container'>
         <h2>Contact List</h2>
        <div className='contact-list-container1'>
        {
            this.props.contacts.map((el,index)=><Contact item={el} key={index}/>)
        }
        

</div>
<Link to='/'>
        <button>Home</button>
        </Link>

        </div>  );
    }
}
 




const mapStateToProps=(state)=>{

return{

    contacts: state.contactReducer
}

}


const mapDispatchToProps=(dispatch)=>
{
    return {
        updateContactReducer:contacts=>
        {
            dispatch({
                type:'UPDATE_CONTACTS',
                contacts
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListContact);