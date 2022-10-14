import React, { Component } from 'react'

export default class Fave extends Component {

    state = {
        isFave: false
    }

  handleClick = (e) => {
    e.stopPropagation()
    console.log("handling Fave click")
    console.log(this.state.isFave)
    this.setState({
        isFave: !this.state.isFave
    })
    
  }

  render() {

    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'

    return (
        <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
            <p className="material-icons">{isFave}</p>
            <p>{this.state.isFave}</p>
        </div>
    )
  }
}
