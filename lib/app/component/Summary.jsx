const React = require('react');
const $ = require('jquery');

class Summary extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     city: 'Default',
  //   };
  // }

// addToCount (num) {
//   this.setState({count: this.state.count + num});
// }




  render() {
    return (
  <section className="Summary">
    <h4>Hi</h4>
    <h2>{this.props.text}</h2>
 </section>
    );
  }
}


module.exports = Summary;
