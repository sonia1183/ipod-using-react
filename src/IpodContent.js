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
                            if(self.state.item === 'Album'){self.setState({item : "Artist"}) }
                            else if(self.state.item === 'Artist'){self.setState({activeItem : "Album"})}
                        }
                }
            }
            else{
                console.log(count);
                count++;
                if(count === 15){
                    console.log("change state");
                    count = 0;
                    if(self.state.page === 'Home'){
                        if(self.state.item === 'CoverFlow'){
                            self.setState({
                                item : "Settings"
                            })
                        }else if(self.state.item === 'Music'){
                            self.setState({
                                item : "CoverFlow"
                            })
                        }else if(self.state.item === 'Games'){
                            self.setState({
                                item : "Music"
                            })
                        }else if(self.state.item === 'Settings'){
                            self.setState({
                                item : "Games"
                            })
                        }
                    }else if(self.state.page === 'Music'){
                        if(self.state.item === 'Album'){
                            self.setState({
                                item : "Artist"
                            })
                        }else if(self.state.item === 'Artist'){
                            self.setState({
                                item : "Album"
                            })
                        }
                    }
                }
            }
            });
        }
        else{
            console.log("Not allowed to enter");
        }
    }
    next=()=>{
        if(this.state.item === 'Music'){
            this.setState({
                item : 'Album',
                page : this.state.item
            })
        }
        else if(this.state.item === 'CoverFlow'){
            this.setState({
                item : 'CoverFlow',
                page : 'Album'
            })
        }
        else{
            this.setState({
                item : this.state.item,
                page : this.state.item
            })
        }
    }
    toggleHomeToScreen = () => {

        if(this.state.item === 'Album' || this.state.item === 'Artist'){
            this.setState({
                item : 'Music',
                page : 'Home'
            })
        }else{
            this.setState({
                item : this.state.item,
                page : 'Home'
            })
        }
        
    }

    toggle = () =>{
        if(this.state.page === 'Album'){
            if(this.state.play === true){
                this.state.audio.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.audio.play();
                this.setState({
                    play : true
                })
            }
            console.log("toggled")
        }
    }
    componentDidMount(){
        let audio = document.getElementsByClassName("music")[0];
        console.log(audio)
        this.setState({
            audio : audio,
        })
        console.log(this.state)
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