import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Components

import MainPage from './MainPage.js'
import Filters from './Filters.js'
import AllPainterCards from './AllPainterCards.js'
import Footer from './Footer.js'


function App() {
    return (
        <div>
            <MainPage />
            <Filters />
            <AllPainterCards />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

);
