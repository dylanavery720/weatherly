import React from 'react'
const $ = require('jquery');
// const ReactDOM = require('react-dom');


export default class LocationButton extends React.Component {

  render() {
    return (
      <section className="location-button-container">
        <button className="location-button" onClick={this.props.handleClick}>
          <span>{this.props.text}</span>
        </button>
      </section>
    )
  }
}
