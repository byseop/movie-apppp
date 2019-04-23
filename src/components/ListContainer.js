import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import Swiper from 'swiper';
import List from './List';
import './swiper-4.5.0.min.css';
import './ListContainer.css'

@inject('store')
@observer
class ListContainer extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         virtualData: [],
    //     }
    // }

    componentDidMount() {
        const { getMovieList } = this.props.store;
        getMovieList();
    }

    renderMovieList = () => {
        const { movieListArr } = this.props.store;
        const movieData = movieListArr.results;
        if (movieData) {
            const movieList = movieData.map(movie => {
                return (
                    <List 
                        id={movie.id} 
                        key={movie.id} 
                        title={movie.title}
                        poster_path={movie.poster_path}
                        vote_average={movie.vote_average}
                    />
                )
            })
            this.renderSlider();
            return movieList;
        } else {
            return <div className="loading">Loading...</div>
        }
    }

    renderSlider = () => {
        const { isLoadMovieList } = this.props.store;
        if (isLoadMovieList === 'done') {
            const movieSlider = new Swiper('.Movie__Sl', {// eslint-disable-line
                slidesPerView: 3.5,
                freeMode: true,
                spaceBetween: '5%',
                breakpoints: {
                    768: {
                        slidesPerView: 2.5
                    }
                }
            })
        } else return null;
    }

    render() {
        return (
            <div className="Movie__List__Container">
                <div className="List__Container swiper-container Movie__Sl">
                    <div className="Type"><h2>Now Playing</h2></div>
                    <div className="swiper-wrapper">
                        {this.renderMovieList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListContainer;