import React from 'react';
import { CSSTransition } from 'react-transition-group';
// import './popup.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: props.value,
            isHovered: false,
        }
    }
    popupOpen() { this.setState({ showPopup: true }) }
    closePopup() { this.setState({ showPopup: false }) }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        if (!event.target.closest('.popupbody')) {
            this.closePopup();
        }
    }

    render() {
        return (
            <CSSTransition in={this.state.showPopup} timeout={300} classNames="popup" unmountOnExit>
                <div className="popupWrapper">
                    <div className="popupbody">
                        <div className="close" onClick={() => this.closePopup()}>X</div>
                        <div id="dopinfo"
                            onMouseEnter={() => { this.setState({ isHovered: true }) }}
                            onMouseLeave={() => { this.setState({ isHovered: false }) }} >*
                    </div>
                        <div className={`${this.state.isHovered ? 'bginfo' : 'hidden'}`}>Background:<br />"M.Rothko- No.5"</div>
                        <h2>About</h2>
                        <p>These visualizations allow to look at chosen artists from color perspective. </p>
                        <img alt="Digital portrait" />
                        <p>Each digital canvas is constructed from
                        squares representing dominant colors of
                        different paintings. They are placed in
                        chronological order, therefore occasionally
                        it is possible to spot the difference between
                        color use within painter’s life.
                    </p>
                        <img alt="Screenshot of the page" />
                        <p>The data was parsed from WikiArt website.
                        Later the dominant and palette colors were
                        identified using Phython libraries.
                        Then the dataset was filtered to get
                        rid of sculptures, installations, drawings
                        and other not relative works.
                         </p>
                        <p>This project was completed as a part of<br /> a
                         DH center Seeds Grant in 2020-2021
                         </p>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default Popup
