import React , {Component} from 'react';
import './media/style/Home.css';
import logo from './media/images/logo.png';

class Settings extends Component{
  render(){
      return(
          <div class="home-container">
              <div id="info-screen">
                <div id="title"><img src={logo} alt="" id="logo"></img>IPOD.JS</div>
                <h2>Setting</h2>
                <h2><i class="fa fa-cog"></i></h2>
              </div>

              <div id="setting-screen">
              </div>
          </div>
      )
  }
}

export default Settings;