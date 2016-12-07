const React = require('react');



class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
  }

  updateLocation(e) {
    const { name } = e.target;
    this.setState({ name });
  }

  render() {
    return (
  <section className="SearchContainer">
    <h3>Weather🔊Beat</h3>
    <input
    type="text"
    name="city"
    placeholder="Your Location"
    aria-label="Your Location"
    value={this.state.city}
    onChange={(e)=>{
      this.updateLocation(e);
    }}/>
 </section>
    );
  }
}

{ /* ReactDOM.render(<LocationButton text={this.state.city}
   />, document.getElementById('application')); */ }

module.exports = LocationSearch;
