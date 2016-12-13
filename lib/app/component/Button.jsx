import React from 'react';

export default class Button extends React.Component {

  render() {
    return (
      <section className="location-button-container">
        <button className={this.props.class}
                onClick={this.props.handleClick}>
          <span>{this.props.text}</span>
        </button>
      </section>
    );
  }
}
