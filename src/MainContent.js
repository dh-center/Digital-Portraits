import React from 'react';
import AllPaintercards from './AllPainterCards.js'
import Filters from './Filters.js'
import movements from './db/movements.json'

class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paintersArray: []
        };
        this.getdata();
    }

    getdata() {
        const dataquery = `{
        allPainters{
            name
            Paintings{
                year
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
                result => this.sorting(result.data.allPainters)
            )
    }

    sorting(data) {
        const paintersNames = data.map(e => e.name)
        const years = data.map(e => e.Paintings[0].year)
        const values = years.map((e) => {
            if (typeof e === 'string') {
                e = parseInt(e.substr(0, 4))
                return e
            } else { return e }
        }
        )
        const paintAndYear = Object.assign(...paintersNames.map((n, i) => ({ [n]: values[i] })))
        this.psorted = Object.keys(paintAndYear).sort(function (a, b) { return paintAndYear[a] - paintAndYear[b] })
        this.setState({ paintersArray: this.psorted })

        Object.keys(paintAndYear).map(key => paintAndYear[key] = Math.trunc(paintAndYear[key] / 100 + 1))
        this.paintAndYear = paintAndYear;
    }

    filterData(value) {
        const filtered = Object.keys(this.paintAndYear).filter(key => this.paintAndYear[key] === value)
        this.setState({ paintersArray: filtered })
    }

    filterMovement(movement) {
        const filteredMovements = Object.keys(movements).filter(key => movements[key].includes(movement))
        this.setState({ paintersArray: filteredMovements })
    }

    handleSlide = (value) => {
        this.filterData(value);
    }
    handleClick = () => {
        this.setState({ paintersArray: this.psorted });
    }
    handleChange = (movement) => {
        this.filterMovement(movement)
    }

    render() {
        return (
            <div className="mainContent">
                <Filters filterData={this.handleSlide} resetcards={this.handleClick} filterMovement={this.handleChange} />
                <AllPaintercards state={this.state.paintersArray} />
            </div>
        )
    }
}


export default MainContent