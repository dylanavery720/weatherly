
import React from 'react'
import ReactDOM from 'react-dom'
import Summary  from './component/Summary.jsx';
import LocationSearch  from './component/LocationSearch.jsx';
import LocationButton  from './component/LocationButton.jsx';
import DisplayLocation from './component/LocationDisplay.jsx';
const $ = require('jquery');

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      forecasts: [],
      city: ''
    }
  }
  storeForecast(forecast) {
    this.setState({ forecasts: this.state.forecasts})
  }

  getWeather() {
    $.get('http://weatherly-api.herokuapp.com/api/weather', (response) => {
      this.setState({
        forecasts: response,
      });
    });
  }

  changeCity(city) {
    this.setState({ city: city })
  }

  handleSubmit(city) {
    this.getWeather();
    console.log(this.state.forecasts[22]);
  }

  render() {
    return (
    <section>
        <section className="search-container">
          <h3>{this.props.title}</h3>
          <LocationSearch handleChange={this.changeCity.bind(this)} />
          <LocationButton text="Submission" handleClick={this.handleSubmit.bind(this)} />
       </section>
       <section>
          <DisplayLocation city={this.state.city} />
          <Summary />
       </section>
    </section>
    );
  }
}


ReactDOM.render(<App title='Weather🔊Beat' />, document.getElementById('application'))

// module.exports = App;

// const $ = require('jquery');
