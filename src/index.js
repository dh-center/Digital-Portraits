import React from 'react';
import ReactDOM from 'react-dom';
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
    }

    // paletteColors(){
    // this.state.canvas.palette_сolors.map(e => <div style ={{backgroundColor:`rgb ${e}`}}/>)}
    //создаю дивы и туда сразу цвет устанавливаю нужный,не дает доступ из-за написания palette_colors

  closeModal(){
    this.setState({showElement:false})
  }

    render() {
        return (
            <div className="wrapper">
                <div className="frame">
                    {this.renderSquare()}
                </div>
                {this.state.showElement ?
                    <div className="colorLabel">
                        <div className="close" onClick={() => this.closeModal()}>X</div>
                        <h2>Name <span>({this.state.canvas.Date})</span></h2>
                        <img className="paintingImg" src={this.state.canvas.urls} alt="Painting"></img>
                        <p>Palette Colors</p>
                        <div className="dominantColors ">
                            {this.state.canvas.palette_colors}
                        </div>
                    </div>
                    : null
                }
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

// clickHandler(){
// if(e.target.contains('.square')){
//     openModal()
// }
// else if(!e.target.closest('.colorLabel')){
// closeModal()}
// else{ null}
// } навешать на док


ReactDOM.render(
    <Paintercard/>,
    document.getElementById('root')

);
