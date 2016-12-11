import React from 'react'
// const ReactDOM = require('react-dom');


export default class ClearButton extends React.Component {

  render() {
    return (
      <section className="location-button-container">
        <button className="clear-button" onClick={this.props.handleClick}>
          <span>{this.props.text}</span>
        </button>
      </section>
    )
  }
}

module.exports = ClearButton;
