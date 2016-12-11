import React from 'react';

export default class LocationButton extends React.Component {

  render() {
    return (
      <section className="location-button-container">
        <button className="location-button" onClick={this.props.handleClick}>
          <span>{this.props.text}</span>
        </button>
      </section>
    );
  }
}
