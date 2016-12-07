
const React = require('react');
// const ReactDOM = require('react-dom');
const Summary = require('./component/Summary.jsx');
const LocationSearch = require('./component/LocationSearch.jsx');
const LocationButton = require('./component/LocationButton.jsx');

class App extends React.Component {
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
    <section>
    <LocationSearch />
    <LocationButton text="Submission" onClick=""/>
    <Summary/>
    </section>
    );
  }
}


module.exports = App;

// const $ = require('jquery');
