const React = require('react');


export default class DisplayLocation extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (

  <section className="LocationContainer">
    <h2>{this.props.city}</h2>
 </section>
    );
  }
}
