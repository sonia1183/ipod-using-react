import React , {Component} from 'react';
import './media/style/IpodContent.css';
import IpodScreen from './IpodScreen';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class IpodContent extends Component{
    constructor(){
        super();
        this.state={
            item : 'NowPlay',
            page : 'Home',
            
        }
    }
    render(){
        return(
            <div className="container">
                 <audio className="music">
                     <source src=""></source>
                 </audio>
                 <IpodScreen/>
                 <div className="round-container">
                     <div className="buttons">
                         <div classname="menu">
                             <i className="fa fa-bars" id="icon"></i>
                         </div>
                     </div>
                     <div className="buttons">
                         <div id="middle">
                             <i className="fa fa-fast-backward" id="icon"></i>
                             <div className="center"></div>
                             <i className="fa fa-fast-forward" id="icon"></i>
                         </div>
                     </div>
                     <div className="buttons">
                         <div className="play">
                             <i className="fa fa-play" id="icon"></i><b style={{color:'black'}}>&nbsp;\&nbsp;</b><i className="fa fa-pause" id="icon"></i>
                         </div>
                     </div>
                </div> 
            </div>
        )
    }
}
export default IpodContent;