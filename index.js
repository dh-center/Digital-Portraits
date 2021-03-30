import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './db/yan-vermeer';


function Square (props) {
  return (
      <button className="square" style={{backgroundColor:"#000"}}>
        {props.value}
      </button>
    );
  }
  
class Portrait extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //       squares: Array(data.length).fill(null),
  //     };
  //   }


    renderSquare() {
      let squares = [];
      let bgcolors =[];
       for (const painting of data) {
         if(painting.dominant_colors!=="error"){
       squares = squares.concat(<Square/>);
       bgcolors = bgcolors.concat ( `rgb ${painting.dominant_colors}`);
      }
         }
      //  const buttons = document.querySelectorAll(".square");
      //  console.log(buttons);
              // style={{backgroundColor: `rgb ${painting.dominant_colors}`}}
      return(squares);          
    }


    render() {
      return (
        <div className="frame">
{this.renderSquare()}
        </div>
      );
      }
  }

class Paintercard extends React.Component {
  render(){
  return (
    <div className="card">
<p>Ян Вермеер</p>
<Portrait/>
    </div>
    );
  }
}

ReactDOM.render(
  <Paintercard />,
  document.getElementById('root')
);