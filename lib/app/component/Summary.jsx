const React = require('react');

class Summary extends React.Component {

    render() {
      return (
    <section className="summary">
    <h1 className="date">Date:{this.props.date}</h1>
    <p>Today the High Temperature will be {this.props.high}</p>
      <p>Today the Low Temperature will be {this.props.low}</p>
    </section>
      );
  }

}
module.exports = Summary;
