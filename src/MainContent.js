import React, { useState, useEffect } from 'react';
import AllPaintercards from './AllPainterCards.js'
import Filters from './Filters.js'
import movements from './db/movements.json'

function MainContent() {
    const [data, setdata] = useState('')
    const [filteredData, setfilteredData] = useState('')
    useEffect(() => { getdata() }, [])

    function getdata() {
        const dataquery = `{
            allPainters (sortField:"year"){
                name
                year
                Paintings{
                    title
                    year
                  url_painting
                  palette_color
                  dominant_color
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
            .then(
                result => setdata(result.data.allPainters)
            );
    }

    function filterData(value) {
        const filteredByYear = data.filter(e => Math.trunc(e.year/ 100 + 1) === value);
        setfilteredData(filteredByYear);
    }

    function filterMovement(movement) {
        const filterednames = Object.keys(movements).filter(key => movements[key].includes(movement));
        const filteredByMovements = data.filter (e => filterednames.includes(e.name));
        setfilteredData(filteredByMovements);
    }

    function handleSlide(value) {
        filterData(value);
    };
    function handleClick(){
        setfilteredData('');
    };
    function handleChange(movement) {
        filterMovement(movement);
    };

    return (
        <div className="mainContent">
            <Filters filterData={handleSlide} resetcards={handleClick} 
                filterMovement={handleChange} />
            <AllPaintercards data={data} filtered={filteredData} />
        </div>
    );
}

export default MainContent