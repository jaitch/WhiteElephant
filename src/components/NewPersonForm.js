import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPersonForm.css'

class NewPersonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                {this.props.varName}
            Name:
            </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
    </form>
        );
    }


}

NewPersonForm.propTypes = {
    addPersonCallback: PropTypes.func.isRequired,
};

export default NewPersonForm;