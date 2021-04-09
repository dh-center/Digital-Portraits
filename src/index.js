import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './index.css';
import data from './db/yan-vermeer';

// social media icons
import insta from "./images/insta.png"
import fb from "./images/fb.png"
import vk from "./images/vk.svg"

function MainScreen(){
    return (
        <header>  
    <p id="projectname">Digital Portraits</p>
        <button id="about">?</button>
        <div id ="backimg">
            <p>Look at your favourite painters from different perspective</p>
        </div>
        </header>
        );
}

class Filters extends React.Component{
    render() {
        return (
<div id="filterCont">
    <h2>Filter painters:</h2>
    <p>Movement*
    <input id="movement" type="text" placeholder="Impressionism"/>
    </p>
    <p>Century
    <input id="century" type="range" min="XVI" max ="XX" step="1"/>
    </p>
    
</div>
);
}
}

function Square(props) {

const side = Math.sqrt(250*250/data.length).toFixed(3)  
//Нужно установить автоматическую ширину кнопок, чтобы они заполнили все пространство дива. и не выходили за его пределы. ???
    return (
        <button
            className="square"
            style={{height:`${side}px`,width:`${side}px`, backgroundColor: props.color}}
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
    this.paletteColors(id)
    }

    paletteColors(id){
        let reg =/\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/g; 
        let palette = data[id].palette_colors.match(reg);
    palette.map(e =>
   <div style ={{backgroundColor:`rgb ${e}`}}/>)
}


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
            <div>
                <div className="frame">
                    {this.renderSquare()}
                </div>
                 <CSSTransition in={this.state.showElement} timeout ={300} classNames="lableTr" unmountOnExit>
                    <div className="colorLabel">
                        <div className="close" onClick={() => this.closeModal()}>X</div>
                        <h2 className="ptitle">Name <span>({this.state.canvas.Date})</span></h2>
                        <div className ="container">
                        <img className="paintingImg" src={this.state.canvas.urls} alt="Painting"/>
                        <div className="dominantColors " >
                        <p>Palette Colors</p>
                        {/* {this.paletteColors()} */}
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
                <a href="https://en.wikipedia.org/wiki/Johannes_Vermeer"><h1>Johannes Vermeer</h1></a>
                <Portrait/>
            </div>
        );
    }
}

function Footer(){
    return (
        <footer> 
        <img id="logo" alt="logo"/>
    <p id="contacts">Contact us: dh@itmo.ru</p>
        <div id ="socialmedia">
            <a href="https://www.instagram.com/dh_center/"><img src={insta} alt=" Instagram "/></a>
            <a href ="https://vk.com/dhcenter"><img src={vk} alt="Facebook "/></a>
            <a href="https://www.facebook.com/dhcenter.itmo/"><img src={fb} alt="VK "/></a>
        </div>
        </footer>
        );
}

ReactDOM.render(
    <div>
    <MainScreen/>
    <Filters/>
    <div className ="paintercardswr">
    <Paintercard/>
    </div>
    <Footer/>
    </div>,
    document.getElementById('root')

);
