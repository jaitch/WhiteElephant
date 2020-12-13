import { Component } from 'react';
import './Gift.css';

class Gift extends Component {
    constructor(props) {
        super();
        this.state = {
            wrapped: true
        };
    }
    toggleImage = () => {
        this.setState(state => ({ wrapped: !state.wrapped }))
    }

    getImageName = () => this.state.wrapped ? this.props.wrapped : this.props.unwrapped

    render() {
        const imageName = this.getImageName();
        return (
            <div>
                <img src={imageName} onClick={this.toggleImage} className="giftimg" alt="gift1"/>
            </div>
        )
    }
}




export default Gift;