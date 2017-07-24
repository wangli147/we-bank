import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css';
import Home from './js/Home';
import Finance from './js/Finance';
import logo from './imgs/logo.png';
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
  	    <div className="wl_fixed">
            <div className="wl_header clear">
                <div className="wl_merge clear">
                    <Link to="/"  className="wl_logo left"><img src={logo} alt="logo"/></Link> 
                     <ul className="right wl_nav">
                        <li className="active"><Link to="/">首页</Link></li>
                        {/*<li><Link to="/Qiye">企业金融</Link></li>*/}
                        <li><Link to="/finance">个人金融</Link></li>
                         {/*<li><Link to="/About">关于我们</Link></li>
                        <li><Link to="/News">公告新闻</Link></li>*/}
                     </ul>          
                </div>  
            </div>
        </div>

  	      <Route exact path="/" component={Home}/>
  	      <Route exact path="/finance" component={Finance}/>
          {/*<Route exact path="/Qiye" component={Qiye}/>
          
          <Route exact path="/About" component={About}/>
          <Route exact path="/News" component={News}/>*/}
      </div>
  </Router>
    );
  }
}

export default App;
