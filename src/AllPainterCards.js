import React from 'react';
import './allpaintercards.css';
import Portrait from './Portrait.js'

function AllPaintercards(props) {

    const rendercards = () => {
        return props.state.map((painter) =>
            <div className="card">
                <a href={`https://en.wikipedia.org/wiki/${painter}`}> <h1 className="artistname"> {painter}</h1> </a>
                <Portrait p={painter} />
            </div>);
    }

    return (
        <div className="paintercardswr">
            {rendercards()}
        </div>
    );
}


export default AllPaintercards
