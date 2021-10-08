import React , {Component} from 'react';
import './media/style/Home.css';
import logo from './media/images/logo.png';
import { ListGroup } from 'react-bootstrap';
class Home extends Component{
  render(){
      return(
          <div class="home-container">
              <div id="menu">

                  <div id="title"><img src={logo} alt="" id="logo"></img>IPOD.JS</div>
                  <ListGroup className="list">
                        <ListGroup.Item id="list-item" className={this.props.activeItem==='CoverFlow'?'active':''}>
                            Cover Flow {this.props.activeItem==='CoverFlow'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item id="list-item" className={this.props.activeItem==='Music'?'active':''}>
                            Music {this.props.activeItem==='Music'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item id="list-item" className={this.props.activeItem==='Games'?'active':''}>
                            Games {this.props.activeItem==='Games'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item id="list-item" className={this.props.activeItem==='Settings'?'active':''}>
                            Settings {this.props.activeItem==='Settings'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                    
              </div>

              <div id="img-screen"></div>
          </div>
      )
  }
}
export default Home;