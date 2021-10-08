/* eslint-disable react/no-direct-mutation-state */
import React , {Component} from 'react';
import './media/style/Album.css';
import logo from './media/images/logo.png';


class Album extends Component{
    constructor(){
        super();
        this.state = {
            isMounted : true,
        }
    }


    componentDidMount(){
        let self = this;
        self.props.audio.play();
        self.props.audio.addEventListener("timeupdate",function(){
        if(self.state.isMounted){
            var pos = self.props.audio.currentTime/self.props.audio.duration;
            self.updateTime();
            let fill = document.getElementById("fill");
            console.log(fill);
            if(fill !== null){
                fill.style.width = pos*100 + "%";
            }
        }
        })
        
    }


    updateTime = () =>{
       
        this.setState({
            audio : this.props.audio
        })
    }

    componentWillUnmount(){
        this.state.isMounted =false;
    }


  render(){
    let audio = this.props.audio;
      return(
          <div class="album-container">
                <div id="title-1"><img src={logo} alt="" id="logo-1"></img>IPOD.JS</div>
                <div className="info">
                        <p>Song-Name : Sorry</p>
                        <p>Singer : Justin Bieber</p>
                </div>
                <div id="music-screen"> </div>
                <div class="bar">
                    <div className="seekbar">
                        <div className="fill-1" id='fill'></div>
                    </div>
                    <div className="time">
                    <p className="curr-time">{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <p className="during">{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                    </div>
                </div>
          </div>
      )
  }
}

export default Album;