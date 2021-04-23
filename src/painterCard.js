import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import data1 from './db/all_paintings1.json';

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
            const paintingsArray = data1[e]
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
            this.renderColors(arr,id)       
        }
    
    renderColors(arr, id){
     const colorsection = arr[id].palette_color
            .map((color) => <div style={{ backgroundColor:`rgb ${color}` }}></div>)
    }
    // Не понятно как отправить эту переменную в render    
    
    
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
                            <img className="paintingImg" src={this.state.canvas.url_painting} alt={this.state.canvas.title}/>
                            <div className="dominantColors " >
                            <p>Palette Colors</p>
                            <div>{}</div>
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

    export default Paintercard