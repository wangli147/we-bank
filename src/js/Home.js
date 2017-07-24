import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/home.css';
import phone1 from '../imgs/phone1.png';
import phone2 from '../imgs/phone2.png';
import phone3 from '../imgs/phone3.png';
import penguin from '../imgs/qier.png';


import Footer from './Footer'
class Home extends Component {
  render() {
    return (
	    <div>
	    	<div className="wl_home modPage modBand">
	    		{/*首页bg*/}
	    		<div className="wl_boxed">
	    			<div className="wl_vertical">
	    				<div className="wl_align clear">
	    					<div className="wl_left left">
	    						<h1 className="wl_title delay-1"> 
	    							腾讯牵头发起设立的银行
	    						</h1>
	    						<p className="wl_pull">
	    							从一次惊喜
	    							<span>到每次相伴</span>
	    						</p>
	    					</div>
	    					<div className="wl_right right">
	    						<div className="wl_align">
    								<div className="wl_images">
	    								<img className="wl_phoneO" src={phone1}/>
	    								<img className="wl_phoneS" src={phone2}/>
	    								<img className="wl_phoneT" src={phone3}/>
	    								<img className="wl_penguin a-delay" src={penguin}/>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	     	{/*<Footer />*/}
	    </div>

    );
  }
}

export default Home;
