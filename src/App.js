import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css';
import Home from './js/Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
	    <div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={Home}/>
	    </div>
  </Router>
    );
  }
}

export default App;
