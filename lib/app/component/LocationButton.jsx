const React = require('react');
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
      <button className="LocationButton">
        <span>{this.props.text}</span>
      </button>
    )
  }
}

module.exports = LocationButton;
