import React from 'react'
const $ = require('jquery');
// const ReactDOM = require('react-dom');


class LocationButton extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: props.initialCount }
  // }

// add (num) {
//   this.setState({count: this.state.count + num});
// }





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
