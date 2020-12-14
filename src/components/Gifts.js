import { Component } from 'react';
import './Gifts.css';
import Gift from "./Gift";
import gift1wrapped from '../wegey1.wrapped.jpeg'
import gift1unwrapped from '../wegey1.unwrapped.jpeg'
import gift2wrapped from '../wegey2.wrapped.jpg'
import gift2unwrapped from '../wegey2.unwrapped.jpg'
import gift3wrapped from '../wegey3.wrapped.jpeg'
import gift3unwrapped from '../wegey3.unwrapped.jpeg'
import gift4wrapped from '../wegey4.wrapped.jpeg'
import gift4unwrapped from '../wegey4.unwrapped.jpeg'
import gift5wrapped from '../wegey5.wrapped.jpeg'
import gift5unwrapped from '../wegey5.unwrapped.jpeg'
import gift6wrapped from '../wegey6.wrapped.jpeg'
import gift6unwrapped from '../wegey6.unwrapped.jpeg'

class Gifts extends Component {

    render() {
        return (
            <div className="flex-container">
                <div>
                    <p>Gift 1</p>
                    <Gift wrapped={gift1wrapped} unwrapped={gift1unwrapped} description="Self-Care Package: Sparkling Wine, Candy, Face Beautifiers, Popcorn"/>
                </div>
                <div>
                    <p>Gift 2</p>
                    <Gift wrapped={gift2wrapped} unwrapped={gift2unwrapped} description="'Hunks in Trunks' Drink Markers"/>
                </div>
                <div>
                    <p>Gift 3</p>
                    <Gift wrapped={gift3wrapped} unwrapped={gift3unwrapped} description="Singing Squirrel, Goat Milk Lotion, Seeds for Poppies"/>
                </div>
                <div>
                    <p>Gift 4</p>
                    <Gift wrapped={gift4wrapped} unwrapped={gift4unwrapped} description="Macrame Plant Hanger"/>
                </div>
                <div>
                    <p>Gift 5</p>
                    <Gift wrapped={gift5wrapped} unwrapped={gift5unwrapped} description="Blueberry Scone Mix & Suyematsu Raspberry Jam"/>
                </div>
                <div>
                    <p>Gift 6</p>
                    <Gift wrapped={gift6wrapped} unwrapped={gift6unwrapped} description="Spherical Vase & Sushi Book"/>
                </div>
            </div>
        )
    }
}


export default Gifts;


