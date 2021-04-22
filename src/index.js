import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './index.css';
import data1 from './db/allPaintings.json';

// social media icons
import insta from "./images/insta.png"
import fb from "./images/fb.png"
import vk from "./images/vk.svg"

import logo from "./images/dh_logo.png"

function MainScreen(props){
    return (
    <header>  
    <p id="projectname">Digital Portraits</p>
        <button id="about" onClick={props.popupOpen}>?</button>
        <div id ="backimg">
            <p>Look at your favourite painters from different perspective</p>
        </div>
        </header>) 
}

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            isHovered: false,
        }
    }

popupOpen(){this.setState({showPopup: true})}

closePopup(){this.setState({showPopup: false})}

componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
}

componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
}

handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
this.closePopup();
    }
}

render() {
    return (
        <CSSTransition in={this.state.showPopup} timeout ={300} classNames="popup" unmountOnExit>
            <div className ="popupWrapper">
                    <div className="popupbody">
                    <div className="close" onClick={() => this.closePopup()}>X</div>
                    <div id="dopinfo"
                    onMouseEnter={()=>{this.setState({isHovered: true})}} 
                    onMouseLeave={()=>{this.setState({isHovered: false})}} >*
                    </div>
                    <div className={`${this.state.isHovered ? null: 'hidden'}`}>Background:"M.Rothko- No.5"</div>
                    <h2>About</h2>
                    <p>These visualizations allow to look at chosen artists from color perspective. </p>
                    <img alt="Digital portrait"/>
                    <p>Each digital canvas is constructed from 
                        squares representing dominant colors of 
                        different paintings. They are placed in 
                        chronological order, therefore occasionally
                        it is possible to spot the difference between
                        color use within painter’s life.
                    </p>
                    <img alt="Screenshot of the page"/>
                    <p>The data was parsed from WikiArt website. 
                        Later the dominant and palette colors were 
                        identified using Phython libraries.
                        Then the dataset was filtered to get 
                        rid of sculptures, installations, drawings
                         and other not relative works.
                         </p>
                    <p>This project was completed as a part of<br/> a
                         DH center Seeds Grant in 2020-2021
                         </p>
                    </div>
                    </div>
                    </CSSTransition>
        );
}
}

class Filters extends React.Component{
    render() {
        return (
<div id="filterCont">
    <h2>Filter painters:</h2>
    <p>Movement
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

// const side = Math.sqrt(250*250/data.length).toFixed(3)  

    return (
        <button
            className="square"
            style={{ backgroundColor: props.color}}
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

    renderSquare(e) {
        const paintingsArray = JSON.parse(data1[e])
     return paintingsArray
            .filter(painting => painting.dominant_color !== "error")
            .map((painting, index) => <Square
                key={index}
                onClick={() => this.openModal(paintingsArray,index)}
                color={`rgb${painting.dominant_color}`}
            />)
        }

    

    openModal(arr,id) {
        this.setState({showElement: true})
        this.setState({
            canvas: arr[id]
        })
            console.log(JSON.parse(arr[id].palette_color))
                    
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
                    {this.renderSquare(this.props.p)}
                </div>
                 <CSSTransition in={this.state.showElement} timeout ={300} classNames="lableTr" unmountOnExit>
                    <section className="colorLabel">
                        <div className="close" onClick={() => this.closeModal()}>X</div>
                        <h2 className="ptitle">{this.state.canvas.title} <span>({this.state.canvas.year})</span></h2>
                        <div className ="container">
                        <img className="paintingImg" src={this.state.canvas.url_painting} alt="Painting"/>
                        <div className="dominantColors " >
                        <p>Palette Colors</p>
                        <div> </div>
                        </div>
                        </div>
                    </section>
                    </CSSTransition>
            </div>
        );
    }
}

class Paintercard extends React.Component {

    cards = Object.keys(data1).map((painter)=>
    <div className="card"> 
    <a href = {`https://en.wikipedia.org/wiki/${painter}`}> <h1> {painter}</h1> </a> 
    <Portrait p = {painter} />
    </div>);


    render() {
        return (
            <div className ="paintercardswr">
                {this.cards}
                </div>
        );
    }
}

function Footer(){
    return (
        <footer> 
        <img id="logo" alt="logo" src={logo} />
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
    <Popup/>
    <Filters/>
    <Paintercard/>
    <Footer/>
    </div>,
    document.getElementById('root')

);
