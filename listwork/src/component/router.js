import React, { Component } from 'react';
import Home from './home'
import ListContact from './listcontact'
import AddContact from './addcontact'
import EditContact from './editcontact';
import { BrowserRouter, Route, Link } from 'react-router-dom'
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>
            <Route exact path='/' component={Home}/>  
            <Route exact path='/contacts' component={ListContact}/>
            <Route exact path='/addconatct' component={AddContact}/>
            <Route exact path='/editcontact/:id' component={EditContact}/>


        </div>);
    }
}
 
export default Routes;