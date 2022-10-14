import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmListing extends Component {

  state = {
    filter: 'all'
  }

  handleFilterClick(filter) {
    console.log(`Setting filter to ${filter}`);
    this.setState({
      filter: filter
    })
    console.log(`Filter is now set to ${filter}`)
  }

  render() {

    const allFilms = this.props.data.map(film => (
        <FilmRow film={film} key={film.id}/>
    ))

    let allHighlight = this.state.filter === 'all' ? 'is-active' : null; 
    let filterHighlight = this.state.filter === 'faves' ? 'is-active' : null; 

    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
            <div className={`film-list-filter ${allHighlight}`} onClick={(filter) => this.handleFilterClick('all')}>
              ALL
              <span className="section-count">{this.props.data.length}</span>
            </div>
            <div className={`film-list-filter ${filterHighlight}`} onClick={(filter) => this.handleFilterClick('faves')}>
              FAVES
              <span className="section-count">0</span>
            </div>
          </div>
          {allFilms}
        </div>
    )
  }
}