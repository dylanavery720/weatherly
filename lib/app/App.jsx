
const React = require('react');
// const ReactDOM = require('react-dom');
const Summary = require('./component/Summary.jsx');

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

    <div className="app"><Summary/></div>

    );
  }
}


module.exports = App;

// const $ = require('jquery');
