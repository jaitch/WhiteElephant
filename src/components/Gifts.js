import { Component } from 'react';
import './Gifts.css';
import Gift from "./Gift";
import gift1wrapped from '../wegey1.wrapped.jpeg'
import gift1unwrapped from '../wegey1.unwrapped.jpeg'
import gift2wrapped from '../wegey2.wrapped.jpg'
import gift2unwrapped from '../wegey2.unwrapped.jpg'
import gift3wrapped from '../wegey3.wrapped.jpeg'
import gift3unwrapped from '../wegey3.unwrapped.jpeg'

class Gifts extends Component {
    // state = {
    //     open: true
    // }
    // toggleImage = () => {
    //     this.setState(state => ({ open: !state.open }))
    // }
    //
    // getImageName = () => this.state.open ? gift1 : gift1open

    render() {
        // const imageName = this.getImageName();
        return (
            <div className="flex-container">
                <div>
                    <Gift wrapped={gift1wrapped} unwrapped={gift1unwrapped}/>
                    <p>Gift 1</p>
                </div>
                <div>
                    <Gift wrapped={gift2wrapped} unwrapped={gift2unwrapped}/>
                    <p>Gift 2</p>
                </div>
                <div>
                    <Gift wrapped={gift3wrapped} unwrapped={gift3unwrapped}/>
                    <p>Gift 3</p>
                </div>
            </div>
        )
    }
}


export default Gifts;


