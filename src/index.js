import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';


//Components

import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'


function App() {
    return (
        <div>
            <Header />
            <Body/>
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

);
