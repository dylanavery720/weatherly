import React from 'react';


class LocationSearch extends React.Component {
  constructor() {
    super();
  }


  updateLocation(e) {
    console.log(e.target.value)
    const { name, value } = e.target;
    this.setState({ [name]: value },
   this.props.handleChange(value));
  }



  render() {
    return (
  <section className="search">
    {/* <h3>Weather🔊Beat</h3> */}
    <input
    type="text"
    name="city"
    className="location-input"
    placeholder="Your Location"
    aria-label="Your Location"
    onChange={(e) => {
    this.updateLocation(e);
    }}/>

 </section>
    );
  }
}

module.exports = LocationSearch;
