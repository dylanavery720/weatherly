import React from 'react'

class LocationSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
    };
  }

  updateLocation(e) {
    const { name } = e.target;
    this.setState({ name });
  }

  handleSubmit() {
    this.props.sendForecast(this.state)
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
    onChange={(e)=>{
    this.updateLocation(e);
    }}/>
    <button className="LocationButton" onClick={ () => {
      this.handleSubmit()
    }}>
      <span>Submit</span>
    </button>
 </section>
    );
  }
}

{ /* ReactDOM.render(<LocationButton text={this.state.city}
   />, document.getElementById('application')); */ }

module.exports = LocationSearch;
