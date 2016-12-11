import React from 'react'
import ReactDOM from 'react-dom'
import DailyForecasts  from './component/DailyForecasts.jsx';
import LocationSearch  from './component/LocationSearch.jsx';
import StateSearch  from './component/StateSearch.jsx';
import LocationButton  from './component/LocationButton.jsx';
import ClearButton  from './component/LocationButton.jsx';
const $ = require('jquery');



export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      forecasts: [],
      data: [],
      macrodata: [],
      state: '',
      city: ''
    }
    this.changeCity = this.changeCity.bind(this)
    this.changeState = this.changeState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.grabData = this.grabData.bind(this)
  }

  grabData(data) {
    let weatherdata = data.forecast.simpleforecast.forecastday
    let weathermacro = data.forecast.txt_forecast.forecastday
      this.setState({data: weatherdata, macrodata: weathermacro}, ()=>{
        localStorage.setItem('data', JSON.stringify(this.state.data))
        localStorage.setItem('macrodata', JSON.stringify(this.state.macrodata))
      })
  }

  getWu(city, state) {
    $.getJSON(this.props.url + 'conditions/forecast10day/q/' + state + '/' + city + '.json').then((weather)=>{
      let unknownArray = weather
      console.log(unknownArray)
      this.grabData(unknownArray)
    })
  }

  changeCity(city) {
    this.setState({ city: city}, ()=>{
    localStorage.setItem('city', JSON.stringify(city))
    })
  }

  changeState(state) {
    this.setState({ state: state }, ()=>{
    localStorage.setItem('state', JSON.stringify(state))
    })
  }

  handleSubmit(city, state) {
    this.getWu(this.state.city, this.state.state);
  }

  handleClear(city) {
    let parent = document.getElementById('main')
    let child = document.querySelector('div')
    parent.removeChild(child)
    localStorage.clear()

  }

  render() {
    return (
    <section className="body-container">
        <section className="search-container">
          <h3 className="title">{this.props.title}</h3>
          <LocationSearch
          handleChange={this.changeCity} />
          <StateSearch
          handleChange={this.changeState} />
          <LocationButton text="Submit" handleClick={this.handleSubmit} />
          <ClearButton text="Clear" handleClick={this.handleClear} />
       </section>
       <section id="main" className="main-container">
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
    let storedState = localStorage.getItem('state');

    this.setState({
      forecasts: storedWeather ? JSON.parse(storedWeather) : [],
      data: storedData ? JSON.parse(storedData) : [],
      macrodata: storedMacro ? JSON.parse(storedMacro) : [],
      state: storedState ? JSON.parse(storedState) : '',
      city: storedCity ? JSON.parse(storedCity) : ''
    })
  }

}


ReactDOM.render(<App title='Weather🔊Beat' url='https://api.wunderground.com/api/665cd45e10100c6b/' />, document.getElementById('application'))
