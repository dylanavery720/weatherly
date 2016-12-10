
import React from 'react'
import ReactDOM from 'react-dom'
import DailyForecasts  from './component/DailyForecasts.jsx';
import LocationSearch  from './component/LocationSearch.jsx';
import LocationButton  from './component/LocationButton.jsx';
import DisplayLocation from './component/LocationDisplay.jsx';
import Summary from './component/Summary.jsx';
const $ = require('jquery');

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      forecasts: [],
      city: ''
    }
  }

  componentDidMount(){
    let storedWeather = localStorage.getItem('forecasts')
    let storedCity = localStorage.getItem('city');

    this.setState({
      forecasts: storedWeather ? JSON.parse(storedWeather) : [],
      city: storedCity ? JSON.parse(storedCity) : []
    })
  }



  locationAccepted(filteredWeather){
    this.setState({ forecasts: filteredWeather}, ()=>{localStorage.setItem('forecasts', JSON.stringify(this.state.forecasts))})
  }

  getWeather(city) {
    $.get('http://weatherly-api.herokuapp.com/api/weather').then((weather)=>{
      let filteredWeather = weather.filter((weatherArray)=>{
        return weatherArray.location === city;
      })
      this.locationAccepted(filteredWeather);
    })
  }

  changeCity(city) {
    this.setState({ city: city }, ()=>{localStorage.setItem('city', JSON.stringify(city))})
  }

  handleSubmit(city) {
    this.getWeather(this.state.city);
  }

  render() {
    return (
    <section className="body-container">
        <section className="search-container">
          <h3 className="title">{this.props.title}</h3>
          <LocationSearch
          handleChange={this.changeCity.bind(this)} />
          <LocationButton text="Submit" handleClick={this.handleSubmit.bind(this)} />
       </section>
       <DisplayLocation city={this.state.city} />
       <section className="main-container">
          <DailyForecasts forecasts={this.state.forecasts}/>
       </section>
    </section>
    );
  }
}


ReactDOM.render(<App title='Weather🔊Beat' url='https://api.wunderground.com/api/881631f063e09bd3/' />, document.getElementById('application'))

// module.exports = App;

// const $ = require('jquery');
