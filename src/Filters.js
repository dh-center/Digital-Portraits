import React, { useState } from 'react';
import './filters.css';

function Filters(props) {

    const [centValue, setcentValue] = useState(15)
    const [romCentValue, setromcentValue] = useState("")
    const [pers, setpersValue] = useState(0)

    const romanCentury = { 15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII', 19: 'XIX', 20: 'XX' }



    const handleChange = (e) => {
        setcentValue(e.target.value);
        props.filtering(parseInt(e.target.value));
        setromcentValue(romanCentury[e.target.value]);
        setpersValue(centValue);
        // Нужно как-то узнать позицию ползунка, чтобы передавать это значение. как я понимаю оно все еще равно 1-100, но где его взять?
    };

    const handleClick = () => {
        props.resetcards();
        setcentValue(15);
        setromcentValue("");
    }

    return (
        <div id="filterCont">
            <h2>Filter painters:</h2>
            <p>Movement
                <input id="movement" type="text" placeholder="Impressionism" />
            </p>
            <p>Century
                <span className="century_container">
                    <span className="century_label" style={{ left: pers + '%' }}>{romCentValue}</span>
                    <input id="century" type="range" min={15} max={20} value={centValue} step="1"
                        onChange={(e) => handleChange(e)}
                    />
                </span>
                <button onClick={() => handleClick()} className="reset_filter">Reset</button>
            </p>

        </div>
    );
}

export default Filters
