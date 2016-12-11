const React = require('react');

export default class Summaries extends React.Component {


    render() {
      return (
    // <section className='summary'>
      <p>{this.props.summary}</p>
    // </section>
      );
  }

}
