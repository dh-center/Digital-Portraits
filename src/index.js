import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './index.css';
import data from './db/yan-vermeer';


function Square(props) {
    return (
        <button
            className="square"
            style={{backgroundColor: props.color}}
            onClick={props.onClick}
        />
    );
}

class Portrait extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showElement: false,
            canvas: {},
        };
    }


    renderSquare() {
        return data
            .filter(painting => painting.dominant_colors !== "error")
            .map((painting, index) => <Square
                key={index}
                onClick={() => this.openModal(index)}
                color={`rgb${painting.dominant_colors}`}
            />)
    }

    openModal(id) {
        this.setState({showElement: true})
        this.setState({
            canvas: data[id]
        })
        // this.paletteColors(id)
    }

//     paletteColors(id){
//  data[id].palette_colors.map(e => 
//    <div style ={{backgroundColor:`rgb ${e}`}}/>)
// }
// map is not a function

  closeModal(){
    this.setState({showElement:false})
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
        return (
            <div className="wrapper">
                <div className="frame">
                    {this.renderSquare()}
                </div>
                 <CSSTransition in={this.state.showElement} timeout ={300} classNames="lableTr" unmountOnExit>
                    <div className="colorLabel">
                        <div className="close" onClick={() => this.closeModal()}>X</div>
                        <h2>Name <span>({this.state.canvas.Date})</span></h2>
                        <div className ="container">
                        <img className="paintingImg" src={this.state.canvas.urls} alt="Painting"></img>
                        <div className="dominantColors " >
                        <p>Palette Colors</p>
                            {this.state.canvas.palette_colors}
                        </div>
                        </div>
                    </div>
                    </CSSTransition>
            </div>
        );
    }
}

class Paintercard extends React.Component {
    render() {
        return (
            <div className="card">
                <h1>Ян Вермеер</h1>
                <Portrait/>
            </div>
        );
    }
}

ReactDOM.render(
    <Paintercard/>,
    document.getElementById('root')

);
