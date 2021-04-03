import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './db/yan-vermeer';


function Square(props) {
  return (
    <button className="square" key={props.key} style={{ backgroundColor: props.color }} onClick={props.onClick}> 
    </button>
  );
}

class Portrait extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showElement:false,
      canvas:{},
      };
    }


  renderSquare() {
    return data
    .filter(painting => painting.dominant_colors !== "error") 
    .map(painting => <Square key={painting.FIELD1} onClick={() => this.openModal()} color={`rgb${painting.dominant_colors}`} />)
  }

  openModal(){
    this.setState({showElement:true})
    this.findInfo()
    // this.paletteColors()
  }

  findInfo(){
   this.state.canvas = data.find(painting => painting.FIELD1 === 0)}// нужно найти соответствие нажатому элементу через key
  //   console.log(this.state.canvas);
  //  this.state.canvas.palette_сolors.map(e => console.log (color = `rgb${e}`) )}
//Может сразу в Find info делать?

  // paletteColors(){
  // this.state.canvas.palette_сolors.map(e => <div style ={{backgroundColor:`rgb ${e}`}}/>)}
  //создаю дивы и туда сразу цвет устанавливаю нужный,не дает доступ из-за написания palette_colors


//   closeModal(){
//     if(!e.target.closest('.colorLabel')){  
//     this.setState({showElement:false})
//   }
// } // Не понимаю пока куда навешать, чтобы работало.

  render() {
    return (
      <div className="wrapper">
      <div className="frame">
        {this.renderSquare()}
      </div>
      {this.state.showElement? 
        <div className="colorLabel" >
        <h2>Name <span>({this.state.canvas.Date})</span></h2>
        <img src={this.state.canvas.urls} alt="Painting"></img> 
        <p>Palette Colors</p>
        <div className="dominantColors ">
        {/* {this.paletteColors} */}
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
        <Portrait />
      </div>
    );
  }
}

ReactDOM.render(
  <Paintercard />,
  document.getElementById('root')
);