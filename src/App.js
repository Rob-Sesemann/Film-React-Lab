import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const films = TMDB.films
console.log(films)

export default class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }

  handleFaveToggle = (films) => {
    
    const faves = faves.slice()
    console.log(faves, "This is faves on line 25")
    const filmIndex = faves.indexOf()
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