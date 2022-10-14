import React, { Component } from 'react'

export default class FilmPoster extends Component {
  render() {
    return (
        <img src={`https://image.tmdb.org/t/p/w780${this.props.poster}`} alt="" />
    )
  }
}