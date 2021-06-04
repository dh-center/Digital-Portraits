import React from 'react';
import './allpaintercards.css';
import Portrait from './Portrait.js'
import Loader from './Loader.js'

function AllPaintercards(props) {

    if (props.data.length === 0) return <Loader />
    else return (
        <div className="paintercardswr">
            {props.data.map((painter) => <Card painter={painter}/>)}
        </div>
    );
}

function Card (props){
        <div className="card">
            <a href={`https://en.wikipedia.org/wiki/${props.painter.name}`} target="_blank"> <h1 className="artistname"> {props.painter.name}</h1> </a>
            <Portrait paintings={props.painter.Paintings} />
        </div>}

export default AllPaintercards
