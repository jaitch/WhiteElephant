import React, { Component } from 'react';
import './Gift.css';

class Gift extends Component {
    constructor(props) {
        super();
        this.state = {
            wrapped: true
        };
    }

    toggleImage = () => {
        this.setState(state => ({wrapped: !state.wrapped}))
    }

    getImageName = () => this.state.wrapped ? this.props.wrapped : this.props.unwrapped

    render() {
        const imageName = this.getImageName();
        let toReturn;
        if (this.state.wrapped) {
            toReturn =
                <div>
                    <img src={imageName} onClick={this.toggleImage} className="giftimg" alt={imageName}/>
                </div>
        } else {
            toReturn =
                <div className="dropdown">
                        <img src={imageName} onClick={this.toggleImage} className="giftimg" alt={imageName}/>
                        <div className="dropdown-content">{this.props.description}</div>
                </div>
        }
        return (
            <div>{toReturn}
            {/*<form>*/}
            {/*    <select id="select-menu" name="person">*/}
            {/*        {this.state.people.map((person, i) => {*/}
            {/*            return (*/}
            {/*                <option key={i}>{person}</option>*/}
            {/*            )*/}
            {/*        })*/}
            {/*        }*/}
            {/*        /!*<option value="au">Australia</option>*!/*/}
            {/*        /!*<option value="ca">Canada</option>*!/*/}
            {/*        /!*<option value="usa">USA</option>*!/*/}
            {/*    </select>*/}
            {/*</form>*/}
            </div>
        )
    }
}

        export default Gift;