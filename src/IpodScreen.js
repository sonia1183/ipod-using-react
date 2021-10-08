import React , {Component} from 'react';
import './media/style/IpodScreen.css';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import Album from './Album';
import Artist from './Artist';

class IpodScreen extends Component{
  render(){
      return(
          <div class="screen">
                {this.props.page==='Home'?<Home item={this.props.item}/> : null}
                {this.props.page==='Music'?<Music item={this.props.item}/> : null}
                {this.props.page==='Games'?<Games /> : null}
                {this.props.page==='Settings'?<Settings /> : null}
                {this.props.page==='Album'?<Album audio={this.props.audio} /> : null}
                {this.props.page==='Artist'?<Artist /> : null}
          </div>
      )
  }
}
export default IpodScreen;