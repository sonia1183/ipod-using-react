import React , {Component} from 'react';
import './media/style/IpodContent.css';
import IpodScreen from './IpodScreen';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import ZingTouch from 'zingtouch';
import audio from './media/music/sorry.mp3';

class IpodContent extends Component{
    constructor(){
        super();
        this.state={
            item : 'CoverFlow',
            page : 'Home',
            enter : 0,
            play : true
        }
    }
    
    circle = () => {
        var container = document.getElementById('round-container');
        var zt = new ZingTouch.Region(container);
        var count = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
        if(self.state.enter < 2){
            zt.bind(container, 'rotate', function(event){
                var Angle = event.detail.distanceFromLast;
                console.log(Angle);

                if(Angle < 0){
                    console.log(count);
                    count++;
                    if(count === 15){
                        console.log("state change");
                        count = 0;
                        if(self.state.page === 'Home'){
                            if(self.state.item === 'CoverFlow'){ self.setState({item : "Music"})}
                            else if(self.state.item === 'Music'){self.setState({item : "Games"})}
                            else if(self.state.item === 'Games'){self.setState({item : "Settings"})}
                            else if(self.state.item === 'Settings'){self.setState({item : "CoverFlow"})}
                        }
                        else if(self.state.page === 'Music'){

                        }
                    }
                }
            })
        }
    }

    render(){
        return(
            <div className="container">
                 <audio className="music">
                     <source src={audio}></source>
                 </audio>

                 <IpodScreen item={this.state.item} page={this.state.page} audio={this.state.audio}/>

                 <div id="round-container" onMouseOver={this.circle}>

                     <div className="buttons">
                         <div classname="menu" onClick={this.toggleHomeToScreen}>
                             <i className="fa fa-bars" id="icon"></i>
                         </div>
                     </div>
                     <div className="buttons">
                         <div id="middle" onClick={this.next}>
                             <i className="fa fa-fast-backward" id="icon"></i>
                             <div className="center"></div>
                             <i className="fa fa-fast-forward" id="icon"></i>
                         </div>
                     </div>
                     <div className="buttons">
                         <div className="play" onClick={this.toggle}>
                             <i className="fa fa-play" id="icon"></i><b style={{color:'black'}}>&nbsp;\&nbsp;</b><i className="fa fa-pause" id="icon"></i>
                         </div>
                     </div>
                </div> 
            </div>
        )
    }
}
export default IpodContent;