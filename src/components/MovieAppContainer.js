import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchFormContainer from './SearchFormContainer';
import { detail } from '../pages';
import './MovieAppContainer.css';
import MovieApp from './MovieApp';

const MovieAppContainer = () => {
    return (
        <div className="MovieApp">
            <div className="MovieApp__Container">
                <SearchFormContainer />
                <Switch>
                    <Route exact path='/' component={MovieApp} />
                    <Route path='/detail/:movieId' component={detail} />
                </Switch>
            </div>
        </div>
    )
}

export default MovieAppContainer;
