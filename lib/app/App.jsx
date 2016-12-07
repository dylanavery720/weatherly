
import React from 'react'

import Summary  from './component/Summary.jsx';
import LocationSearch  from './component/LocationSearch.jsx';
import LocationButton  from './component/LocationButton.jsx';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      forecasts: []
    }
  }
  storeForecast(forecast) {
    this.setState({ forecasts: this.state.forecasts})
  }

  render() {
    return (
    <section>
      <LocationSearch sendForecast={this.storeForecast.bind(this)} />
    {/* <LocationButton text="Submission" /> */}
    <Summary/>
    </section>
    );
  }
}


module.exports = App;

// const $ = require('jquery');
