

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Default',
    };
  }

  render() {
    return (
  <section className="SearchContainer">
    <h3>Weather🔊Beat</h3>
    <input type="text" placeholder="Your Location" aria-label="Your Location"/>
 </section>
    );
  }
}

{ /* ReactDOM.render(<LocationButton text={this.state.city}
   />, document.getElementById('application')); */ }

module.exports = LocationButton;
