
import React from 'react'

import Summary  from './component/Summary.jsx';
import LocationSearch  from './component/LocationSearch.jsx';
import LocationButton  from './component/LocationButton.jsx';
const $ = require('jquery');

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

  getWeather() {
    $.get('http://weatherly-api.herokuapp.com/api/weather', (response) => {
      this.setState({
        weather: response,
      });
    });
  }


  handleSubmit() {
    this.getWeather();
    console.log(this.state.weather[3].location);
    // this.props.sendForecast(this.state);
  }

  render() {
    return (
    <section>
      <LocationSearch  />
    <LocationButton text="Submission" handleClick={this.handleSubmit.bind(this)} />
    <Summary/>
    </section>
    );
  }
}


module.exports = App;

// const $ = require('jquery');
