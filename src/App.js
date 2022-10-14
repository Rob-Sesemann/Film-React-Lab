import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const films = TMDB.films

export default class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
  }
  render() {
    
    return (
      <div className="film-library">
        <FilmListing data={films} films={this.state.films} faves={this.state.faves}/>
        <FilmDetails data={films} film={this.state.current}/>
      </div>
    )
  }
}