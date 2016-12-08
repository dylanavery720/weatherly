import React from 'react'
const $ = require('jquery');
// const ReactDOM = require('react-dom');


class LocationButton extends React.Component {

  render() {
    return (
      <section className="LocationButtonContainer">
        <button className="LocationButton" onClick={this.props.handleClick}>
          <span>{this.props.text}</span>
        </button>
      </section>
    )
  }
}

module.exports = LocationButton;
