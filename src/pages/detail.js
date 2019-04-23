import React from 'react';
import MovieDetailContainer from '../components/MovieDetailContainer';

const detail = (params) => {

    const isShowDetail = () => {
        if (params.match.path === '/detail/:movieId') {
            return true;
        }
        else {
            return false;
        }
    }

    const movieId = params.match.params.movieId;

    return (
        <MovieDetailContainer movieId={movieId} isShowDetail={isShowDetail()} />
    )
}

export default detail;
