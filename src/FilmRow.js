import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default class FilmRow extends Component {

  handleDetailsClick(film) {
    console.log(`Fetching details for ${film}`)
  }

  render() {

    const displayDate = new Date(this.props.film.release_date).getFullYear();

    return (
        <div className="film-row" onClick={(film) => this.handleDetailsClick(`${this.props.film.title}`)}>
            <FilmPoster poster={this.props.film.poster_path}/>

            <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{displayDate}</p>
            </div>
            <Fave/>
        </div>

    )
  }
}