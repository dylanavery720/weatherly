const React = require('react');

export default class Summary extends React.Component {
  

    render() {
      return (
    <section className="summary">
    <h1 className="date">Date:{this.props.date}</h1>
    <p>Today there is a {this.props.chance} percent chance of {this.props.type} weather.</p>
    <p>The High Temperature will be {this.props.high}</p>
      <p>The Low Temperature will be {this.props.low}</p>
      <p>Current temperature is {this.props.temp}</p>
    </section>
      );
  }

}
