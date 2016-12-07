const React = require('react');


class DisplayLocation extends React.Component {
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
  <section className="LocationContainer">
    <h2>{this.props.city}</h2>
 </section>
    );
  }
}


module.exports = DisplayLocation;
