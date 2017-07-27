import React, { Component } from 'react';
import '.././App.css';
import '../css/AboutMe.css';
import AboutImage from '../imgs/aboutMe.jpg';
import Image1 from '../imgs/gd01.png';
import Image2 from '../imgs/gd02.png';
import Image3 from '../imgs/gd03.png';
import peo1 from '../imgs/peo1.jpg';
import peo2 from '../imgs/peo2.jpg';
import peo3 from '../imgs/peo3.jpg';
class AboutMe extends Component {
  render() {
    return (
    	<div className="x-warp">
		 <ul className="AboutMe"> 
		 	<li className='listO'>
              <h4>微众银行 
              	<a><span></span></a>
              </h4>
              <div className="banJR clear">
                 <img src={AboutImage} alt="AboutImage" title="AboutImage"/>
              </div>
              <div className="Head-content">
	              <h2>微众银行</h2>
	              <p>微众银行是国内首家开业的民营银行，由腾讯、百业源和立业等多家知名企业发起设立</p>
	              <p>于2014年12月获得由深圳银监局颁发的金融许可证，注册资本为人民币42亿元</p>
	              <p>微众银行严格遵守国家金融法律法规和监管政策，以合规经营和稳健发展为基础</p>
	              <p>致力于为普罗大众、微小企业提供差异化、有特色、优质便捷的金融服务</p>
              </div>
          </li>
             <li className='listS'>
              <h4>股东和管理层 <a><span></span></a></h4>
            <div className="listS-content">
              <h2>主要股东</h2>
              <div className="yqlj clear">
                <a href="#"><img src={Image1} alt="" />腾讯</a>
                <a href="#"><img src={Image2} alt="" />百业源投资</a>
                <a href="#"><img src={Image3} alt="" />立业集团</a>
              </div>
              <h5>管理层</h5>
              <div className="Peoclass clear">
                <div className="peolist">
                  <img src={peo1} alt="pe01" />
                  <p>顾敏 （董事长）</p>
                </div>
                <div className="peolist">
                  <img src={peo2} alt="pe02" />
                  <p>李南青 （行长）</p>
                </div>
                <div className="peolist">
                  <img src={peo3} alt="pe03" />
                  <p>梁瑶兰 （监事长）</p>
                </div>
              </div>
            </div>
          </li>
          <li className="listT">         
          </li>
          <li className="listTh">         
          </li>
          <li className="listF">         
          </li>

		 </ul>	    
	    </div>

    );
  }
}

export default AboutMe;
