import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/news.css';
import Footer from './Footer';
import $ from 'jquery';
class Finance extends Component {
	  componentDidMount(){
  	$(function(){
  		$('.new-tit>li').click(function(){
  			 var index=$(this).index();
  			 $('.x-first li').eq(index).addClass('x-one').siblings().removeClass('x-one');
     //        $('.x-first>li').eq(index).css('color','red')
  			// $(this).css('color','red')





  		})
  	})
  }


  render() {
    return (
    	<div>
    	<div className="x-warp-end">
	   		<div className="x-news-box">	   		
	   			<ul className="x-first">
		   			<li className="x-one">
		   				<h2>重要新闻</h2>
		   				<div className="new-con">
		   					<p>
				   				微众银行2016年年度报告
				   				<span className="right">2017-03-03</span>
				   			</p>
		   					<p>
				   				严正声明
				   				<span className="right">2017-03-03</span>
				   			</p>
		   					<p>
				   				深圳前海微众银行关于经营场所变更的公告
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				深圳前海微众银行股份有限公司服务价目表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				关于落实《中国人民银行关于加强支付结算管理防范电信网络新型违法
				   				犯罪有关事项的通知》
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				如何从他行转账至微众卡？
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行个人银行结算账户功能介绍
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行人民币存款利率表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行人民币贷款利率表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   		</div>
		   			</li>
		   			<li>
		   				<div className="new-con">
		   					<h2>新闻看点</h2>
		   					<p>
				   				2
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				深圳前海微众银行股份有限公司服务价目表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				关于落实《中国人民银行关于加强支付结算管理防范电信网络新型违法
				   				犯罪有关事项的通知》
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				如何从他行转账至微众卡？
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行个人银行结算账户功能介绍
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行人民币存款利率表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行人民币贷款利率表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   		</div>
		   			</li>
		   			<li>
		   				<div className="new-con">
		   				<h2>微众动态</h2>
		   					<p>
				   				3
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				深圳前海微众银行股份有限公司服务价目表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				关于落实《中国人民银行关于加强支付结算管理防范电信网络新型违法
				   				犯罪有关事项的通知》
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				如何从他行转账至微众卡？
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行个人银行结算账户功能介绍
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行人民币存款利率表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行人民币贷款利率表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   		</div>
		   			</li>		   			   			
	   			</ul>
	   			<ul className="new-tit">
	   				<li className='x-block'>重要公告 <span></span></li>
	   				<li>新闻看点 <span></span></li>
	   				<li>微众动态 <span></span></li>
	   			</ul>
	   		</div>	   		  	
	    </div>
	    <Footer />	 
	    </div>

    );
  }
}

export default Finance;
