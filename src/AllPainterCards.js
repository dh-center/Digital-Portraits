import React from 'react';
import './allpaintercards.css';
import Portrait from './Portrait.js'
import Loader from './Loader.js'

function AllPaintercards(props) {

    if (props.data.length === 0) return <Loader />
    else return (
        <div className="paintercardswr">
            <Rendercards data={props.data} filtered={props.filtered} />
        </div>
    );
}

function Rendercards(props) {
    return props.data.map((e) =>
        <div className="card">
            <a href={`https://en.wikipedia.org/wiki/${e.name}`} target="_blank"> <h1 className="artistname"> {e.name}</h1> </a>
            <Portrait paintings={e.Paintings} />
        </div>);
}
export default AllPaintercards
