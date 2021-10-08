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
                        <ListGroup.Item id="list-item" className={this.props.activeItem==='MyMusic'?'active':''}>
                            My Music {this.props.activeItem==='MyMusic'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item id="list-item" className={this.props.activeItem==='Artists'?'active':''}>
                            Artists {this.props.activeItem==='Artists'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
              </div>

              <div id="img-screen"></div>
          </div>
      )
  }
}

export default Music;