import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import data1 from './db/all_paintings1.json';
import Square from './Square.js'


class Portrait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showElement: false,
            canvas: {},
            collorsection: [],
        };
    }

    renderSquare(e) {
        const paintingsArray = data1[e]
        return paintingsArray
            .filter(painting => painting.dominant_color !== "error")
            .map((painting, index) => <Square
                key={index}
                onClick={() => this.openModal(paintingsArray, index)}
                color={`rgb${painting.dominant_color}`}
            />)
    }

    openModal(arr, id) {
        this.setState({ showElement: true })
        this.setState({
            canvas: arr[id]
        })
        this.renderColors(arr, id);
    }

    renderColors(arr, id) {
        this.colorsection = arr[id].palette_color
            .map((color, index) => <div key={index} className='palettecolor' style={{ backgroundColor: `rgb${color}` }}></div>)
    }

    closeModal() {
        this.setState({ showElement: false })
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(event.target)) {
            this.closeModal();
        }
    }

    render() {
        const paintingsCount = data1[this.props.p].length;
        const size = Math.ceil(Math.sqrt(paintingsCount))

        return (
            <>
                <div className="portrait" style={{width: '100px', gridTemplateColumns: `repeat(${size}, 1fr)`}}>
                    {this.renderSquare(this.props.p)}
                </div>
                <CSSTransition in={this.state.showElement} timeout={300} classNames="lableTr" unmountOnExit>
                    <section className="colorLabel">
                        <div className="close" onClick={() => this.closeModal()}>X</div>
                        <h2 className="paintingTitle" >{this.state.canvas.title} <span>({this.state.canvas.year})</span></h2>
                        <img className="paintingImg" src={this.state.canvas.url_painting} alt={this.state.canvas.title} />
                        <div className="dominantColors " >
                            <p>Palette Colors</p>
                            <div>{this.colorsection}</div>
                        </div>
                    </section>
                </CSSTransition>
            </>
        );
    }
}

export default Portrait
