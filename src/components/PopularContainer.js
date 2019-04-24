import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import './PopularContainer.css';
import Popular from './Popular';

@inject('store')
@observer
class PopularContainer extends Component {

    componentDidMount() {
        const { getPplrMovie } = this.props.store;
        getPplrMovie();
    }

    renderPopularMovie = () => {
        const { pplrMovie } = this.props.store;
        if (pplrMovie.results) {
            const pplr = pplrMovie.results.slice(0, 2);
            return <Popular pplr={pplr} />
        } else {
            return <p>Loading...</p>
        }
    }

    render() {
        return (
            <div className="Popular__Movie__Container">
                {this.renderPopularMovie()}
            </div>
        )
    }
}

export default PopularContainer;