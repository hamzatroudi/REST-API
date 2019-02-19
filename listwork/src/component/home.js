import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="home">
            <h1>Home page</h1>
            <Link to='/contacts'>
            <button> List contact</button>
            </Link>
            <Link to='/addconatct'>
            <button> Add contact</button>
            </Link>
           



        </div> );
    }
}
 
export default Home ;