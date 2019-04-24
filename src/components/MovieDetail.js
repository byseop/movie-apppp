import React from 'react';

const MovieDetail = ({ 
    isShowDetail, 
    backdrop_path, 
    title,
    release_date,
    tagline,
    genres,
    overview
}) => {
    return (
        <div className="Movie__Detail">
            <Background backdrop_path={backdrop_path} isShowDetail={isShowDetail} />
            <div className="Movie__Detail__Inner">
                <Title title={title} release_date={release_date} tagline={tagline} />
                <Genre genres={genres} />
                <Overview overview={overview} />
            </div>
        </div>
    );
}

const Background = ({ backdrop_path, isShowDetail }) => {
    const movieBgStyle = {
        backgroundImage: `url(http://image.tmdb.org/t/p/original${backdrop_path})`
    };

    return (
        <div className="Movie__Background" style={isShowDetail ? movieBgStyle : null} />
    );
};

const Title = ({ title, release_date, tagline }) => {
    const renderRelease = () => {
        if (release_date) {
            return release_date.split('-')[0];
        }
    };

    return (
        <div className="Title__Wrap">
            <div className="Title"><h2>{title}</h2></div>
            <div className="Released__Date"><p>{renderRelease()}</p></div>
            <div className="Tagline">{tagline}</div>
        </div>
    );
};

const Genre = ({ genres }) => {
    const renderGenre = () => {
        if (genres) {
            const genre = genres.map((genreList) => {
                return <GenreList genre={genreList.name} key={genreList.id} />
            });
            return genre;
        }
        return null;
    }

    const GenreList = ({ genre }) => {
        return <div className="Genre__List"><p>{genre}</p></div>
    }

    return (
        <div className="Genres">
            {renderGenre()}
        </div>
    );
}

const Overview = ({ overview }) => {
    return (
        <div className="Overview__Wrap">
            <p>{overview}</p>
        </div>
    )
}

export default MovieDetail;
