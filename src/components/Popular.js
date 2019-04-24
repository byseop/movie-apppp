import React from 'react';
import { Link } from 'react-router-dom';

const Popular = ({ pplr }) => {
    const renderPopularList = () => {
        const pplrData = pplr.map((pplrMovie) => {
            return <PopularList {...pplrMovie} key={pplrMovie.id} />
        });
        return pplrData;
    }
    return (
        <div className="Popular__List__Wrap">
            <div className="Type"><h2>Popular Movie</h2></div>
            {renderPopularList()}
        </div>
    );
}

const PopularList = ({ id, title, poster_path, vote_average, overview }) => {
    return (
        <div className="Popular__List">
            <Link to={`/detail/${id}`}>
                <div className="Popular__Poster__Wrap">
                    <div className="Poster">
                        <img src={`http://image.tmdb.org/t/p/w780${poster_path}`} alt={title} />
                    </div>
                </div>
                <div className="Popular__Info__Wrap">
                    <div className="Average"><span><i className="fas fa-star"></i></span><span>{vote_average}</span></div>
                    <div className="Title"><h3>{title}</h3></div>
                    <div className="Overview"><p>{overview}</p></div>
                </div>
            </Link>
        </div>
    );
}


export default Popular;