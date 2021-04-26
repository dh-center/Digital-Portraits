import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <div id="filterCont">
                <h2>Filter painters:</h2>
                <p>Movement
                <input id="movement" type="text" placeholder="Impressionism" />
                </p>
                <p>Century
                <input id="century" type="range" min="XVI" max="XX" step="1" />
                </p>

            </div>
        );
    }
}

export default Filters
