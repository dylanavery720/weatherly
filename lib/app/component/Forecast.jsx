const React = require('react');

class DailyForecasts extends React.Component {

    render() {
      return (
    <section className="Summary">
      <h1>Date:{this.props.date}</h1>
      <h4>High:{this.props.high}</h4>
      <h4>Low:{this.props.low}</h4>
    </section>
      );
  }

}
module.exports = DailyForecasts;
