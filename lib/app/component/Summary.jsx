const React = require('react');

export default class Summary extends React.Component {


    render() {
      return (
    <section className="summary">
    <h1 className="date">Date: {this.props.month},{this.props.day},{this.props.year}</h1>
    <p>The probability of precipitation is {this.props.chance}.</p>
    <p>The High Temperature will be {this.props.high}.</p>
      <p>The Low Temperature will be {this.props.low}.</p>
      <p>{this.props.summaryDay}</p>
      <p>{this.props.summaryNight}</p>
    </section>
      );
  }

}
