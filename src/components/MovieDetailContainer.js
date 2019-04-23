import React, { Component } from 'react'
import MovieDetail from './MovieDetail';
import { observer, inject } from 'mobx-react';
import './MovieDetailContainer.css';

@inject('store')
@observer
class MovieDetailContainer extends Component {

    componentDidMount() {
        const { movieId } = this.props;
        const { getMovieDetail } = this.props.store;
        getMovieDetail(movieId);
    }

    render() {
        const { movieDetail } = this.props.store;
        const { isShowDetail } = this.props;

        return (
            <div className="Movie__Detail__Wrap">
                <MovieDetail {...movieDetail} isShowDetail={isShowDetail} />
            </div>
        )
    }
}

export default MovieDetailContainer;
