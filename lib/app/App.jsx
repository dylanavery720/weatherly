
import React from 'react'
import ReactDOM from 'react-dom'
import DailyForecasts  from './component/DailyForecasts.jsx';
import LocationSearch  from './component/LocationSearch.jsx';
import LocationButton  from './component/LocationButton.jsx';
import DisplayLocation from './component/LocationDisplay.jsx';
const $ = require('jquery');



export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      forecasts: [],
      data: [],
      macrodata: [],
      city: ''
    }
    this.changeCity = this.changeCity.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.grabData = this.grabData.bind(this)
  }



  locationAccepted(filteredWeather, city){
      if(filteredWeather.length > 0) {
      this.setState({ forecasts: filteredWeather}, ()=>{
        localStorage.setItem('forecasts', JSON.stringify(this.state.forecasts))
      })
    } else {
      this.getWu(city);
    }
  }

  getWeather(city) {
    $.get('http://weatherly-api.herokuapp.com/api/weather').then((weather)=>{
      let filteredWeather = weather.filter((weatherArray)=>{
        return weatherArray.location === city;
      })
      this.locationAccepted(filteredWeather, city);
    })
  }

  grabData(data) {
    let weatherdata = data.forecast.simpleforecast.forecastday
    let weathermacro = data.forecast.txt_forecast.forecastday
      this.setState({data: weatherdata, macrodata: weathermacro}, ()=>{
        localStorage.setItem('data', JSON.stringify(this.state.data))
        localStorage.setItem('macrodata', JSON.stringify(this.state.macrodata))
      })
  }

  getWu(city) {
    $.getJSON(this.props.url+ 'conditions/forecast10day/q/CA/' + city + '.json').then((weather)=>{
      let unknownArray = weather

      this.grabData(unknownArray)
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
          handleChange={this.changeCity} />
          <LocationButton text="Submit" handleClick={this.handleSubmit} />
       </section>
       {/* <DisplayLocation city={this.state.city} /> */}
       <section className="main-container">
          <DailyForecasts forecasts={this.state.forecasts} locations={this.state.city} data={this.state.data} macrodata={this.state.macrodata}/>
       </section>
    </section>
    );
  }


  componentDidMount(){
    let storedWeather = localStorage.getItem('forecasts')
    let storedCity = localStorage.getItem('city');
    let storedData = localStorage.getItem('data');
    let storedMacro = localStorage.getItem('macrodata');

    this.setState({
      forecasts: storedWeather ? JSON.parse(storedWeather) : [],
      data: storedData ? JSON.parse(storedData) : [],
      macrodata: storedMacro ? JSON.parse(storedMacro) : [],
      city: storedCity ? JSON.parse(storedCity) : ''
    })
  }

}


ReactDOM.render(<App title='Weather🔊Beat' url='https://api.wunderground.com/api/665cd45e10100c6b/' />, document.getElementById('application'))
