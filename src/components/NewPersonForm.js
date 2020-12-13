import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewPersonForm.css'

class NewPersonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
        console.log(`new name: ${event.target.value}`)
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const newPerson = this.state.value;
        this.setState({
            value: "",
            });

        this.props.addPersonCallback(newPerson);
    }

    render() {
        return (
            <form className="overlay">
            <h3>Participants: </h3>
                <br></br>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Add" onClick={this.handleSubmit} />
            </form>
        );
    }


}

NewPersonForm.propTypes = {
    addPersonCallback: PropTypes.func.isRequired,
}

export default NewPersonForm;