import React , {Component} from 'react';
import './media/style/IpodScreen.css';
//import Home from './Home';
//import Music from './Music';
//import Games from './Games';
//import Settings from './Settings';
import Album from './Album';
class IpodScreen extends Component{
  render(){
      return(
          <div class="screen">
              <Album/>
          </div>
      )
  }
}
export default IpodScreen;