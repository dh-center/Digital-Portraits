import React, { useState } from 'react';
import './filters.css';


function Filters(props) {

    const [centValue, setcentValue] = useState(15)
    const [romCentValue, setromcentValue] = useState("")
    const romanCentury = { 15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII', 19: 'XIX', 20: 'XX' }
    const [movement, setMovementValue] = useState("")

    const handleMovementChange = (e) => {
        setMovementValue(e.target.value)
        if (e.target.value === ""){
            props.resetcards();
        }
    }

    const handleChange = (e) => {
        setcentValue(e.target.value);
        props.filterData(parseInt(e.target.value));
        setromcentValue(romanCentury[e.target.value]);
    };

    const handleClick = () => {
        props.resetcards();
        setcentValue(15);
        setromcentValue("");
    }

    return (
        <div className="filterCont">
            <h2>Filter painters:</h2>
            <p>Movement
                <select value={movement} onChange={(e) => handleMovementChange(e)}>
                    <option value="">All</option>
                    <option value="Early Renaissance">Early Renaissance</option>
                    <option value="Northern Renaissance">Northern Renaissance</option>
                    <option value="High Renaissance">High Renaissance</option>
                    <option value="Baroque">Baroque</option>
                    <option value="Rococo">Rococo</option>
                    <option value="Neoclassicism">Neoclassicism</option>
                    <option value="Romanticism">Romanticism</option>
                    <option value="Impressionism">Impressionism</option>
                    <option value="Realism">Realism</option>
                    <option value="Post-Impressionism">Post-Impressionism</option>
                    <option value="Symbolism">Symbolism</option>
                    <option value="Expressionism">Expressionism</option>
                    <option value="Abstract Art">Abstract Art</option>
                    <option value="Analytical Realism">Analytical Realism</option>
                    <option value="Suprematism">Suprematism</option>
                    <option value="Primitivism">Primitivism</option>
                    <option value="Surrealism">Surrealism</option>
                    <option value="Abstract Expressionism">Abstract Expressionism</option>
                    <option value="Pop Art">Pop Art</option>
                </select>
            </p>
            <p>Century
                <span className="century_container">
                    <span className="century_label" style={{ left: 20*centValue-300 + '%', transform: `translateX(-${20 * centValue - 300}%)` }}>{romCentValue}</span>
                    <input type="range" min={15} max={20} value={centValue} step="1"
                        onChange={(e) => handleChange(e)}
                    />
                </span>
                <button onClick={() => handleClick()} className="reset_filter">Reset</button>
            </p>

        </div>
    );
}

export default Filters
