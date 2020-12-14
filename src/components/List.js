import React, { Component } from 'react';
import './List.css';
import NewPersonForm from "./NewPersonForm";

class List extends Component {
    constructor(props) {
        super(props);
            this.state = {
                value: "",
            };
        }

    onSubmit = (event) => {
        this.props.listPeopleCallback(event)
    }

    randomize = () => {
        this.props.randomizeCallback()
    }


    render() {
        return (
            <div className="overlay">
                <NewPersonForm addPersonCallback={this.onSubmit} />
                <ul className="list">

                    {this.props.people.map((person, i) => {
                        return (
                            <li
                                key={i}>{person}
                                <form>
                                    <select class="custom-select" onSelect={this.handleSelect}>
                                        <option value="0">Select gift:</option>
                                        <option value="1">Gift 1</option>
                                        <option value="2">Gift 2</option>
                                        <option value="3">Gift 3</option>
                                        <option value="4">Gift 4</option>
                                        <option value="5">Gift 5</option>
                                        <option value="6">Gift 6</option>
                                        <option value="7">Gift 7</option>
                                        <option value="8"   >Gift 8</option>
                                    </select>
                                </form>
                            </li>
                        )
                    })
                    }
                </ul>
                <button onClick={this.randomize} className="button">Randomize</button>
            </div>
        )
    }
}

export default List;