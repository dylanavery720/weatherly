
import React from 'react'
import ReactDOM from 'react-dom'
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
        forecasts: response,
      });
    });
  }


  handleSubmit() {
    this.getWeather();
    console.log(this.state.forecasts[22].date);
    // this.props.sendForecast(this.state);
  }

  render() {
    return (
    <section>
        <section className="search-container">
          <LocationSearch  />
          <LocationButton text="Submission" handleClick={this.handleSubmit.bind(this)} />
       </section>
       <section>
          <Summary />
       </section>
    </section>
    );
  }
}


ReactDOM.render(<App title='Weather🔊Beat' />, document.getElementById('application'))

// const $ = require('jquery');
