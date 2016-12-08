import React from 'react';
const $ = require('jquery');


class LocationSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      city: ''
    };
  }


  updateLocation(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.props.handleChange(value));
  }



  render() {
    return (
  <section className="SearchContainer">
    {/* <h3>Weather🔊Beat</h3> */}
    <input
    type="text"
    name="city"
    className="location-input"
    placeholder="Your Location"
    aria-label="Your Location"
    value={this.state.city}
    onChange={(e) => {
    this.updateLocation(e);
    }}/>
 </section>
    );
  }
}

module.exports = LocationSearch;
