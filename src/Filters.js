import React, { useState } from 'react';
import './filters.css';


function Filters(props) {

    const [movement, setMovementValue] = useState("")

    const handleMovementChange = (e) => {
        setMovementValue(e.target.value)
        if (e.target.value === ""){
            props.resetcards();
        }
    }

    return (
        <div id="filterCont">
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
                <input id="century" type="range" min="XVI" max="XX" step="1" />
            </p>

        </div>
    );
}

export default Filters
