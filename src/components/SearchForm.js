import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        };
    }

    search(value) {
        console.log("Searching "+value);
        this.props.onSearch(value);
    }

    render() {
        return (
            <form className="search-form" onSubmit={
                (event) => {
                    event.preventDefault()
                    this.search(this.state.inputValue)
                }}
            >
                <input 
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.inputValue} 
                    onChange={(event) => this.setState({inputValue: event.target.value})}
                    />

                <button>{this.props.buttonTitle}</button>
            </form>
        )
    }

}

export default SearchForm;