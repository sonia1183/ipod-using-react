import React , {Component} from 'react';
import { ListGroup } from 'react-bootstrap';
import './media/style/Home.css';
import logo from './media/images/logo.png';

class Music extends Component{
  render(){
      return(
          <div class="home-container">
              <div id="menu">
                <div id="title"><img src={logo} alt="" id="logo"></img>IPOD.JS</div>
                    <ListGroup className="list">
                        <ListGroup.Item id="list-item" className={this.props.item==='Album'?'active2':''}>
                            Play Music {this.props.item==='Album'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item id="list-item" className={this.props.item==='Artist'?'active1':''}>
                            my info {this.props.item==='Artist'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
              </div>

              <div id="img-screen"></div>
          </div>
      )
  }
}

export default Music;