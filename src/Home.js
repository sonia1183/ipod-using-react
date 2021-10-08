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
                        <ListGroup.Item id="list-item" className={this.props.item==='CoverFlow'?'active':''}>
                            Cover Flow {this.props.item==='CoverFlow'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item id="list-item" className={this.props.item==='Music'?'active1':''}>
                            Music {this.props.item==='Music'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item id="list-item" className={this.props.item==='Games'?'active2':''}>
                            Games {this.props.item==='Games'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item id="list-item" className={this.props.item==='Settings'?'active3':''}>
                            Settings {this.props.item==='Settings'?<span className="list-item-1">&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                    
              </div>

              <div id="img-screen"></div>
          </div>
      )
  }
}
export default Home;