import React from 'react';
import './allpaintercards.css';
import Portrait from './Portrait.js'
import Loader from './Loader.js'



function AllPaintercards(props) {

    if (props.data === "") return <Loader/>
    else return (
        <div className="paintercardswr">
            <Rendercards data={props.data} filtered={props.filtered} />
        </div>
    );
}

function Rendercards(props) {
    if (props.filtered === "")
        return props.data.map((e) =>
            <div className="card">
                <a href={`https://en.wikipedia.org/wiki/${e.name}`} target="_blank"> <h1 className="artistname"> {e.name}</h1> </a>
                <Portrait paintings={e.Paintings} />
            </div>);
    else return props.filtered.map((e) =>
        <div className="card">
            <a href={`https://en.wikipedia.org/wiki/${e.name}`} target="_blank"> <h1 className="artistname"> {e.name}</h1> </a>
            <Portrait paintings={e.Paintings} />
        </div>);
}
export default AllPaintercards
