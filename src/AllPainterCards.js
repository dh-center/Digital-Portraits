import React from 'react';
import './allpaintercards.css';
import Portrait from './Portrait.js'

function AllPaintercards(props) {

    function getdata () {
        const dataquery = `{
        allPainters{
            name
            Paintings{
                year
              url_painting
              palette_color
            }
        }
        }`
    
        fetch('http://localhost:3001', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: dataquery })
        })
            .then(response => response.json())
            .then(result =>  {savedata(result.data.allPainters)})
    
    }

function savedata(fetchresult) {  // Нужно сохранить данные, чтобы потом их передать в Portrait.В идеале, передавать уже те, что относятся к опр.худ-ку
    const data = fetchresult;
}
    getdata()

    const rendercards = () => {
        return props.state.map((painter) =>
            <div className="card">
                <a href={`https://en.wikipedia.org/wiki/${painter}`}target="_blank"> <h1 className="artistname"> {painter}</h1> </a>
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
