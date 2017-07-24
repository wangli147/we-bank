import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css';
import Home from './js/Home';
import Finance from './js/Finance';
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
          <li><Link to="/Finance">个人金融</Link></li>
	      </ul>

	      <hr/>
	      <Route exact path="/" component={Home}/>
        <Route exact path="/Finance" component={Finance}/>
	    </div>
  </Router>
    );
  }
}

export default App;
