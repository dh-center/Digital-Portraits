import React from 'react';
import Popup from './Popup.js'
import MainScreen from './MainScreen.js'

class MainPage extends React.Component{

    constructor(props) {
        super(props);
        this.popup = React.createRef();
    }

handleClick=()=>{
this.popup.current.popupOpen();
}

    render(){
    return(
        <div>
   <MainScreen popupOpen ={this.handleClick}/>
    <Popup ref={this.popup}/>
        </div>
    )
}
}

export default MainPage
