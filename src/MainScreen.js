import React from 'react';
import './mainscreen.css';

function MainScreen(props) {
    return (
        <section>
            <p id="projectname">Digital Portraits</p>
            <button id="about" onClick={props.popupOpen}>?</button>
            <div id="backimg">
                <p>Look at your favourite painters from different perspective</p>
            </div>
        </section>)
}

export default MainScreen
