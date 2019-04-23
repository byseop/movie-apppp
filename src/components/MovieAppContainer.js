import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListContainer from './ListContainer';
import SearchFormContainer from './SearchFormContainer';
import { detail } from '../pages';
import './MovieAppContainer.css';

const MovieAppContainer = () => {
    return (
        <div className="MovieApp">
            <div className="MovieApp__Container">
                <SearchFormContainer />
                <Switch>
                    <Route exact path='/' component={ListContainer} />
                    <Route path='/detail/:movieId' component={detail} />
                </Switch>
            </div>
        </div>
    )
}

export default MovieAppContainer;
