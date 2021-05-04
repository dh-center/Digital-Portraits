import React from 'react';

function Square(props) {

    // const side = Math.sqrt(250*250/data.length).toFixed(3)  

    return (
        <button
            className="square"
            style={{ backgroundColor: props.color }}
            onClick={props.onClick}
        />
    );
}

export default Square