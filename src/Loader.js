import React from 'react';
import './loader.css';

function Loader() {
    return (
        <div className="loader">
            <p className="loader_text"> Loading <span>.</span><span>.</span><span>.</span> </p>
        </div>
    )
}

export default Loader