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
                            <li key={i}>{person}</li>
                        )
                    })
                    }
                </ul>
                <button onClick={this.randomize}>Randomize</button>
            </div>
        )
    }
}

export default List;