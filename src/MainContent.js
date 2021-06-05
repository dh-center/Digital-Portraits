import React, { useState, useEffect } from 'react';
import AllPaintercards from './AllPainterCards.js'
import Filters from './Filters.js'
import movements from './db/movements.json'

function MainContent() {
    const [data, setData] = useState([])
    const [filters, setFilter] = useState(null)
    let filteredData

    if (!filters) { filteredData = data }
    else { filteredData = filters.century ? filterByCentury(filters.century) : filterByMovement(filters.movement) }

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

        fetch(process.env.REACT_APP_DATA_HOST, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: dataquery })
        })
            .then(response => response.json())
            .then(
                result => setData(result.data.allPainters)
            );
    }

    function filterByCentury(value) {
        const filteredByYear = data.filter(e => Math.trunc(e.year / 100 + 1) === value);
        return filteredByYear;
    }

    function filterByMovement(movement) {
        const filterednames = Object.keys(movements).filter(key => movements[key].includes(movement));
        const filteredByMovements = data.filter(e => filterednames.includes(e.name));
        return filteredByMovements;
    }

    return (
        <div className="mainContent">
            <Filters value={filters} onChange={setFilter} />
            <AllPaintercards data={filteredData} />
        </div>
    );
}

export default MainContent