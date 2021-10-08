import React , {Component} from 'react';
import './media/style/Home.css';
import logo from './media/images/logo.png';

class Artist extends Component{
  render(){
      return(
          <div class="home-container">
              <div id="info-screen">
                <div id="title"><img src={logo} alt="" id="logo"></img>IPOD.JS</div>
                <h1>Sonia</h1>
                <h6>Ipod Assignment</h6>
              </div>
              <div id="artist-screen">
              </div>
          </div>
      )
  }
}

export default Artist;