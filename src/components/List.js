import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ id, title, poster_path, vote_average }) => {
    return (
        <div className="Movie__List swiper-slide">
            <Link to={`/detail/${id}`}>
                <div className="Poster"><img src={`http://image.tmdb.org/t/p/w780${poster_path}`} alt={title} /></div>
                <div className="Info">
                    <div className="Average"><span><i className="fas fa-star"></i></span><span>{vote_average}</span></div>
                    <div className="Title"><h3>{title}</h3></div>
                </div>
            </Link>
        </div>
    )
}


export default List;