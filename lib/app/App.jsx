import React from 'react'
import ReactDOM from 'react-dom'
import DailyForecasts  from './component/DailyForecasts.jsx';
import LocationSearch  from './component/Search.jsx';
import StateSearch  from './component/Search.jsx';
import LocationButton  from './component/Button.jsx';
import ClearButton  from './component/Button.jsx';
const $ = require('jquery');

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      alertdata: [],
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
    let alertdata = data.alerts[0].level_meteoalarm_description
    let weatherdata = data.forecast.simpleforecast.forecastday
    let weathermacro = data.forecast.txt_forecast.forecastday
      this.setState({data: weatherdata, macrodata: weathermacro, alertdata: alertdata}, ()=>{
        localStorage.setItem('data', JSON.stringify(this.state.data))
        localStorage.setItem('macrodata', JSON.stringify(this.state.macrodata))
      })
  }

  getWu(city, state) {
    $.getJSON(this.props.url + 'conditions/forecast10day/q/' + state + '/' + city + '.json').then((weather)=>{
      let unknownArray = weather
      this.grabData(unknownArray)
    })
  }

  changeCity(city) {
    this.setState({ city: city }, ()=>{
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

  handleClear(city, state, data, macrodata) {
    let parent = document.getElementById('appended')
    let child = document.querySelectorAll('li')
    for (let i = 0; i >=child.length; i++) {
    parent.removeChild(child[i])
  }
    localStorage.clear()
    this.setState({city: '', state: '', data: [], macrodata: []})
}

  render() {
    return (
    <section className="body-container">
        <section className="search-container">
          <h3 className="title">{this.props.title}</h3>
          <LocationSearch
          handleChange={this.changeCity} location={this.state.city}
          placeholder="City"
          />
          <StateSearch
          handleChange={this.changeState} location={this.state.state}
          placeholder="State/Country"
          />
          <LocationButton text="Submit" handleClick={this.handleSubmit}
          class="location-button"
           />
          <ClearButton text="Clear" handleClick={this.handleClear}
          class="clear-button"
           />
       </section>
       <section id="main" className="main-container">
          <DailyForecasts
          city={this.state.city}
          state={this.state.state}
          alertdata={this.state.alertdata}
          data={this.state.data} macrodata={this.state.macrodata}/>
       </section>
    </section>
    );
  }

  componentDidMount(){
    let storedCity = localStorage.getItem('city');
    let storedData = localStorage.getItem('data');
    let storedMacro = localStorage.getItem('macrodata');
    let storedState = localStorage.getItem('state');

    this.setState({
      data: storedData ? JSON.parse(storedData) : [],
      macrodata: storedMacro ? JSON.parse(storedMacro) : [],
      state: storedState ? JSON.parse(storedState) : '',
      city: storedCity ? JSON.parse(storedCity) : ''
    })
  }
}

ReactDOM.render(<App title='Weather🔊Beat' url='https://api.wunderground.com/api/665cd45e10100c6b/alerts/' />, document.getElementById('application'))
