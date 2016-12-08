import React from 'react';
const $ = require('jquery');


class LocationSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      weather: []
    };
  }

  // getWeather() {
  //   $.get('http://weatherly-api.herokuapp.com/api/weather', (response) => {
  //     this.setState({
  //       weather: response,
  //     });
  //   });
  // }

  updateLocation(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
  <section className="SearchContainer">
    <h3>Weather🔊Beat</h3>
    <input
    type="text"
    name="city"
    className="location-input"
    placeholder="Your Location"
    aria-label="Your Location"
    value={this.state.city}
    onChange={(e) => {
    this.updateLocation(e);
    console.log(this.state.city);
    }}/>
    {/* <button className="LocationButton" onClick={ () => {
      this.handleSubmit()
    }}>
      <span>Submit</span>
    </button> */}
 </section>
    );
  }
}

{ /* ReactDOM.render(<LocationButton text={this.state.city}
   />, document.getElementById('application')); */ }

module.exports = LocationSearch;
