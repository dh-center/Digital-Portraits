import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Components

import MainParent from './MainParent.js'
import Filters from './Filters.js'
import Paintercard from './PainterCard.js'
import Footer from './Footer.js'


function App(){
    return (
        <div>
    <MainParent/>
    <Filters/>
    <Paintercard/>
    <Footer/>
    </div>
    )
    }

ReactDOM.render(
    <App/>,
    document.getElementById('root')

);
