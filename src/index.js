import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Components

import MainParent from './mainParent.js'
import Filters from './filters.js'
import Paintercard from './painterCard.js'
import Footer from './footer.js'




ReactDOM.render(
    <div>
    <MainParent/>
    <Filters/>
    <Paintercard/>
    <Footer/>
    </div>,
    document.getElementById('root')

);
