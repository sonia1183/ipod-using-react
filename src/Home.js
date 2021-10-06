import React , {Component} from 'react';
import './media/style/Home.css';
import logo from './media/images/logo.png';
class Home extends Component{
  render(){
      return(
          <div class="home-container">
              <div id="menu">
                  <div id="title"><img src={logo} alt="" id="logo"></img>IPOD.JS</div>
              </div>
              <div id="img-screen"></div>
          </div>
      )
  }
}
export default Home;