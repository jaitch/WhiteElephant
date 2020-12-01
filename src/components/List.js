import React, { Component } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
import './List.css';
import NewPersonForm from "./NewPersonForm";

class List extends Component {
    constructor(props) {
        super();
        this.state = {
            people: [],
            error: '',
        };
    }

    onSubmit = (item, value) => {
        this.setState({
            [item]: value,
        });
    }
    render() {
        return (
            <div className="room">
                <NewPersonForm onSubmitCallback={this.onSubmit} varName="testing props">

                </NewPersonForm>
            </div>
        )
    }
}

export default List;