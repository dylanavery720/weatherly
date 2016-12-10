
import React from 'react'
import ReactDOM from 'react-dom'
import Summary  from './component/Summary.jsx';
import LocationSearch  from './component/LocationSearch.jsx';
import LocationButton  from './component/LocationButton.jsx';
import DisplayLocation from './component/LocationDisplay.jsx';
import DailyForecasts from './component/Forecast.jsx';
const $ = require('jquery');

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      forecasts: [],
      city: ''
    }
  }

  // storeForecast(forecast) {
  //   this.setState({ forecasts: this.state.forecasts})
  // }

  locationAccepted(filteredWeather){
    this.setState({ forecasts: filteredWeather})
  }

  getWeather(city) {
    $.get('http://weatherly-api.herokuapp.com/api/weather').then((weather)=>{
      let filteredWeather = weather.filter((weatherArray)=>{
        return weatherArray.location === city;
      })
      console.log(filteredWeather)
      this.locationAccepted(filteredWeather);
    })
  }

  changeCity(city) {
    this.setState({ city: city })
  }

  handleSubmit(city) {
    this.getWeather(this.state.city);
  }

  render() {
    return (
    <section>
        <section className="search-container">
          <h3>{this.props.title}</h3>
          <LocationSearch handleChange={this.changeCity.bind(this)} />
          <LocationButton text="Submit" handleClick={this.handleSubmit.bind(this)} />
       </section>
       <section>
          <DisplayLocation city={this.state.city} />
          <Summary forecasts={this.state.forecasts}/>
       </section>
    </section>
    );
  }
}


ReactDOM.render(<App title='Weather🔊Beat' />, document.getElementById('application'))

// module.exports = App;

// const $ = require('jquery');
