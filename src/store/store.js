import { observable, flow, configure, action } from 'mobx';
import MovieAPI from './MovieAPI';
import axios from 'axios';

configure({ enforceActions: 'observed' });

export default class store {
    constructor(root) {
        this.root = root;
    }

    //──────────────────────────────────────────────────────────────
    // Movie List
    @observable isLoadMovieList = 'pending';
    @observable movieListArr = [];
    getMovieList = flow(function*() {
        try {
            const response = yield axios.get(
                MovieAPI.DEFAULT_URL 
                + MovieAPI.NOW_PLAYING 
                + MovieAPI.API_KEY 
                + MovieAPI.LANGUAGE_EN
            )
            const data = response.data;
            yield this.movieListArr = data;
            this.isLoadMovieList = 'done';
            // console.log(this.movieListArr);
        } catch (error) {
            console.error(error);
            this.isLoadMovieList = 'error';
        }
    });
    getMovieList = this.getMovieList.bind(this);
    //──────────────────────────────────────────────────────────────

    //──────────────────────────────────────────────────────────────
    // Movie Detail
    @observable isLoadMovieDetail = 'pending';
    @observable movieDetail = [];
    getMovieDetail = flow(function* (movieId) {
        try {
            const response = yield axios.get(
                MovieAPI.DEFAULT_URL+'/movie/'+movieId
                + MovieAPI.API_KEY
                + MovieAPI.LANGUAGE_EN
            );
            const data = response.data;
            this.movieDetail = data;
            this.isLoadMovieDetail = 'done';
        }
        catch (error) {
            console.error(error);
            this.isLoadMovieDetail = 'error';
        }
    });
    getMovieDetail = this.getMovieDetail.bind(this);
    //──────────────────────────────────────────────────────────────

    //──────────────────────────────────────────────────────────────
    // Popular Movie
    @observable isLoadPopular = 'pending';
    @observable pplrMovie = [];

    getPplrMovie = flow(function* () {
        try {
            const response = yield axios.get(
                MovieAPI.DEFAULT_URL
                + MovieAPI.POPULAR
                + MovieAPI.API_KEY
                + MovieAPI.LANGUAGE_EN
            );
            const data = response.data;
            this.pplrMovie = data;
            this.isLoadPopular = 'done';
        }
        catch (error) {
            console.error(error);
            this.isLoadPopular = 'error';
        }
    })
    getPplrMovie = this.getPplrMovie.bind(this);
    //──────────────────────────────────────────────────────────────
}