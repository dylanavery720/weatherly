const React = require('react');
// const ReactDOM = require('react-dom');


class LocationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Default',
    };
  }

// addToCount (num) {
//   this.setState({count: this.state.count + num});
// }

  render() {
    return (
  <section className="SearchContainer">
    <h3>Weather🔊Beat</h3>
    <input type="text" placeholder="Your Location" aria-label="Your Location"/>
 </section>
    );
  }
}

{ /* ReactDOM.render(<LocationButton text={this.state.city}
   />, document.getElementById('application')); */ }

module.exports = LocationButton;
