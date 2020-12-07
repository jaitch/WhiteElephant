import React, { Component } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
import './List.css';
import NewPersonForm from "./NewPersonForm";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            randomList: [],
            error: '',
        };
    }

    onSubmit = (name) => {
        this.setState({
            people: [...this.state.people, name]
        });
    }
    randomFunction = () =>  {
        let people = this.state.people;
        let  i, j, k;
        for (i = people.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = people[i]
            people[i] = people[j]
            people[j] = k
        }
        this.setState({
            people: people
        });
    }

    render() {
        return (
            <div className="overlay">
                <NewPersonForm addPersonCallback={this.onSubmit} />
                <ul className="list">
                    Participants:

                    {this.state.people.map((person, i) => {
                        return (
                            <li key={i}>{person}</li>
                        )
                    })
                    }
                </ul>
                <button onClick={this.randomFunction}>Randomize</button>
            </div>
        )
    }
}

export default List;