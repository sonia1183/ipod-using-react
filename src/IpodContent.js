import React , {Component} from 'react';
import './media/style/IpodContent.css';
import IpodScreen from './IpodScreen';
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
                         
                     </div>
                </div> 
            </div>
        )
    }
}
export default IpodContent;