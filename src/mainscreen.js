import React from 'react';

function MainScreen(props){
    return (
    <header>  
    <p id="projectname">Digital Portraits</p>
        <button id="about" onClick={props.popupOpen}>?</button> 
        <div id ="backimg">
            <p>Look at your favourite painters from different perspective</p>
        </div>
        </header>) 
}

export default MainScreen