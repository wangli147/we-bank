import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/home.css';
import $ from 'jquery';
import phone1 from '../imgs/phone1.png';
import phone2 from '../imgs/phone2.png';
import phone3 from '../imgs/phone3.png';
import penguin from '../imgs/qier.png';
import pic1 from '../imgs/pic1.jpg';
import pic2 from '../imgs/pic2.jpg';
import weixin from '../imgs/1.png';
import er1 from '../imgs/w1.png';
import er2 from '../imgs/qrcode.png';


import Footer from './Footer'
class Home extends Component {
	componentDidMount(){
		var deviceLeft=document.getElementById('deviceLeft');
		var scroll=document.getElementById('scroll');
		var header=document.getElementById('header');			
		var headerS=document.getElementById('headerS');
		var headerS=document.getElementById('headerS');
		var iphone=document.getElementById('iphone');
		var t = scroll.offsetTop;
		window.addEventListener('scroll',function(){
			 var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		        console.log(scrollTop,t);
		        if(scrollTop>t){
		            headerS.style.display='block';
		            headerS.style.transition='.5s';
		            headerS.style.height='60px';
		            header.style.display='none';
		            deviceLeft.style.position = 'fixed';		            
		        }
		        else{
		            header.style.position = 'fixed';
		            deviceLeft.style.position = 'absolute';
		            header.style.top = '0';
		             deviceLeft.style.top = '50px';
		            header.style.display='block';
		            headerS.style.display='none';
		        }
			console.log(scrollTop)
		})
		
		
	}
  render() {
    return (
	    <div>
	    	<div className="wl_home modPage modBand" id="no">
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
	    			<div className="wl_button">
	    				<i className="wl_icon"></i>
	    			</div>
	    		</div>
	    	</div>
	    	<div className="modPage wl_scroll modBand" id="scroll">
    			<div className="wl_wraper" id="deviceLeft">
    				<div className="wl_vertical">
    					<div className="wl_align">
    						<div className="wl_device">
    							<div className="wl_container">
    								<Carousel autoplay>
									    <div><img src={pic1} /></div>
									    <div><img src={pic2} /></div>
									 </Carousel>
    							</div>
    						</div>
    					</div>
    				</div>
				</div>
				<div className="text-wraper">
					<div className="step_text">
						<div className="wl_vertical">
							<div className="wl_align">
								<img src={weixin} className="right_img"/>
								<h2 className="subtitle">微粒贷</h2>
								<h3 className="subtitleBom">让您的微小心愿立刻实现！</h3>
								<div className="wl_weixin">
									<div className="wl_leftWei">
										<img src={er1}/>
										请用微信扫描二维码
									</div>
									<div className="wl_RightQQ">
										<img src={er2}/>
										请用手机QQ扫描二维码
									</div>
								</div>
								<p className="wl_details">
									<a href="#">了解详情</a>
								</p>
							</div>
						</div>
					</div>
					<div className="step_text">
						<div className="wl_vertical">
							<div className="wl_align">
								<img src={weixin} className="right_img"/>
								<h2 className="subtitle">微众银行APP</h2>
								<h3 className="subtitleBom">We给您带来更舒适便捷的银行服务体验！</h3>
								<div className="wl_weixin">
									<div className="wl_leftWei">
										<img src={er1}/>
										请用微信扫描二维码
									</div>
								</div>
								<p className="wl_details detOrange">
									<a href="#">了解详情</a>
								</p>
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
