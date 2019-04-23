import React, { Component } from 'react'
import SearchForm from './SearchForm';
import './SearchFormContainer.css';


class SearchFormContainer extends Component {
    render() {
        return (
            <div className="Search__Form__Wrapper">
                <SearchForm />
            </div>
        )
    }
}

export default SearchFormContainer;
