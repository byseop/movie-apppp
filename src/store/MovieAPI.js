const MovieAPI = {
    NOW_PLAYING: '/movie/now_playing',
    TRENDING: '/trending/movie/week',
    TOP_RATED: '/movie/top_rated',
    UPCOMING: '/movie/upcoming',
    // searchKeyword: '&query=' + this.searchWordFix,

    SEARCH: '/search/movie',
    DEFAULT_URL: 'https://api.themoviedb.org/3',
    API_KEY: '?api_key=dc11dbd0605b4d60cc66ce5e8363e063',
    LANGUAGE_KR: '&language=ko-KR',
    LANGUAGE_EN: '&language=en-US',
}
export default MovieAPI;