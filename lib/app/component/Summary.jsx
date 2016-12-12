const React = require('react');

export default class Summary extends React.Component {

  render() {
    const month = this.props.month.toUpperCase();
    return (
    <section className="summary">
    <img src={this.props.icon} className='icon' alt="weather icon"></img>
    <h1 className="locations">CITY: {this.props.city}, {this.props.state}</h1>
    <h1 className="date">DATE: {this.props.weekDay}, {month} {this.props.day}, {this.props.year}</h1>
    <h1 className='lines'>The probability of precipitation is {this.props.chance}%.</h1>
    <h1 className='lines'>The High Temperature will be {this.props.high}.</h1>
      <h1 className='lines'>The Low Temperature will be {this.props.low}.</h1>
      <h1 className='lines'>Day: {this.props.summaryDay}</h1>
      <h1 className='lines'>Night: {this.props.summaryNight}</h1>
    </section>
      );
  }

}
