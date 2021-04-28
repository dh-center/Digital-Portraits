import React from 'react';
import AllPaintercards from './AllPainterCards.js'
import Filters from './Filters.js'

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.allcards = React.createRef();
    }
    handleSlide = (value) => {
        this.allcards.current.filtering(value);
    }
    handleClick = () => {
        this.allcards.current.rendercards();
    }

    render() {
        return (
            <div>
                <Filters filtering={this.handleSlide} rendercards={this.handleClick} />
                <AllPaintercards ref={this.allcards} />
            </div>
        )
    }
}


export default Body